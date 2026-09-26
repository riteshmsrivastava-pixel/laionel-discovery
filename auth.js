/* LAIONEL Discovery: sign-in gate and shared store.
   Implements the small window.claude.use("db"/"user") interface the app already
   speaks, backed by Supabase (email + password auth, one table, realtime). */
(function(){
  const cfg = window.LAI_CONFIG || {};
  const configured = !!(cfg.supabaseUrl && cfg.supabaseAnonKey && window.supabase);
  const TABLE = "discovery_docs";
  let sb = null, session = null, readyResolve;
  const ready = new Promise(r => readyResolve = r);

  const css = `
  #laiGate{position:fixed;inset:0;z-index:100;display:grid;place-items:center;background:#052E2B;padding:16px;font-family:Arial,Helvetica,sans-serif}
  #laiGate .laibox{width:100%;max-width:360px;background:#F6F7F4;border-radius:14px;padding:32px 28px;box-shadow:0 24px 60px rgba(0,0,0,.35);color:#052E2B}
  #laiGate .laiwm{display:block;width:190px;height:auto;margin:0 0 14px}
  #laiGate .laiwm b{color:#0E7C70}
  #laiGate .laisub{font-size:13px;color:#3E5451;margin:0 0 24px}
  #laiGate label{display:block;font-size:12px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#3E5451;margin:14px 0 6px}
  #laiGate input{width:100%;box-sizing:border-box;padding:11px 12px;border:1px solid #C2CDC9;border-radius:8px;background:#fff;font:15px inherit;color:#052E2B}
  #laiGate input:focus{outline:2px solid #2DD4BF;outline-offset:1px;border-color:#2DD4BF}
  #laiGate button{margin-top:22px;width:100%;padding:12px;border:0;border-radius:8px;background:#052E2B;color:#fff;font:700 15px inherit;cursor:pointer}
  #laiGate button:disabled{opacity:.6;cursor:default}
  #laiGate .laierr{min-height:18px;margin-top:12px;font-size:13px;color:#C9533F}
  #laiGate .lainote{font-size:12px;color:#3E5451;margin-top:16px;line-height:1.5}
  #laiGate a{color:#0E7C70;cursor:pointer}
  #laiOut{all:unset;cursor:pointer;color:#9FB8B3;font-size:12px;text-decoration:underline}`;

  function allowed(s){
    const list = (cfg.allowedEmails || []).map(e => e.toLowerCase());
    return !list.length || list.includes((s.user.email || "").toLowerCase());
  }

  function gate(){
    const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    const g = document.createElement("div"); g.id = "laiGate";
    g.innerHTML = configured ? `
      <form class="laibox" id="laiForm">
        <img class="laiwm" src="assets/laionel-wordmark-evergreen-turquoise.svg" alt="LAIONEL" width="190" height="33">
        <p class="laisub">Discovery workspace for our MIT Sloan research study. Ritesh and Monica only.</p>
        <label for="laiEmail">Email</label><input id="laiEmail" type="email" autocomplete="username" required>
        <label for="laiPass">Password</label><input id="laiPass" type="password" autocomplete="current-password" required>
        <button id="laiGo" type="submit">Sign in</button>
        <div class="laierr" id="laiErr"></div>
      </form>` : `
      <div class="laibox">
        <img class="laiwm" src="assets/laionel-wordmark-evergreen-turquoise.svg" alt="LAIONEL" width="190" height="33">
        <p class="laisub">Shared sign-in is not connected yet.</p>
        <p class="lainote">Add the Supabase URL and anon key to <code>config.js</code> to turn on sign-in and shared data. Until then you can work in this browser only.</p>
        <button id="laiLocal" type="button">Continue in this browser</button>
      </div>`;
    document.body.appendChild(g);
    if(!configured){
      document.getElementById("laiLocal").onclick = () => { g.remove(); readyResolve(false); };
      return;
    }
    document.getElementById("laiForm").onsubmit = async e => {
      e.preventDefault();
      const btn = document.getElementById("laiGo"), err = document.getElementById("laiErr");
      btn.disabled = true; err.textContent = "";
      const { data, error } = await sb.auth.signInWithPassword({
        email: document.getElementById("laiEmail").value.trim(),
        password: document.getElementById("laiPass").value
      });
      btn.disabled = false;
      if(error){ err.textContent = error.message === "Invalid login credentials" ? "Email or password is wrong." : error.message; return; }
      if(!allowed(data.session)){ await sb.auth.signOut(); err.textContent = "This account does not have access to LAIONEL Discovery."; return; }
      session = data.session; g.remove(); readyResolve(true);
    };
  }

  /* ---------- db adapter: collection(col).onSnapshot / doc(id).set / doc(id).delete */
  function snapOf(rows){ return { docs: rows.map(r => ({ id: r.id, data: () => r.data })) }; }
  let seeding = null;
  async function ensureSeeded(){
    if(seeding) return seeding;
    seeding = (async () => {
      const { count, error } = await sb.from(TABLE).select("id", { count: "exact", head: true });
      if(error || typeof buildSeed !== "function") return;
      if(count > 0) return migrate();
      const seed = buildSeed(), rows = [], now = new Date().toISOString();
      Object.keys(seed).forEach(col => Object.keys(seed[col]).forEach(id =>
        rows.push({ col, id, data: Object.assign({}, seed[col][id], { updatedAt: now }) })));
      await sb.from(TABLE).upsert(rows);
    })();
    return seeding;
  }
  /* One-time content refresh for data seeded before the research reframe (v2).
     Replaces the starter questions and week plan text, keeps tick marks and anything added by hand. */
  const OLD_NOTES = {
    "Very mature org; treat as reference view, not buyer": 1,
    "Mastercard is a Credo AI customer; ask what it does and does not do": 1,
    "Second ring; Ritesh's Novartis background helps": 1
  };
  async function migrate(){
    const { data: rows, error } = await sb.from(TABLE).select("col,id,data").in("col", ["settings", "questions", "weekplan", "people"]);
    if(error) return;
    const main = rows.find(r => r.col === "settings" && r.id === "main");
    if(main && (main.data.seedVersion || 1) >= 2) return;
    const seed = buildSeed(), now = new Date().toISOString(), out = [];
    const have = {}; rows.forEach(r => have[r.col + ":" + r.id] = r.data);
    Object.entries(seed.questions).forEach(([id, q]) => { if(have["questions:" + id]) out.push({ col: "questions", id, data: Object.assign({}, have["questions:" + id], { text: q.text, guidance: q.guidance, section: q.section, updatedAt: now }) }); });
    Object.entries(seed.weekplan).forEach(([id, w]) => { const cur = have["weekplan:" + id]; if(cur) out.push({ col: "weekplan", id, data: Object.assign({}, cur, { task: w.task, hyp: w.hyp, updatedAt: now }) }); });
    Object.entries(seed.people).forEach(([id, p]) => { const cur = have["people:" + id]; if(cur && OLD_NOTES[cur.notes]) out.push({ col: "people", id, data: Object.assign({}, cur, { notes: p.notes, updatedAt: now }) }); });
    out.push({ col: "settings", id: "main", data: Object.assign({}, main ? main.data : seed.settings.main, { seedVersion: 2, updatedAt: now }) });
    await sb.from(TABLE).upsert(out);
  }

  const db = {
    collection(col){
      return {
        onSnapshot(cb, onErr){
          let rows = {};
          const emit = () => cb(snapOf(Object.values(rows)));
          (async () => {
            await ensureSeeded();
            const { data, error } = await sb.from(TABLE).select("id,data").eq("col", col);
            if(error){ onErr && onErr(error); return; }
            data.forEach(r => rows[r.id] = r); emit();
            sb.channel("lai-" + col)
              .on("postgres_changes", { event: "*", schema: "public", table: TABLE, filter: "col=eq." + col }, p => {
                if(p.eventType === "DELETE"){ const id = p.old && p.old.id; if(id) delete rows[id]; }
                else rows[p.new.id] = { id: p.new.id, data: p.new.data };
                emit();
              }).subscribe();
          })();
          return () => {};
        },
        doc(id){
          return {
            async set(doc){
              const { error } = await sb.from(TABLE).upsert({ col, id, data: doc, updated_by: session.user.email });
              if(error) throw error;
            },
            async delete(){
              const { error } = await sb.from(TABLE).delete().eq("col", col).eq("id", id);
              if(error) throw error;
            }
          };
        }
      };
    }
  };
  const user = { async id(){ return session.user.email; } };

  window.laiSignOut = async () => { if(sb) await sb.auth.signOut(); location.reload(); };
  window.laiWho = () => session ? session.user.email : null;
  window.claude = {
    async use(name){
      const shared = await ready;
      if(!shared) return null;
      return name === "db" ? db : name === "user" ? user : null;
    }
  };

  async function boot(){
    if(configured){
      sb = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey);
      const { data } = await sb.auth.getSession();
      if(data.session && !allowed(data.session)) await sb.auth.signOut();
      else if(data.session){ session = data.session; readyResolve(true); return; }
    }
    gate();
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", boot) : boot();
})();
