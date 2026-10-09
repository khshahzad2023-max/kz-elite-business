import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const url = process.env.SUPABASE_URL;
const anon = process.env.SUPABASE_ANON_KEY;
const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
const adminEmail = process.env.KZ_ADMIN_EMAIL?.trim().toLowerCase();

export function configured() { return Boolean(url && anon && service && adminEmail); }

export function supabase(path: string, init: RequestInit = {}, elevated = false) {
  if (!configured()) throw new Error("Dashboard backend is not configured");
  const key = elevated ? service! : anon!;
  const headers = new Headers(init.headers);
  headers.set("apikey", key);
  headers.set("Authorization", "Bearer " + key);
  if (!headers.has("Content-Type") && !(init.body instanceof FormData)) headers.set("Content-Type", "application/json");
  return fetch(url! + path, { ...init, headers, cache: "no-store" });
}

export async function requireAdmin(): Promise<boolean> {
  if (!configured()) return false;
  const jar = await cookies();
  const token = jar.get("kz_admin_session")?.value;
  if (!token) return false;
  const res = await fetch(url! + "/auth/v1/user", {
    headers: { "apikey": anon!, Authorization: "Bearer " + token },
    cache: "no-store",
  });
  if (!res.ok) return false;
  const user = await res.json();
  return user.email?.toLowerCase() === adminEmail;
}

export function errorResponse(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}
