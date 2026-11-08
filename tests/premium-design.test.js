import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../runtime/assets/noeprax-premium.css', import.meta.url), 'utf8');
const buildScript = readFileSync(new URL('../scripts/build.mjs', import.meta.url), 'utf8');
const originalHtml = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const design = readFileSync(new URL('../DESIGN.md', import.meta.url), 'utf8');

test('premium design targets actual V3 selectors, not obsolete legacy stylesheet', () => {
  for (const marker of ['.hero.grid-bg', '.hero .display', '.router-grid .router-card', '.process-stage .process-row', '.trust-grid .trust-card', '.pricing-grid .plan']) {
    assert.ok(css.includes(marker), 'Missing generated V3 selector: ' + marker);
  }
  assert.equal(css.split('{').length, css.split('}').length, 'CSS braces must balance');
  for (const prohibited of ['@import','javascript:','url(http:','url(https:']) {
    assert.ok(!css.includes(prohibited), 'Unexpected external CSS dependency: '+prohibited);
  }
});

test('release script wires stylesheet after immutable V3 extraction and footer', () => {
  assert.ok(buildScript.includes("const premiumStylesheet = '/assets/noeprax-premium.css';"));
  assert.ok(buildScript.includes('data-noeprax-premium="v1"'));
  assert.ok(buildScript.includes("if (!existsSync(premiumFile)) throw"));
  assert.ok(buildScript.indexOf("const runtime = join(root, 'runtime')") < buildScript.indexOf('const premiumStylesheet'));
  assert.ok(buildScript.indexOf('landing = landing.replace') < buildScript.indexOf('const premiumStylesheet'));
});

test('mobile, reduced-motion, forced-colors and keyboard accessibility remain', () => {
  for (const marker of ['@media(max-width:780px)', '@media(max-width:390px)', '@media(prefers-reduced-motion:reduce)', '@media(forced-colors:active)', ':focus-visible']) {
    assert.ok(css.includes(marker), 'Missing accessibility/responsive contract: '+marker);
  }
});

test('legacy controls and outgoing links survive untouched', () => {
  for (const id of ['navigator','advisorForm','calculators','pricing','governance','langToggle']) {
    assert.ok(originalHtml.includes('id="' + id + '"'), 'Missing source control: '+id);
  }
  for (const target of ['data-i18n=', 'ai-hub.vmoulakakis.chatgpt.site', 'e-vassilios-moulakakis.blogspot.com']) {
    assert.ok(originalHtml.includes(target), 'Missing original content/link: '+target);
  }
});

test('durable design contract correctly scopes generated release overlay', () => {
  assert.ok(design.startsWith('---\nversion: alpha'), 'DESIGN.md must retain versioned metadata');
  assert.ok(design.includes('Intelligence into Action'));
  assert.ok(design.includes('runtime/assets/noeprax-premium.css'));
});
