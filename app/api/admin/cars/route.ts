import { NextResponse } from "next/server";
import { requireAdmin, supabase, errorResponse } from "../../../../lib/kz-db";

export async function GET() {
  if (!(await requireAdmin())) return errorResponse("Unauthorized", 401);
  const res = await supabase("/rest/v1/kz_cars?select=*&order=created_at.desc", {}, true);
  return NextResponse.json(await res.json(), { status: res.status });
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
      !Array.isArray(images) || images.length > 20 || images.some((v: unknown) => typeof v !== "string" || !(v as string).startsWith(process.env.SUPABASE_URL! + "/storage/v1/object/public/kz-car-photos/")))
    return errorResponse("Check title, year, price, status and photos");
  const record = {
    title, year, price, status, images,
    mileage: String(data.mileage || "").slice(0, 100),
    specs: String(data.specs || "").slice(0, 1500),
    location: String(data.location || "Muscat, Oman").slice(0, 120),
    description: String(data.description || "").slice(0, 5000),
    updated_at: new Date().toISOString(),
  };
  const id = typeof data.id === "string" && /^[0-9a-f-]{36}$/i.test(data.id) ? data.id : null;
  const path = id ? "/rest/v1/kz_cars?id=eq." + id : "/rest/v1/kz_cars";
  const res = await supabase(path, { method: id ? "PATCH" : "POST", headers: { Prefer: "return=representation" }, body: JSON.stringify(record) }, true);
  return NextResponse.json(await res.json().catch(() => ({ error: "Database error" })), { status: res.status });
}
