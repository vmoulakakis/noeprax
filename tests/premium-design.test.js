import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../styles.css', import.meta.url), 'utf8');
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const design = readFileSync(new URL('../DESIGN.md', import.meta.url), 'utf8');

test('premium blueprint remains a deliberate scoped CSS enhancement', () => {
  assert.match(css, /PREMIUM BLUEPRINT SYSTEM — 2026-11-08/);
  assert.match(css, /\.hero-grid\s*\{/);
  assert.match(css, /\.system-map\s*\{/);
  assert.match(css, /\.map-stage\s*\{/);
  assert.match(css, /\.hero-copy \.eyebrow\s*\{/);
  assert.equal((css.match(/\{/g) || []).length, (css.match(/\}/g) || []).length);
});

test('mobile, reduced-motion, forced-colors and keyboard focus remain available', () => {
  assert.match(css, /@media\(max-width:620px\)/);
  assert.match(css, /@media\(max-width:960px\)/);
  assert.match(css, /@media\(prefers-reduced-motion:reduce\)/);
  assert.match(css, /@media\(forced-colors:active\)/);
  assert.match(css, /:focus-visible/);
});

test('original navigation, free diagnostic, calculators, governance and translations remain present', () => {
  for (const id of ['navigator', 'advisorForm', 'calculators', 'pricing', 'governance', 'langToggle']) {
    assert.ok(html.includes('id="' + id + '"'), 'missing product element ' + id);
  }
  assert.match(html, /data-i18n=/);
  assert.match(html, /ai-hub\.vmoulakakis\.chatgpt\.site/);
  assert.match(html, /e-vassilios-moulakakis\.blogspot\.com/);
});

test('durable design contract declares the runtime token owner and brand identity', () => {
  assert.match(design, /^---\nversion: alpha/m);
  assert.match(design, /NOEPRAX — DESIGN\.md/);
  assert.match(design, /styles\.css/);
  assert.match(design, /Intelligence into Action/);
});
