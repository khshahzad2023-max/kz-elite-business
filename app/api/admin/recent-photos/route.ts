import { NextResponse } from "next/server";
import { requireAdmin, supabase, errorResponse } from "../../../../lib/kz-db";

type StoredObject = { name?: string; created_at?: string; updated_at?: string };

export async function GET() {
  if (!(await requireAdmin())) return errorResponse("Unauthorized", 401);
  try {
    const response = await supabase("/storage/v1/object/list/kz-car-photos",{
      method:"POST",
      body:JSON.stringify({ prefix:"", limit:100, offset:0, sortBy:{column:"created_at",order:"desc"} }),
    },true);
    if (!response.ok) return errorResponse("Could not list recently uploaded photos.",502);
    const result:unknown=await response.json();
    if (!Array.isArray(result))return errorResponse("Unexpected storage response.",502);
    const since=Date.now()-48*60*60*1000;
    const names=(result as StoredObject[]).filter(item=>
      typeof item.name==="string"&&/^[0-9a-f-]{36}\.(?:jpg|png|webp)$/i.test(item.name)&&
      Number.isFinite(Date.parse(item.created_at||item.updated_at||""))&&
      Date.parse(item.created_at||item.updated_at||"")>=since
    ).map(item=>item.name as string);
    return NextResponse.json({images:names.map(name=>process.env.SUPABASE_URL!+"/storage/v1/object/public/kz-car-photos/"+name)},
      {headers:{"Cache-Control":"private, no-store"}});
  }catch{
    return errorResponse("Could not connect to photo storage.",502);
  }
}
