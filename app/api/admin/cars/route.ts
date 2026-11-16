import { NextResponse } from "next/server";
import { requireAdmin, supabase, errorResponse } from "../../../../lib/kz-db";

export async function GET() {
  if (!(await requireAdmin())) return errorResponse("Unauthorized", 401);
  const res = await supabase("/rest/v1/kz_cars?select=*&order=created_at.desc", {}, true);
  return NextResponse.json(await res.json(), { status: res.status });
}
// K&Z-controlled approved gallery host for previous ChatGPT photo uploads.
function isApprovedCarPhoto(value: unknown): boolean {
  if (typeof value !== "string") return false;
  const storageRoot = process.env.SUPABASE_URL + "/storage/v1/object/public/kz-car-photos/";
  if (value.startsWith(storageRoot) && value.startsWith("https://")) return true;
  try {
    const url = new URL(value);
    return url.protocol === "https:" &&
      url.hostname === "d2ol7oe51mr4n9.cloudfront.net" &&
      /^\/user_3Kizw610eeYgEkKSmK3k5QDEn9N\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\.(png|jpe?g|webp)$/i.test(url.pathname) &&
      !url.search && !url.hash;
  } catch { return false; }
}

export async function POST(req: Request) {
  if (!(await requireAdmin())) return errorResponse("Unauthorized", 401);
  const data = await req.json().catch(() => ({}));
  const title = String(data.title || "").trim();
  const year = Number(data.year);
  const price = data.price === "" || data.price == null ? null : Number(data.price);
  const status = data.status;
  const images = data.images;
  if (!title || title.length > 150 || !Number.isInteger(year) || year < 1950 || year > 2100 ||
      (price !== null && (!Number.isFinite(price) || price < 0)) ||
      !["draft","available","sold"].includes(status) ||
      !Array.isArray(images) || images.length > 20 || images.some((v: unknown) => !isApprovedCarPhoto(v)))
    return errorResponse("Check title, year, price, status and photos");
  if (status === "available" && (price === null || images.length === 0)) return errorResponse("To publish a car, add its asking price and at least one approved photo. Save as Draft until ready.",400);
  const privateNames = ["owner_demand","kz_target","final_sold_price","owner_final_payment","deal_expenses"];
  const privateFields:Record<string,number|null>={};
  for(const name of privateNames){
    const raw=data[name];
    const value=raw===""||raw===null||raw===undefined?null:Number(raw);
    if(value!==null&&(!Number.isFinite(value)||value<0||value>100000000)) return errorResponse("Invalid private pricing amount: "+name,400);
    privateFields[name]=value;
  }
  const coverZoom = data.cover_zoom == null ? 100 : Number(data.cover_zoom);
  const coverX = data.cover_x == null ? 50 : Number(data.cover_x);
  const coverY = data.cover_y == null ? 50 : Number(data.cover_y);
  if (![coverZoom,coverX,coverY].every(Number.isInteger) || coverZoom < 80 || coverZoom > 150 || coverX < 0 || coverX > 100 || coverY < 0 || coverY > 100) return errorResponse("Invalid main cover framing",400);
  const record = {
    ...privateFields,
    title, year, price, status, images, cover_zoom:coverZoom,cover_x:coverX,cover_y:coverY,
    finance_available: data.finance_available === true,
    mileage: String(data.mileage || "").slice(0, 100),
    specs: String(data.specs || "").slice(0, 1500),
    location: String(data.location || "Muscat, Oman").slice(0, 120),
    description: String(data.description || "").slice(0, 5000),
    ...Object.fromEntries(["make","model","variant","engine","transmission","origin_specs","body_type","exterior_color","features","registration_validity"].map(key=>[key,String(data[key]||"").trim().slice(0,key==="features"?2000:150)])),
    updated_at: new Date().toISOString(),
  };
  const id = typeof data.id === "string" && /^[0-9a-f-]{36}$/i.test(data.id) ? data.id : null;
  const path = id ? "/rest/v1/kz_cars?id=eq." + id : "/rest/v1/kz_cars";
  const res = await supabase(path, { method: id ? "PATCH" : "POST", headers: { Prefer: "return=representation" }, body: JSON.stringify(record) }, true);
  return NextResponse.json(await res.json().catch(() => ({ error: "Database error" })), { status: res.status });
}

export async function DELETE(req: Request) {
  if (!(await requireAdmin())) return errorResponse("Unauthorized", 401);
  const data = await req.json().catch(() => ({}));
  const id = String(data.id || "");
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id))
    return errorResponse("Invalid car ID", 400);

  const res = await supabase("/rest/v1/kz_cars?id=eq." + id, {
    method: "DELETE", headers: { Prefer: "return=representation" }
  }, true);
  const result = await res.json().catch(() => null);
  if (!res.ok) return NextResponse.json({ error: result?.message || result?.error || "Could not delete car" }, { status: res.status });
  if (!Array.isArray(result) || result.length === 0) return errorResponse("Car not found", 404);

  return NextResponse.json({ ok: true, deleted: id });
}
