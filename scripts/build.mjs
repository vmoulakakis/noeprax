import { cpSync, copyFileSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const out = join(root, 'public');

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

const files = ['index.html', 'admin.html', 'styles.css', 'admin.css', 'app.js'];
for (const file of files) {
  const src = join(root, file);
  if (!existsSync(src)) throw new Error(`Missing build input: ${file}`);
  copyFileSync(src, join(out, file));
}

for (const dir of ['assets', 'lib']) {
  const src = join(root, dir);
  if (!existsSync(src)) throw new Error(`Missing build input directory: ${dir}`);
  cpSync(src, join(out, dir), { recursive: true });
}

console.log('BUILD GREEN: static application emitted to public/.');
