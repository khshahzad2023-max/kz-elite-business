import { NextResponse } from "next/server";
import { configured, supabase } from "../../../lib/kz-db";
export async function GET() {
  if (!configured()) return NextResponse.json([]);
  const res = await supabase("/rest/v1/kz_cars?select=id,title,year,price,status,images,mileage,specs,location,description,finance_available,make,model,variant,engine,transmission,origin_specs,body_type,exterior_color,features,registration_validity,cover_zoom,cover_x,cover_y&status=in.(available,sold)&order=created_at.desc", {}, true);
  if (!res.ok) return NextResponse.json([], { status: 502 });
  return NextResponse.json(await res.json(), { headers: { "Cache-Control": "public, max-age=30" } });
}
