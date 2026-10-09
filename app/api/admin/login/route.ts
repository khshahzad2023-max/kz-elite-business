import { NextResponse } from "next/server";
import { configured, errorResponse } from "../../../../lib/kz-db";

export async function POST(request: Request) {
  if (!configured()) return errorResponse("Backend setup required: connect Supabase in Vercel first.", 503);
  const body = await request.json().catch(() => ({}));
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");
  if (!email || !password || email !== process.env.KZ_ADMIN_EMAIL?.trim().toLowerCase())
    return errorResponse("Invalid login", 401);

  const result = await fetch(process.env.SUPABASE_URL! + "/auth/v1/token?grant_type=password", {
    method: "POST",
    headers: { apikey: process.env.SUPABASE_ANON_KEY!, "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    cache: "no-store",
  });
  if (!result.ok) return errorResponse("Invalid login", 401);
  const data = await result.json();
  const response = NextResponse.json({ ok: true });
  response.cookies.set("kz_admin_session", data.access_token, {
    httpOnly: true, secure: process.env.NODE_ENV === "production",
    sameSite: "strict", path: "/", maxAge: Math.min(data.expires_in || 3600, 3600),
  });
  return response;
}
