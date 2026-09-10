# NOEPRAX MyAgenticTeam Build Report

## Status
READY FOR DEPLOYMENT REVIEW

## Delivery mode
Major application vertical slice: planner + architecture + frontend + policy/router + data migration + tester + security review.

## Implemented
- Bilingual EN/EL public experience with locale-aware default and persistent toggle.
- Audience: businesses, SMEs and independent professionals — not only small business.
- NOEPRAX logo integrated as an HTML/SVG asset.
- Free AI Navigator with deterministic fallback and zero paid-token guarantee.
- Three free calculators: automation ROI, missed-lead value, AI-stack savings.
- Agentic service contract: LLM + Memory + Tools + Workflow + Policy + Evaluation + Monitoring + Billing.
- Cost-first model registry/router.
- Paid-token route blocked from free entitlement.
- Admin Control Center preview for models, agents, budgets, monitoring and kill switches.
- No fabricated testimonials, customers or conversion claims.
- Responsive layout and reduced-motion support.
- Vercel API functions for health, advisor policy and paid-runtime fail-closed gate.
- Isolated Supabase migration prepared under `noeprax` schema.

## Model-routing policy
Free/public: deterministic path is guaranteed; optional free external routing only when provider availability and privacy rules permit. Paid customers: DeepSeek V4 Flash / GPT-5.6 Luna by default, DeepSeek V4 Pro / GPT-5.6 Terra for reasoning escalation, GPT-5.6 Sol only for high-complexity policy-approved tasks.

## Verification evidence
- `npm test`: 14/14 passed.
- `npm run verify`: GREEN.
- `npm run build`: GREEN.
- Local HTTP HEAD for `index.html`: HTTP 200.
- Headless Chromium screenshot verification was attempted, but the container Chromium process did not terminate correctly; screenshot-based responsive review remains unverified. Static responsive invariants passed.

## Supabase status
Writable migration attempt against the existing `socialmarket` project failed with `cannot execute CREATE SCHEMA in a read-only transaction`; therefore no database changes were made. The ready-to-apply migration is in `supabase/migrations/20260910_create_noeprax_runtime.sql`.

## Production blockers
1. Vercel project/import must target `vmoulakakis/noeprax`.
2. Writable Supabase migration path is required before paid tenant state is enabled.
3. Provider secrets must be configured server-side; none are committed.
4. Paid entitlement must be verified server-side before any paid-model call.
5. Stripe products, final commercial limits and legal terms remain intentionally unconfigured.

## Security decisions
No service-role/provider keys in browser code; free funnel cannot select paid model classes; sensitive free requests fall back to deterministic/local behavior; Admin is noindex and marked preview; paid runtime fails closed while entitlement verification is unavailable.
