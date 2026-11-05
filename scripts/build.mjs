import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { gunzipSync } from 'node:zlib';
import { createHash } from 'node:crypto';

const root = process.cwd();
const releaseDir = join(root, 'release', 'v3');
const parts = Array.from({ length: 8 }, (_, i) => join(releaseDir, `bundle.part${String(i).padStart(2,'0')}`));
for (const part of parts) if (!existsSync(part)) throw new Error(`Missing release artifact: ${part}`);

const b64 = parts.map(p => readFileSync(p, 'utf8')).join('').trim();
const digest = createHash('sha256').update(b64).digest('hex');
const expected = 'f1b16cb8f52f97a68e1caff7141e3449bb5d7a4735c5a3b0ed192fc3ecc31077';
if (digest !== expected) throw new Error(`NOEPRAX v3 integrity check failed: ${digest}`);

const files = JSON.parse(gunzipSync(Buffer.from(b64, 'base64')).toString('utf8'));
const out = join(root, 'public');
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
for (const [rel, data] of Object.entries(files)) {
  const target = join(out, rel);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, data);
}

const runtime = join(root, 'runtime');
if (existsSync(runtime)) cpSync(runtime, out, { recursive: true, force: true });

const inject = (file, marker, html) => {
  const target = join(out, file);
  if (!existsSync(target)) return;
  let data = readFileSync(target, 'utf8');
  if (!data.includes(marker)) data = data.replace('</head>', `${html}</head>`);
  writeFileSync(target, data);
};

inject('login.html', '/assets/noeprax-auth.js', '<script defer src="/assets/login-ui.js"></script><script defer src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script><script defer src="/assets/noeprax-auth.js"></script>');
inject('report.html', '/assets/report-account.js', '<script defer src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script><script defer src="/assets/report-account.js"></script>');

// Lightweight, accessible founder/editorial cross-link, applied after the audited v3 bundle.
// Personal brand and agency remain separate; no runtime APIs, customer data or funnel behavior change.
const indexPath = join(out, 'index.html');
if (!existsSync(indexPath)) throw new Error('NOEPRAX v3 index missing for founder synergy');
let landing = readFileSync(indexPath, 'utf8');
const founderId = 'noeprax-founder-synergy';
if (!landing.includes(founderId)) {
  const section = `
<style id="noeprax-founder-style">
.np-founder{background:radial-gradient(ellipse at 85% 10%,rgba(66,175,255,.18),transparent 38%),linear-gradient(115deg,#07152b,#10294c);color:#fff;padding:clamp(60px,7vw,96px) 24px}
.np-founder *{box-sizing:border-box}
.np-founder__inner{max-width:1140px;margin:auto;display:grid;grid-template-columns:minmax(0,1.4fr) minmax(260px,.6fr);gap:32px;align-items:center}
.np-founder__eyebrow{font-size:.76rem;letter-spacing:.18em;text-transform:uppercase;font-weight:800;color:#9ed3ff;margin:0 0 14px}
.np-founder h2{font-size:clamp(2rem,4vw,3.8rem);line-height:1.07;letter-spacing:-.035em;color:#fff;margin:0 0 20px;max-width:800px}
.np-founder__body{font-size:clamp(.96rem,1.2vw,1.12rem);line-height:1.75;color:#c6daec;max-width:69ch}
.np-founder__aside{border:1px solid rgba(255,255,255,.24);background:rgba(255,255,255,.055);border-radius:24px;padding:28px;backdrop-filter:blur(8px)}
.np-founder__aside strong{display:block;font-size:1.3rem;letter-spacing:.04em}
.np-founder__aside small{display:block;margin:10px 0 22px;color:#b5cce6;font-size:.86rem;line-height:1.55}
.np-founder__btn{display:flex;align-items:center;justify-content:space-between;text-decoration:none;border-radius:11px;padding:14px 16px;margin-top:9px;font-size:.92rem;font-weight:800;transition:transform .2s;background:#fff;color:#10294c}
.np-founder__btn:hover{transform:translateY(-2px)}
.np-founder__btn:focus-visible{outline:3px solid #6dc9ff;outline-offset:3px}
.np-founder__btn--secondary{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.26);color:#fff}
.np-founder .np-copy-el{display:none}
html[lang^="el"] .np-founder .np-copy-el{display:initial}
html[lang^="el"] .np-founder .np-copy-en{display:none}
@media(max-width:760px){.np-founder__inner{grid-template-columns:1fr}.np-founder__aside{padding:22px}}
@media(prefers-reduced-motion:reduce){.np-founder__btn{transition:none}}
</style>
<section id="noeprax-founder-synergy" class="np-founder" aria-labelledby="np-founder-title">
  <div class="np-founder__inner">
    <div>
      <p class="np-founder__eyebrow">THE FOUNDER × THE AGENCY · TWO INDEPENDENT SPACES</p>
      <h2 id="np-founder-title"><span class="np-copy-en">Independent ideas. <em>Practical AI.</em></span><span class="np-copy-el">Ανεξάρτητες ιδέες. <em>AI στην πράξη.</em></span></h2>
      <p class="np-founder__body np-copy-en">NOEPRAX is the independent AI agency. AI Space is the personal home of its founder, Vassilis Moulakakis, bringing together writing, professional perspectives, books and ideas. Explore both without mixing editorial views with professional service offers.</p>
      <p class="np-founder__body np-copy-el">Η NOEPRAX είναι το ανεξάρτητο AI agency. Το AI Space είναι ο προσωπικός χώρος του δημιουργού της, Βασίλειου Μουλακάκη, με άρθρα, επαγγελματικές απόψεις, βιβλία και ιδέες. Οι δύο παρουσίες συνδέονται ουσιαστικά, αλλά παραμένουν διακριτές.</p>
    </div>
    <aside class="np-founder__aside" aria-label="Independent editorial links">
      <strong>AI SPACE <span aria-hidden="true">↗</span></strong>
      <small class="np-copy-en">Founder profile, books and original ideas</small>
      <small class="np-copy-el">Προσωπικό προφίλ, βιβλία και πρωτότυπες ιδέες</small>
      <a class="np-founder__btn" href="https://ai-hub.vmoulakakis.chatgpt.site/" target="_blank" rel="noopener noreferrer"><span class="np-copy-en">Explore AI Space</span><span class="np-copy-el">Γνωρίστε το AI Space</span><span aria-hidden="true">↗</span></a>
      <a class="np-founder__btn np-founder__btn--secondary" href="https://e-vassilios-moulakakis.blogspot.com/" target="_blank" rel="noopener noreferrer"><span class="np-copy-en">Read the personal journal</span><span class="np-copy-el">Διαβάστε το προσωπικό blog</span><span aria-hidden="true">↗</span></a>
    </aside>
  </div>
</section>
`;
  if (!/<\/main>/i.test(landing)) throw new Error('NOEPRAX v3 main closing tag not found');
  landing = landing.replace(/<\/main>/i, section + '</main>');
  writeFileSync(indexPath, landing);
}

console.log(`BUILD GREEN: NOEPRAX v3 emitted ${Object.keys(files).length} audited files plus runtime overlays. SHA256 ${digest}`);
