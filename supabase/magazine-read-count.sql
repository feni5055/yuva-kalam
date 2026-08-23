-- Yuva Kalam magazine reader counter.
-- Run this once in the Supabase SQL editor.

alter table public.magazines
  add column if not exists view_count bigint not null default 0;

alter table public.magazines
  drop constraint if exists magazines_view_count_check;

alter table public.magazines
  add constraint magazines_view_count_check check (view_count >= 0);

create or replace function public.record_magazine_view(magazine_uuid uuid)
returns bigint
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  updated_count bigint;
begin
  update public.magazines
  set view_count = view_count + 1
  where id = magazine_uuid
    and status = 'published'
  returning view_count into updated_count;

  if updated_count is null then
    raise exception 'Published magazine not found';
  end if;

  return updated_count;
end;
$$;

revoke all on function public.record_magazine_view(uuid) from public;
grant execute on function public.record_magazine_view(uuid) to anon, authenticated;
