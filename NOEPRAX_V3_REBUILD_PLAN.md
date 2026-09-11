# NOEPRAX v3 — Multi-page Funnel, Persona-Driven Diagnostic & Premium Interaction Rebuild

Status: PLAN FIRST — no production replacement until Site DNA, Page DNA, persona acceptance tests and visual QA are complete.

## 1. Product objective
NOEPRAX v3 is not a one-page AI agency landing page. It is a multi-page marketing + diagnostic + account funnel that converts SMEs and independent professionals from a concrete business pain into a simple, useful free AI action report, then into paid research, guided implementation or managed agentic SaaS.

Core promise: **Choose the business pain. NOEPRAX finds the smallest useful AI move, shows how to start, and offers deeper implementation only when justified.**

## 2. Canonical execution method
Follow MyAgenticTeam + AFFINITY full-site flow:
SITE CONTEXT → USER JOURNEYS → INFORMATION ARCHITECTURE → NAVIGATION → ROUTE INVENTORY → SITE DNA → PAGE DNA PER ROUTE → COMPONENT PLAN → DESIGN/MOTION TOKENS → BUILD HANDOFF → IMPLEMENT → PERSONA TESTS → RESPONSIVE/A11Y/PERFORMANCE QA → PREVIEW → MEASURE → PRODUCTION.

MyAgenticTeam roles for this major rebuild:
- Planner / Growth Orchestrator
- Site architect
- CRO / funnel agent
- UX research / persona test agent
- Design-system + motion agent
- Frontend implementation agent
- Auth/data agent
- AI recommendation agent
- SEO/localization agent
- Accessibility/performance tester
- Security reviewer
- Final reviewer

## 3. Current funnel defects found in persona testing
The v2 score is too strongly driven by manual hours, volume, maturity and urgency. High-volume businesses saturate near 96/100, while the recommended agent/tool stack is determined mainly by the first generic pain. Industry/sub-profession, actual job-to-be-done and existing software do not sufficiently change the result.

Representative current results:
- Solo accountant → 76/100 → AI Operations Agent → ~35 h/month teaser
- Dental clinic → 88/100 → AI Scheduling Agent → ~32 h/month
- Real-estate agency → 96/100 → AI Revenue & Lead Agent → ~45 h/month
- Solo lawyer → 62/100 → AI Document Operations Agent → ~21 h/month
- E-commerce SME → 96/100 → AI Front Desk → ~83 h/month
- Boutique hotel → 96/100 → AI Front Desk → ~79 h/month
- Creative agency → 91/100 → AI Proposal Studio → ~44 h/month
- Home-services company → 89/100 → AI Revenue & Lead Agent → ~31 h/month

Problems:
1. Too many unrelated companies receive similar scores.
2. Same pain produces nearly the same recommendation across verticals.
3. User is asked abstract AI questions before enough operational context exists.
4. Current tools are collected but do not materially change recommendations.
5. Free result is too close to a blueprint while still not detailed enough to be trusted.
6. There is no profession-specific task selection.
7. There is no clear beginner learning layer showing how to use the selected tool.
8. The entire marketing experience is effectively one long page instead of pages with distinct intent.

## 4. New diagnostic logic
The quiz must be adaptive and profession-first.

### Stage A — Identity
- profession / industry
- sub-profession
- solo / micro / SME / multi-location
- role of respondent (owner, manager, employee)
- country / language

### Stage B — Pain
Pick one primary pain, optionally two secondary pains:
- lose leads
- repetitive admin
- customer support overload
- booking/scheduling
- proposals/quotes
- documents/inbox
- reporting
- follow-up/renewals
- internal knowledge
- AI/tool chaos

### Stage C — Actual process
Show profession-specific jobs, not generic AI wording.
Examples:
- Accountant: collect client documents; chase missing documents; answer recurring client questions; classify inbox; prepare recurring reports.
- Dentist: missed calls; appointment booking; reminders; approved FAQ; recall/reactivation.
- Real estate: property enquiries; lead qualification; viewing booking; listing content; follow-up.
- Lawyer: client intake; document checklist; scheduling; matter updates; proposal/engagement preparation.
- E-commerce: pre-sales questions; order status; returns; product discovery; support triage; abandoned cart.
- Hotel: guest questions; pre-arrival; booking enquiries; upsells; review follow-up; internal ops.

