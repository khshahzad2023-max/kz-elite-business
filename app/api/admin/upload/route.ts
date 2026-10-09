import { NextResponse } from "next/server";
import { requireAdmin, errorResponse } from "../../../../lib/kz-db";
import { randomUUID } from "node:crypto";

export async function POST(req: Request) {
  if (!(await requireAdmin())) return errorResponse("Unauthorized", 401);
  const form = await req.formData();
  const files = form.getAll("photos");
  if (!files.length || files.length > 15 || files.some(x => !(x instanceof File)))
    return errorResponse("Select 1 to 15 photos.");
  const urls: string[] = [];
  for (const item of files) {
    const file = item as File;
    const extensions: Record<string,string> = { "image/jpeg": ".jpg", "image/png": ".png", "image/webp": ".webp" };
    const ext = extensions[file.type];
    if (!ext || file.size > 8 * 1024 * 1024 || file.size === 0) return errorResponse("Only JPEG/PNG/WebP images up to 8 MB each.");
    const key = randomUUID() + ext;
    const res = await fetch(process.env.SUPABASE_URL! + "/storage/v1/object/kz-car-photos/" + key, {
      method: "POST",
      headers: {
        apikey: process.env.SUPABASE_SERVICE_ROLE_KEY!,
        Authorization: "Bearer " + process.env.SUPABASE_SERVICE_ROLE_KEY!,
        "Content-Type": file.type, "x-upsert": "false",
      },
      body: await file.arrayBuffer(),
    });
    if (!res.ok) return errorResponse("Photo upload failed. Check bucket setup.", 502);
    urls.push(process.env.SUPABASE_URL! + "/storage/v1/object/public/kz-car-photos/" + key);
  }
  return NextResponse.json({ images: urls });
}
