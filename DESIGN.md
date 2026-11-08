---
version: alpha
name: "NOEPRAX — Operations Blueprint"
colors:
  ink: "#07162c"
  inkSecondary: "#132843"
  muted: "#5f6f84"
  line: "#dce5ef"
  paper: "#ffffff"
  tint: "#f4f8fc"
  action: "#0868ff"
  actionHover: "#0045c7"
  signal: "#4cc7ff"
  safe: "#17a673"
  dark: "#061222"
typography:
  display:
    fontFamily: "Aptos Display, Segoe UI, Arial, sans-serif"
  body:
    fontFamily: "Inter, Segoe UI, system-ui, sans-serif"
  utility:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace"
rounded:
  control: "9px"
  diagramNode: "9px"
  diagramPanel: "12px"
  dataTile: "7px"
components:
  button:
    intent: "Action-first and keyboard-discoverable"
  hero:
    signature: "Real business workflow mapped as a visual operating blueprint"
  systemMap:
    signature: "Business -> Workflow -> Governed agent"
  section:
    pattern: "Calm editorial explanation with operational detail"
omitted:
  - section: spacing
    reason: "The existing responsive stylesheet and --shell fluid-width token remain canonical for spacing."
---

# NOEPRAX — DESIGN.md

## Overview

**Product:** A bilingual (Greek/English) AI-services platform for SMEs and independent professionals. The public experience is a hybrid: marketing register for the site; product register for the free AI Navigator, calculators and administration.

**North Star:** A credible operations blueprint, not a generic gradient-heavy AI agency brochure. A first-time visitor should understand the business action, inspect the safeguards, and use a free diagnostic without encountering hidden paid-token charges.

**Design thesis:** **Intelligence into Action** becomes visible as a traceable sequence from business to workflow to governed agent. The operating map in the first fold is the one deliberate visual signature. Other sections should be restrained and readable. A blueprint grid and precise component edges are appropriate because NOEPRAX sells practical systems, not AI spectacle.

**Anti-references:** Do not clone third-party themes, repeat generic neon gradients, present fake agent activity as live telemetry, imply providers/actions are integrated when they are only previews, or use animation as evidence of technical capability.

**Source of truth:** V3 is compiled from the pinned `release/v3` archive into `public/`. Its generated `/assets/site.css` retains ownership of layout and component rules; the new `runtime/assets/noeprax-premium.css` is an optional, reversible visual enhancement linked by `scripts/build.mjs` after archive extraction. The legacy root `styles.css` remains unchanged and is **not** assumed to style the published V3.

## Colors

- Structural ink `#07162c`, dark surface `#061222`: trust and operational clarity.
- Action blue `#0868ff`, deeper action blue `#0045c7`: real navigation, focus and primary actions; never informational text alone.
- Signal cyan `#4cc7ff`: diagram and system evidence, restrained use.
- Safe green `#17a673`: approved/positive system states only; never decorative success claims.
- White and `#f4f8fc`: readable neutral working surfaces, separated by `#dce5ef` rules.
- Target accessible contrast in normal/default states, including against the dark signal strip; visually validate screen rendering before release.

## Typography

- Display: Aptos Display / Segoe UI / Arial fallback with compact tracking, used sparingly for the hero and section claims.
- Body: inherited Inter/system fallback supporting EN and Greek. Avoid external font dependencies unless verified for Greek glyph coverage and performance.
- Utility: monospace only for technical labels, process markers, and instrument readouts.
- Copy: specifics first; distinguish illustrative examples from measured operational metrics.

## Layout

- Marketing home: hero copy plus operating-system diagram, then distinct navigation to free diagnostic, services, calculators, pricing, governance and founder perspective.
- Do not alter the V3 generated shell widths and breakpoint model. The new overlay adjusts only existing V3 hero, router, process, trust and pricing component presentation.
- Visual rhythm: generous hero, dense and useful operational map, dark signal strip, quiet light utility sections, then controlled dark service sequence.
- Responsive review widths: 320, 390, 768, 960 and 1440 CSS pixels. Header and CTA must remain accessible when primary navigation hides.
- Do not hide document scrolling or make long forms overflow their parents. Prevent horizontal scrolling caused by diagram indentation, wide labels, and score/result panels.

## Elevation & Depth

The map uses a crisp architectural offset shadow. Buttons and form surfaces use shallower elevation. No animated GPU-heavy backdrop or gratuitous glassmorphism. Maintain readable content when blur is unsupported.

## Shapes

Action and diagram controls use tighter corners (9–12 px); the contained data tiles use 7 px; more generous existing panels can retain their 18–20 px treatment until a dedicated measured component refactor. One language of mechanical precision rather than a site full of identical rounded cards.

## Components

- **Header:** sticky, stable geometry, real anchors preserved, EN/EL toggle, keyboard focus.
- **Hero:** message + deterministic product value + controls to Navigator and Calculators. Never replace these URLs with demo routes.
- **Operating map:** the actual V3 includes `hero-visual`, `flow-svg`, decision cards, and process stages; their visual language is clarified without claiming any diagram is real live telemetry.
- **Signal strip:** factual model policy/value statements only. Do not fabricate customers, outcomes, integrations or uptime.
- **Navigator / calculators:** preserve all IDs, `data-i18n` keys, business calculations, form destinations, error/results behavior and free-first token policy.
- **Pricing:** preserve existing pilot disclaimers and price semantics until independently verified. No false urgency or fake social proof.
- **Founder perspective:** preserve outgoing personal AI Space and Blogger links; NOEPRAX remains a distinct commercial identity.
- **Motion:** affordance only (navigation underline, button and section hover); disable with `prefers-reduced-motion`.
- **Interaction accessibility:** semantic links/buttons, visible 3px keyboard focus, headings and labels, no hover-only information, usable forced-colors fallback.

## Do's and Don'ts

**Do:** retain the existing product stack; treat templates such as official shadcn patterns as *reference mechanisms* only; test real EN/EL routes, free calculators and form completion; run repository test, verify and build tasks; inspect desktop and mobile screenshots.

**Don't:** install a new paid template, alter product promises or model provider names, paste unreviewed components, change backend/credential/payment contracts, rebuild unrelated projects, or deploy without passing evidence gates.

## Delivery Record — 2026-11-08

**Release-aware implementation:** `runtime/assets/noeprax-premium.css` is added as a separate versionable asset. `scripts/build.mjs` appends a single `<link>` after the archived V3 stylesheet; its archive checksum and authored customer content are unchanged. `styles.css`, `index.html`, `app.js`, the API and every login/report asset remain untouched. The generated V3 home must be checked in CI for successful insertion and intact key links; independent browser visual/interactions tests at 320/390/768/1440 px with EN/EL are still required before production approval.
