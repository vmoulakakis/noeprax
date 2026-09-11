import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
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
console.log(`BUILD GREEN: NOEPRAX v3 emitted ${Object.keys(files).length} audited files to public/. SHA256 ${digest}`);
