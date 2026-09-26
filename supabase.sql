-- LAIONEL Discovery: run once in Supabase > SQL Editor.
create table if not exists discovery_docs (
  col        text not null,
  id         text not null,
  data       jsonb not null default '{}'::jsonb,
  updated_by text,
  updated_at timestamptz not null default now(),
  primary key (col, id)
);

alter table discovery_docs enable row level security;

-- Only Ritesh and Monica can read or write. The Supabase project is shared with
-- other apps, so being signed in is not enough: the email must be on this list.
drop policy if exists "team read"  on discovery_docs;
drop policy if exists "team write" on discovery_docs;
drop policy if exists "team only"  on discovery_docs;
create policy "team only" on discovery_docs for all to authenticated
  using      (lower(auth.jwt() ->> 'email') in ('ritesh.m.srivastava@gmail.com', 'monica31@mit.edu'))
  with check (lower(auth.jwt() ->> 'email') in ('ritesh.m.srivastava@gmail.com', 'monica31@mit.edu'));

-- Live updates between the two of you.
alter table discovery_docs replica identity full;
do $$ begin
  alter publication supabase_realtime add table discovery_docs;
exception when duplicate_object then null; end $$;
