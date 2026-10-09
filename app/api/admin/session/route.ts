import { NextResponse } from "next/server";
import { configured, requireAdmin } from "../../../../lib/kz-db";
export async function GET() {
  return NextResponse.json({ configured: configured(), authenticated: await requireAdmin() });
}
