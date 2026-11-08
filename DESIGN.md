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

**Source of truth:** This file documents semantic decisions; the first `:root` in `styles.css` remains the runtime owner of existing global color, typography-scale and layout variables. The added premium CSS is a component-focused layer in that same file; do not create competing token packages.

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
- Canonical content width: existing `--shell:min(1180px,calc(100vw - 40px))` with existing mobile overrides.
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
- **Operating map:** concrete sequence of business, workflow, agent, tools and guardrail metrics. Currently illustrative, not proof of actual live monitoring.
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

The first-stage implementation changes only `styles.css` visual rules and adds this `DESIGN.md`; existing HTML, JavaScript and API endpoints remain untouched. Static source checks are not equivalent to browser/interaction tests. A reviewer must run `npm test && npm run verify && npm run build` and visually inspect 320/390/768/1440 px plus EL/EN and reduced motion before approving a deployment.
