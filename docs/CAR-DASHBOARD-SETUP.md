# K&Z Car Upload Dashboard Setup

The dashboard UI is at /admin/cars. It requires a separate Supabase project before login or publishing can function.

## 1. Supabase project

Create a Supabase project you control. In its SQL Editor, run:

```sql
create table if not exists public.kz_cars (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  year integer not null,
  price numeric(12,3),
  mileage text not null default '',
  specs text not null default '',
  location text not null default 'Muscat, Oman',
  description text not null default '',
  status text not null default 'draft' check (status in ('draft','available','sold')),
  images text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.kz_cars enable row level security;
revoke all on public.kz_cars from anon, authenticated;
-- Only server-side service role can read/write via protected server routes.
insert into storage.buckets (id, name, public)
values ('kz-car-photos','kz-car-photos',true)
on conflict (id) do update set public = true;
```

Create one user in **Authentication > Users** with a strong password and the exact owner email that you will use for KZ_ADMIN_EMAIL. Do not enable public admin registration.

## 2. Vercel environment variables

For the existing K&Z Vercel project add the following under Project Settings > Environment Variables, for Production:

- SUPABASE_URL (Project URL)
- SUPABASE_ANON_KEY (Supabase publishable/anon API key)
- SUPABASE_SERVICE_ROLE_KEY (secret service role key, NEVER NEXT_PUBLIC_, NEVER share publicly)
- KZ_ADMIN_EMAIL (exact Supabase user email)

Redeploy the latest production commit after saving environment variables. Do not paste service-role secrets into ChatGPT.

## 3. Usage

Open https://www.kzelitebusiness.com/admin/cars, login, select up to 15 images per session (each less than 3 MB), enter verified details and save as Draft or Publish. Published and Sold listings appear in the new Recently Added Vehicles section of /cars; old hardcoded listings remain unchanged. Edit existing records from the dashboard.

Limitations: photos are uploaded individually; session lasts up to one hour before signing in again. Removing a photo from a listing does not automatically delete the file from storage. Draft vehicles are not public. A saved record does not yet guarantee Google indexing. This MVP does not auto-enhance photos or apply master plate overlays. Review and polish photos before upload.
