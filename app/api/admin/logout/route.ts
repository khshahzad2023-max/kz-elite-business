import { NextResponse } from "next/server";
export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set("kz_admin_session", "", { path: "/", maxAge: 0, httpOnly: true, sameSite: "strict" });
  return response;
}