### Stage D — Existing stack
Autocomplete/checklist of software already used. The recommendation engine must first ask: **Can the existing tool already solve this?** Only recommend a new subscription if there is a gap.

### Stage E — Friction facts
Only ask metrics relevant to the selected process. A proposal process needs proposals/month and time/proposal; a support process needs contacts/day, repeat-question share and response delay; a lead process needs leads/month, response time and close rate.

### Stage F — Constraints
- data sensitivity
- human approval requirement
- budget band
- desired speed
- languages/channels

### Stage G — Free account gate
Google / Microsoft / email magic link. No embedded password. Save diagnostic securely before generating the full free report.

## 5. Free report — simple teaser, not blueprint
The free plan must answer one simple question: **What is the smallest sensible AI step for this business?**

Free report sections:
1. **Your business snapshot** — profession, size, chosen process, existing apps.
2. **Start here** — one primary process to improve first.
3. **Use what you already have** — existing app capabilities to enable first.
4. **Recommended tools** — maximum 1–3 tools, with one-line reason each; include “no new tool needed” when true.
5. **This week’s action plan** — maximum 3 steps, no architecture detail.
6. **Quick seminar** — 3–5 minute beginner guide for the selected tool(s): setup, first workflow, one prompt/example, one safety check.
7. **Do not automate yet** — one short caution when appropriate.
8. **Next-level teaser** — what paid plan adds, without revealing the paid blueprint.

The free report must not contain detailed integration architecture, extensive ROI model, full tool matrix, implementation blueprint, complete prompts, or custom agent graph.

## 6. Paid ladder
### AI Action Report / Blueprint
Detailed company research, verified tool comparison, workflow map, exact implementation steps, security/privacy notes, ROI assumptions, prompts/templates and expanded seminar.

### Guided Setup
Configuration help, integrations, testing and handoff.

### Managed Agentic Service
LLM + memory + tools + policy + evaluations + monitoring + billing/usage controls.

### Business OS
Multi-agent, multi-workflow system with custom integrations, admin control plane and SLA/governance.

Pricing remains a separate commercial decision and must not be changed in production without explicit approval.

## 7. Multi-page information architecture
Public marketing routes:
- `/` — trust + routing homepage
- `/how-it-works` — visual NOEPRAX method
- `/ai-diagnostic` — focused conversion route; minimal nav
- `/industries` — vertical directory
- `/industries/[industry]` — profession-specific problems/processes/examples
- `/problems` — pain directory
- `/problems/[pain]` — problem-aware landing pages
- `/solutions` — agentic service catalog
- `/solutions/[solution]` — one service per intent
- `/ai-tools` — methodology and curated tool-intelligence teaser
- `/pricing` — clear upgrade ladder
- `/security` — data handling, model routing, permissions, approvals
- `/resources` — tutorials / quick seminars / guides
- `/about` — credibility, methodology, founder/business identity
- `/contact`
- `/login`

Authenticated app routes:
- `/app`
- `/app/company`
- `/app/diagnostics`
- `/app/report/[id]`
- `/app/tutorials`
- `/app/blueprint`
- `/app/services`
- `/app/billing`
- `/app/settings`

Admin routes remain private and authenticated.

## 8. User journeys
### Journey 1 — profession-aware organic visitor
Industry page → profession processes → diagnostic → free account → simple report → paid action report.

### Journey 2 — pain-aware ad/search visitor
Problem page → interactive pain visual → diagnostic preselected to pain → free report → guided/managed offer.

### Journey 3 — tool-confused visitor
AI tools page → “tell us what you already use” → diagnostic → keep/replace/add recommendation → quick seminar → upgrade.

### Journey 4 — high-intent business
Solution page → proof/method → diagnostic or consultation → account → blueprint / managed service.

## 9. Premium visual / motion system
Do not use primitive static cards as the primary visual language.

