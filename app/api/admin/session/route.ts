import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { configured, requireAdmin } from "../../../../lib/kz-db";
export async function GET() {
  if(!configured())return NextResponse.json({configured:false,authenticated:false});
  if(await requireAdmin())return NextResponse.json({configured:true,authenticated:true});
  const jar=await cookies();
  const refresh=jar.get("kz_admin_refresh")?.value;
  if(!refresh)return NextResponse.json({configured:true,authenticated:false});
  const res=await fetch(process.env.SUPABASE_URL!+"/auth/v1/token?grant_type=refresh_token",{
    method:"POST",headers:{"apikey":process.env.SUPABASE_ANON_KEY!,"Content-Type":"application/json"},
    body:JSON.stringify({refresh_token:refresh}),cache:"no-store"
  }).catch(()=>null);
  if(!res?.ok)return NextResponse.json({configured:true,authenticated:false});
  const data=await res.json();
  const verify=await fetch(process.env.SUPABASE_URL!+"/auth/v1/user",{headers:{"apikey":process.env.SUPABASE_ANON_KEY!,"Authorization":"Bearer "+data.access_token},cache:"no-store"});
  if(!verify.ok || (await verify.json()).email?.toLowerCase()!==process.env.KZ_ADMIN_EMAIL?.trim().toLowerCase())
    return NextResponse.json({configured:true,authenticated:false});
  const response=NextResponse.json({configured:true,authenticated:true});
  const secure=process.env.NODE_ENV==="production";
  response.cookies.set("kz_admin_session",data.access_token,{httpOnly:true,secure,sameSite:"strict",path:"/",maxAge:Math.min(data.expires_in||3600,3600)});
  if(data.refresh_token)response.cookies.set("kz_admin_refresh",data.refresh_token,{httpOnly:true,secure,sameSite:"strict",path:"/",maxAge:8*60*60});
  return response;
}
