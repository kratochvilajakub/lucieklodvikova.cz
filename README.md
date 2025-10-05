<!doctype html>
<html lang="cs">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Lucie Klodvíková – Svatby & Eventy | Osobní prezentace</title>
  <meta name="description" content="Osobní mini‑web Lucie Klodvíkové: svatby & eventy, případovky, zkušenosti, dovednosti a motivační dopis na jednu obrazovku." />
  <style>
    :root{
      --bg:#fff9fb;            /* jemně krémová růžová */
      --ink:#1f1a1c;           /* tmavý inkoust */
      --muted:#6f6670;         /* jemně šedá */
      --brand:#d16ba5;         /* růžová pivoňka */
      --brand-2:#86a8e7;       /* jemná modrá */
      --accent:#7bc6cc;        /* šalvějově tyrkysová */
      --card:#ffffff;          /* bílá karta */
      --stroke:rgba(31,26,28,.08);
      --shadow:0 8px 28px rgba(209,107,165,.12);
      --radius:20px; --radius-sm:14px; --gap:clamp(14px,3vw,28px); --max:1080px;
    }
    *{box-sizing:border-box}
    html,body{margin:0;padding:0;background:
      radial-gradient(900px 600px at 0% 0%, #ffe7f2 0%, transparent 60%),
      radial-gradient(900px 600px at 100% 10%, #e8f7f8 0%, transparent 60%),
      var(--bg);
      color:var(--ink); font:16px/1.6 system-ui, -apple-system, Segoe UI, Inter, Roboto, "Helvetica Neue", Arial, sans-serif;}
    h1,h2,h3{font-family: Georgia, "Times New Roman", serif; letter-spacing:.2px;}
    a{color:#0f6b6e;text-decoration:none}
    a:hover{text-decoration:underline}
    .container{max-width:var(--max);margin:0 auto;padding:0 var(--gap)}

    header{position:sticky;top:0;z-index:20;backdrop-filter:saturate(130%) blur(8px);
      background:rgba(255,255,255,.75); border-bottom:1px solid var(--stroke)}
    .nav{display:flex;align-items:center;justify-content:space-between;padding:12px 0}
    .brand{display:flex;align-items:center;gap:12px;font-weight:700}
    .petal{width:14px;height:14px;border-radius:6px;transform:rotate(12deg);
      background:linear-gradient(135deg,var(--brand),var(--accent));box-shadow:0 0 0 6px rgba(209,107,165,.12)}

    .btn{display:inline-flex;align-items:center;gap:10px;border:1px solid var(--stroke);
      background:#fff;color:var(--ink);padding:10px 14px;border-radius:999px;cursor:pointer;box-shadow:var(--shadow);
      transition:transform .12s ease, box-shadow .2s ease}
    .btn:hover{transform:translateY(-1px); box-shadow:0 10px 34px rgba(134,168,231,.25)}
    .btn.primary{background:linear-gradient(135deg,var(--brand),var(--brand-2));color:#fff;border-color:transparent;font-weight:700}
    .btn.ghost{background:transparent}

    .hero{padding:clamp(36px,7vw,72px) 0 clamp(18px,5vw,48px)}
    .hero-grid{display:grid;grid-template-columns: .9fr 1.1fr; gap:var(--gap);align-items:center}
    @media (max-width:900px){.hero-grid{grid-template-columns:1fr;}}

    .card{background:var(--card);border:1px solid var(--stroke);border-radius:var(--radius);box-shadow:var(--shadow)}
    .hero .card{padding:clamp(18px,3vw,28px)}

    h1{font-size:clamp(28px,4.2vw,44px);line-height:1.1;margin:0 0 6px}
    .subtitle{color:var(--muted);margin-bottom:14px}
    .chips{display:flex;flex-wrap:wrap;gap:10px;margin:14px 0 20px}
    .chip{font-size:14px;padding:8px 12px;border-radius:999px;background:#fff;border:1px solid var(--stroke)}

    .facts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:14px 0 6px}
    .fact{background:#fff;border:1px solid var(--stroke);padding:14px;border-radius:var(--radius-sm)}
    .fact b{display:block;font-size:20px;color:#854a7a}
    @media (max-width:640px){.facts{grid-template-columns:1fr}}

    .photo-card{position:relative;overflow:hidden;display:grid;place-items:center;padding:0}
    .photo{width:100%;height:100%;object-fit:cover;border-radius:var(--radius)}
    .photo-wrap{aspect-ratio:4/5;width:100%;border-radius:var(--radius);overflow:hidden;border:1px solid var(--stroke)}

    section{padding:clamp(24px,6vw,56px) 0}
    .section-title{font-size:clamp(20px,2.6vw,30px);margin:0 0 12px}
    .lead{color:var(--muted);margin:0 0 20px}

    .grid-3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--gap)}
    .grid-2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--gap)}
    @media (max-width:960px){.grid-3,.grid-2{grid-template-columns:1fr}}
    .list{display:grid;gap:8px;margin:0;padding:0 0 0 18px}

    .case{padding:18px}
    .case h3{margin:6px 0 8px}
    .meta{color:var(--muted);font-size:14px}

    .letter{white-space:pre-wrap;background:#fff;border:1px solid var(--stroke);padding:18px;border-radius:var(--radius-sm)}

    .footer{padding:28px 0 64px;color:var(--muted);font-size:14px}

    @media print{header,.btn{display:none!important} body{background:#fff} .card,.letter,.fact{box-shadow:none}}
  </style>
</head>
<body>
  <header>
    <div class="container nav">
      <div class="brand"><span class="petal"></span> Lucie Klodvíková · Svatby & Eventy</div>
      <div class="nav-actions">
        <button class="btn ghost" id="copyEmail">Zkopírovat e‑mail</button>
        <button class="btn" onclick="window.location.href='mailto:lklodvikova@seznam.cz?subject=Poptávka%20–%20Svatby%20%26%20eventy'">Napsat e‑mail</button>
        <button class="btn primary" onclick="window.print()">Stáhnout PDF profilu</button>
      </div>
    </div>
  </header>

  <main class="container">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-grid">
        <div class="card photo-card">
          <div class="photo-wrap">
            <img class="photo" alt="Lucie Klodvíková – portrét" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAADyCAIAAAC5/nJMAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAqaADAAQAAAABAAAA8gAAAACEiQH/AABAAElEQVR4Aby9abDlx3XYd/d9f/ub..."}]}]}"/>
          </div>
        </div>
        <div class="card">
          <h1>Lucie Klodvíková</h1>
          <div class="subtitle">Event & Wedding Coordinator · Brno · AJ B2 · ŘP B</div>
          <div class="chips">
            <span class="chip">Ex‑Infinit Maximus (recepce & rezervace)</span>
            <span class="chip">Produkce konferencí – Magnus Regio</span>
            <span class="chip">Síť kontaktů (DJ, vizážistky, agentury)</span>
          </div>
          <p class="lead">Spojuji precizní organizaci velkých akcí s něžnou estetikou svateb. Znám provoz Maximusu, umím vést projekt od poptávky po vyúčtování a postarám se o to, aby klienti prožili den, na který budou rádi vzpomínat.</p>
          <div class="facts">
            <div class="fact"><b>7+ let</b> v hotelnictví & eventech</div>
            <div class="fact"><b>0,5–1 mil. Kč</b> typické rozpočty akcí</div>
            <div class="fact"><b>100%</b> důraz na detail a plynulost</div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROČ JÁ -->
    <section>
      <div class="grid-2">
        <div class="card" style="padding:18px">
          <h2 class="section-title">Proč já pro Maximus</h2>
          <ul class="list">
            <li><b>Znám prostředí</b> – recepce, rezervace, výpomoc na svatbách; rychlá adaptace bez dlouhého zaškolení.</li>
            <li><b>Kompletní svatební workflow</b> – poptávky, prohlídky, nabídky, koordinace dne, vyúčtování, zpětná vazba.</li>
            <li><b>Propojení s marketingem & obchodem</b> – CRM, sociální sítě, partnerské spolupráce, záštity a dotace.</li>
            <li><b>Empatie & estetika</b> – cit pro detail, klid v zátěži, orientace na emoce hostů.</li>
          </ul>
        </div>
        <div class="card" style="padding:18px">
          <h2 class="section-title">Dovednosti</h2>
          <ul class="list">
            <li>Koordinace svateb a oslav · prohlídky prostor · cenové nabídky · dekor & výzdoba.</li>
            <li>Obchod a vztahy s klienty/partnery · vyjednávání · follow‑up & zpětná vazba.</li>
            <li>Marketing & sociální sítě · branding · práce s AI nástroji.</li>
            <li>MS Office · CRM · ŘP sk. B · AJ B2 (jednání s klienty).</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CASE STUDIES -->
    <section>
      <h2 class="section-title">Případovky (výběr)</h2>
      <p class="lead">Tři projekty, které ukazují rozsah, přesnost a péči o detail.</p>
      <div class="grid-3">
        <article class="card case">
          <h3>Celostátní konference pro velitele MP/OP</h3>
          <div class="meta">2 dny · stovky účastníků · spolupráce s MO, SMO ČR a Kolegium ředitelů MP</div>
          <ul class="list">
            <li>Kompletní produkce: harmonogram, registrace, partneři, logistika.</li>
            <li>Rozpočet do 1 mil. Kč, smluvní rámce a vyúčtování.</li>
            <li>Vyřízení záštit a formálních náležitostí.</li>
          </ul>
        </article>
        <article class="card case">
          <h3>Konference ředitelů nemocnic</h3>
          <div class="meta">Brno & Praha · 2× ročně · MZČR, ČLK, ČLnK · partneři Veolia, Fortinet</div>
          <ul class="list">
            <li>Koordinace odborného programu a partnerství (EPC, kyberbezpečnost).</li>
            <li>Řízení VIP hostů a protokolu, PR a follow‑up.</li>
          </ul>
        </article>
        <article class="card case">
          <h3>Vernisáž prof. Miroslava Bárty</h3>
          <div class="meta">ve spolupráci s Medialogue (Olga Menzelová)</div>
          <ul class="list">
            <li>Event s mediálním dosahem; práce s veřejností i VIP hosty.</li>
            <li>Koordinace dodavatelů a vizuálního konceptu.</li>
          </ul>
        </article>
      </div>
    </section>

    <!-- DOPIS -->
    <section>
      <h2 class="section-title">Motivační dopis</h2>
      <article class="letter">
Vážená paní / Vážený pane,

ráda bych se ucházela o pozici koordinátorky svateb a oslav v Hotelu Maximus Resort. Váš hotel velmi dobře znám – několik let jsem zde působila na recepci a v rezervačním oddělení a během svatebních sezón jsem pomáhala i přímo u svateb. Díky tomu rozumím vnitřním procesům, týmu i očekáváním hostů a mohu navázat bez dlouhého zaškolení.

Poslední roky jsem se věnovala produkci a marketingu odborných konferencí ve společnosti Magnus Regio. Měla jsem na starosti dvoudenní celostátní konferenci pro velitele městských a obecních policií (ve spolupráci s Ministerstvem obrany, Svazem měst a obcí a Kolegiem ředitelů MP), dále pravidelné konference ředitelů nemocnic v Brně a Praze (s účastí Ministerstva zdravotnictví, profesních komor a partnerů jako Veolia a Fortinet) a také vernisáž výstavy prof. Miroslava Bárty ve spolupráci s Medialogue. Zajišťovala jsem kompletní produkci – od nabídek a harmonogramu přes vyřizování záštit a dotací, koordinaci partnerů a dodavatelů až po vyúčtování a vyhodnocení.

Svatby vnímám jako osobní příběh a velkou část práce vidím v empatii, estetice a komunikaci. Zároveň umím držet pevný rámec – rozpočet, časový plán, koordinaci týmů i tlak dne D. Věřím, že právě spojení zkušeností z velkých eventů s mým vztahem ke svatebnímu prostředí a znalostí Maximusu může být přínosem pro váš tým i pro klienty.

Ráda se s vámi setkám osobně a proberu, jak mohu pomoci rozvíjet svatební a eventové služby Hotelu Maximus Resort.

S úctou
Lucie Klodvíková
      </article>
    </section>

    <!-- KONTAKT -->
    <section>
      <div class="card" style="padding:18px;display:grid;gap:10px">
        <h2 class="section-title">Kontakt</h2>
        <div>📍 Černého 39/818 · Brno</div>
        <div>📞 <a href="tel:+420603248082">+420 603 248 082</a> · ✉️ <a href="mailto:lklodvikova@seznam.cz">lklodvikova@seznam.cz</a></div>
        <div class="chips">
          <button class="btn primary" onclick="window.location.href='mailto:lklodvikova@seznam.cz?subject=Poptávka%20–%20Svatby%20%26%20eventy'">Domluvit schůzku</button>
          <button class="btn" onclick="window.print()">Stáhnout PDF profilu</button>
        </div>
      </div>
    </section>

    <footer class="footer">© 2025 · Lucie Klodvíková · Mini‑web pro uchazečku – Svatby & Eventy</footer>
  </main>

  <script>
    // Copy email
    document.getElementById('copyEmail').addEventListener('click', async () => {
      try { await navigator.clipboard.writeText('lklodvikova@seznam.cz');
        const btn = document.getElementById('copyEmail');
        const old = btn.textContent; btn.textContent = 'Zkopírováno ✓';
        btn.classList.add('primary'); setTimeout(()=>{btn.textContent = old; btn.classList.remove('primary');}, 1400);
      } catch(e) { alert('Zkopírujte ručně: lklodvikova@seznam.cz'); }
    });
  </script>

  <script type="application/ld+json">
  {
    "@context":"https://schema.org",
    "@type":"Person",
    "name":"Lucie Klodvíková",
    "jobTitle":"Event & Wedding Coordinator",
    "address":{"@type":"PostalAddress","addressLocality":"Brno","streetAddress":"Černého 39/818","addressCountry":"CZ"},
    "email":"mailto:lklodvikova@seznam.cz",
    "telephone":"+420603248082",
    "knowsAbout":["weddings","event production","hotel operations","CRM","marketing"]
  }
  </script>
</body>
</html>
