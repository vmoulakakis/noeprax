import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../runtime/assets/noeprax-premium.css', import.meta.url), 'utf8');
const buildScript = readFileSync(new URL('../scripts/build.mjs', import.meta.url), 'utf8');
const originalHtml = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const design = readFileSync(new URL('../DESIGN.md', import.meta.url), 'utf8');

test('premium design targets real V3 selectors, not only unused legacy CSS', () => {
  for (const marker of ['.hero.grid-bg', '.hero .display', '.router-grid .router-card', '.process-stage .process-row', '.trust-grid .trust-card', '.pricing-grid .plan']) {
    assert.ok(css.includes(marker), 'Missing generated V3 selector: '+marker);
  }
  assert.equal((css.match(/\\{/g) || []).length, (css.match(/\\}/g) || []).length);
  assert.doesNotMatch(css, /@import|javascript:|url\\(https?:/i);
});

test('actual release build loads the overlay after immutable V3 asset extraction', () => {
  assert.match(buildScript, /const premiumStylesheet = '\/assets\/noeprax-premium\\.css';/);
  assert.match(buildScript, /data-noeprax-premium="v1"/);
  assert.match(buildScript, /if \\(!existsSync\\(premiumFile\\)\\) throw/);
  assert.ok(buildScript.indexOf("const runtime = join(root, 'runtime')") < buildScript.indexOf('const premiumStylesheet'));
  assert.ok(buildScript.indexOf('landing = landing.replace') < buildScript.indexOf('const premiumStylesheet'));
});

test('mobile, reduced motion, high contrast and keyboard focus survive redesign', () => {
  for (const marker of ['@media(max-width:780px)', '@media(max-width:390px)', '@media(prefers-reduced-motion:reduce)', '@media(forced-colors:active)', ':focus-visible']) {
    assert.ok(css.includes(marker), 'Missing accessibility/responsive contract: '+marker);
  }
});

test('legacy controls and original source links remain unchanged', () => {
  for (const id of ['navigator','advisorForm','calculators','pricing','governance','langToggle']) {
    assert.ok(originalHtml.includes('id="'+id+'"'), 'Missing source control: '+id);
  }
  assert.match(originalHtml, /data-i18n=/);
  assert.match(originalHtml, /ai-hub\\.vmoulakakis\\.chatgpt\\.site/);
  assert.match(originalHtml, /e-vassilios-moulakakis\\.blogspot\\.com/);
});

test('durable design contract correctly identifies release overlay and scope', () => {
  assert.match(design, /^---\\nversion: alpha/m);
  assert.match(design, /Intelligence into Action/);
  assert.match(design, /runtime\/assets\/noeprax-premium\\.css/);
});