Recommended code-first production stack (keeps Vercel automation and app integration):
- Next.js + TypeScript
- Motion for React for layout/shared transitions, gestures and scroll-linked UI
- GSAP ScrollTrigger / SplitText for hero, scrollytelling and controlled narrative sequences
- Rive for crisp interactive workflow/agent infographics and state-machine visuals
- Spline only for one or two high-value lightweight 3D moments; never as decorative page-wide bloat
- native CSS scroll-driven animations and View Transitions as progressive enhancement where browser support is appropriate
- AVIF/WebP, responsive images/video, lazy loading and reduced-motion fallbacks

Visual components:
- animated “pain → process → tool → action” map
- sticky scrollytelling “How NOEPRAX works” sequence
- interactive profession process map
- tool-fit mini matrix
- before/after workflow slider
- animated readiness dial only where meaningful
- proposal teaser reveal
- interactive package comparison
- quick-seminar modal/player
- trust/security architecture diagram
- verified-tool badges with last-checked date when backed by evidence

Motion principles:
- motion must explain state/change, not decorate
- no scroll-jacking
- respect `prefers-reduced-motion`
- desktop and mobile get separate motion choreography
- no heavy 3D above the fold on low-power/mobile devices

## 10. Marketing mechanics
Use ethical conversion mechanics only:
- repeated contextual CTA, not the same CTA everywhere
- diagnostic progress/save state
- “See an example free report” modal
- “How we score tools” modal
- comparison table for package depth
- FAQ objection handling
- save-progress/account prompt at the correct funnel stage
- personalized CTA after report
- optional real pilot-capacity urgency only when capacity is genuinely limited

Never use fabricated countdowns, fake reviews, fake customer counts or unverified outcome claims.

## 11. Trust system
Until verified client proof exists:
- no fake testimonials
- use transparent methodology and sample/demo outcomes clearly labeled
- show why a tool was recommended
- show why another tool was rejected
- show last verification date for pricing/integration data
- security/privacy page
- founder/company identity
- terms/privacy/cookie pages before paid acquisition
- explicit AI limitations and human-approval rules

When reviews exist, only publish verifiable testimonials with source/permission.

## 12. Persona acceptance suite before production
At minimum test:
1. solo accountant in Greece
2. 5–10 person accounting firm
3. solo lawyer
4. dental clinic
5. real-estate agency
6. boutique hotel
7. e-commerce retailer
8. creative/marketing agency
9. consultant/freelancer
10. home/field-services business
11. education/training provider
12. insurance/advisory office

For each persona test:
- can user recognize their profession within 5 seconds?
- are questions phrased in their work language, not AI jargon?
- does the selected process alter subsequent questions?
- does existing software change recommendation?
- is free output simple enough for a beginner?
- is the first action doable within one week?
- is the tool tutorial relevant?
- does next paid package clearly explain additional value?
- no unsupported claims?
- mobile completion without horizontal overflow / excessive typing?

## 13. Analytics contract
Track:
- entry route / journey
- industry selected
- pain selected
- process selected
- quiz step viewed/completed
- drop-off step
- existing stack selections
- account gate viewed/completed
- free report generated
- seminar opened/completed
- upgrade CTA clicked
- package selected
- contact/checkout action

Do not send sensitive free-text business data into analytics payloads.

## 14. Build gates
No production promotion until:
- Site DNA + route inventory complete
- Page DNA per major route family complete
- persona acceptance suite passes
- EN/EL localization QA
- mobile + desktop navigation QA
- WCAG 2.2 AA target
- reduced-motion path verified
- Core Web Vitals targets applied
- auth is real, not placeholder
- analytics events verified
- no broken routes/orphans
- security/privacy review passed
- free vs paid entitlement rules tested
- rollback reference exists

## 15. Execution order
1. Freeze v2 production as rollback reference.
2. Build v3 Site DNA and Page DNA specs.
3. Implement shared premium design/motion system.
4. Build homepage + diagnostic + free report first.
5. Run persona tests and iterate the diagnostic logic.
6. Add industry and pain route families.
7. Add solution/pricing/security/resources/about pages.
8. Implement OAuth/magic-link account gate with Supabase Auth.
9. Add quick-seminar content system.
10. Add analytics + admin funnel monitoring.
11. Preview deployment.
12. Cross-route/mobile/accessibility/performance/security QA.
13. Production only after hard gates are green.
