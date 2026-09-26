# LAIONEL Discovery

Shared Phase 1 customer-discovery workspace for Ritesh and Monica: target companies, people, interview script, interview notes, synthesis and outreach.

Live: https://riteshmsrivastava-pixel.github.io/laionel-discovery/

## How it works
- `index.html` is the whole app. `auth.js` adds the sign-in screen and stores data in Supabase so both of you see the same records live.
- `config.js` holds the Supabase URL and anon key (public by design; row-level security blocks anyone not signed in).
- On the first sign-in the starter data (companies, people, questions, week plan) loads automatically.

## One-time setup
1. Supabase > SQL Editor: run `supabase.sql`.
2. Supabase > Authentication > Users > Add user: create one user for Ritesh and one for Monica (tick "Auto confirm"). Turn off public sign-ups under Authentication > Sign In / Providers.
3. Paste the project URL and anon key into `config.js`, then `./deploy.sh "connect supabase"`.

## Deploy
```
./deploy.sh "what changed"
```
