// Sdílený stav turnaje — čte a zapisuje do Upstash Redis přes REST.
// Bez nastavených proměnných prostředí se tváří jako vypnutý a stránka
// běží dál v offline režimu (výsledky jen v prohlížeči rozhodčího).

const REDIS_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const STATE_KEY = "freedom-open:state";
const MAX_BODY = 256 * 1024; // 256 kB stačí na výsledky i přezdívky

async function redis(command) {
  const r = await fetch(REDIS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${REDIS_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(command)
  });
  if (!r.ok) throw new Error(`Redis odpověděl ${r.status}`);
  const j = await r.json();
  return j.result;
}

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");

  if (!REDIS_URL || !REDIS_TOKEN) {
    return res.status(200).json({ disabled: true });
  }

  try {
    if (req.method === "GET") {
      const raw = await redis(["GET", STATE_KEY]);
      const saved = raw ? JSON.parse(raw) : {};
      return res.status(200).json({
        state: saved.state || {},
        nicks: saved.nicks || {},
        updated: saved.updated || null
      });
    }

    if (req.method === "POST") {
      const pin = process.env.SCORER_PIN;
      if (pin && req.headers["x-pin"] !== pin) {
        return res.status(403).json({ error: "Neplatný kód rozhodčího" });
      }
      const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
      const payload = JSON.stringify({
        state: body.state || {},
        nicks: body.nicks || {},
        updated: new Date().toISOString()
      });
      if (payload.length > MAX_BODY) {
        return res.status(413).json({ error: "Data jsou příliš velká" });
      }
      await redis(["SET", STATE_KEY, payload]);
      return res.status(200).json({ ok: true });
    }

    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "Nepodporovaná metoda" });
  } catch (err) {
    return res.status(500).json({ error: String((err && err.message) || err) });
  }
};
