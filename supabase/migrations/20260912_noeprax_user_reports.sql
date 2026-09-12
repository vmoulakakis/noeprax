-- Apply only through a writable Supabase migration connection.
-- Keeps authenticated NOEPRAX customer data isolated inside the noeprax schema.

grant usage on schema noeprax to authenticated;

create table if not exists noeprax.user_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  locale text not null default 'el' check (locale in ('el','en')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists noeprax.reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  report_version text not null default '3.0.0-rc2',
  source text not null default 'free_diagnostic',
  payload jsonb not null check (jsonb_typeof(payload)='object'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists noeprax_reports_user_created_idx
  on noeprax.reports(user_id, created_at desc);

alter table noeprax.user_profiles enable row level security;
alter table noeprax.reports enable row level security;

grant select,insert,update,delete on noeprax.user_profiles to authenticated;
grant select,insert,update,delete on noeprax.reports to authenticated;

drop policy if exists user_profiles_select_own on noeprax.user_profiles;
create policy user_profiles_select_own on noeprax.user_profiles
for select to authenticated using (user_id=auth.uid());

drop policy if exists user_profiles_insert_own on noeprax.user_profiles;
create policy user_profiles_insert_own on noeprax.user_profiles
for insert to authenticated with check (user_id=auth.uid());

drop policy if exists user_profiles_update_own on noeprax.user_profiles;
create policy user_profiles_update_own on noeprax.user_profiles
for update to authenticated using (user_id=auth.uid()) with check (user_id=auth.uid());

drop policy if exists reports_select_own on noeprax.reports;
create policy reports_select_own on noeprax.reports
for select to authenticated using (user_id=auth.uid());

drop policy if exists reports_insert_own on noeprax.reports;
create policy reports_insert_own on noeprax.reports
for insert to authenticated with check (user_id=auth.uid());

drop policy if exists reports_update_own on noeprax.reports;
create policy reports_update_own on noeprax.reports
for update to authenticated using (user_id=auth.uid()) with check (user_id=auth.uid());

drop policy if exists reports_delete_own on noeprax.reports;
create policy reports_delete_own on noeprax.reports
for delete to authenticated using (user_id=auth.uid());
