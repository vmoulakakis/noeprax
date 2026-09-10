# NOEPRAX AI Navigator — Product, Funnel & Automation Plan

Version: 1.0
Date: 2026-09-10
Status: PLAN FIRST — no production implementation until architecture is accepted

## 1. Product thesis

NOEPRAX should evolve from an AI consultancy website into a bilingual self-service AI advisory and managed-services platform.

Core product idea:

> A business owner describes what the business actually does. An adaptive AI advisor maps the workflows, quantifies friction, identifies automation opportunities, recommends a minimal verified AI tool stack, calculates economics, and offers either a self-service implementation blueprint or a NOEPRAX managed deployment.

The product should reduce the current AI-tool discovery problem: users do not need another directory of thousands of AI tools. They need a trusted answer to: "Given my profession, workflow, software, budget and constraints, what should I actually use and what should I ignore?"

Brand promise:

> NOEPRAX — Intelligence into Action.

Commercial promise:

> Tell us how your business works. We show you what AI can realistically automate, which tools fit, what it will cost, and how to deploy it.

Default locales:
- English
- Greek

The interface should support an EN / EL toggle everywhere and persist the selected language.

## 2. Business model

NOEPRAX should operate as a hybrid of:

1. AI advisory product
2. Productized AI implementation service
3. Managed AI operations subscription
4. Evidence-based AI tool recommendation engine
5. Optional affiliate/referral revenue where transparently disclosed and never allowed to alter ranking

Revenue layers:

### Free
- basic adaptive AI Audit
- Automation Opportunity Score
- top 3 workflow opportunities
- indicative savings range
- limited tool recommendations
- downloadable/shareable summary

### Self-Service Blueprint — one-time purchase
Indicative target: €29–€99 depending on depth/market.

Includes:
- detailed workflow map
- recommended tool stack
- setup sequence
- prompt/workflow templates
- integration map
- cost estimate
- implementation checklist
- risk/compliance checklist

### Guided Setup
Indicative target: €199–€999 one-time.

NOEPRAX helps configure the recommended stack and validates the result.

### Managed AI Services
Indicative target: €149–€2,500+/month.

Examples:
- AI Front Desk
- AI Lead Engine
- AI Operations Copilot
- AI Content & Reputation Engine
- NOEPRAX Business OS

### Custom / Advisory
For larger SMEs and more complex integrations:
- architecture
- security/governance
- custom agents
- custom data integrations
- AI transformation projects

## 3. The primary funnel

Do not start with a generic services page.

Primary journey:

HOME
→ "What does your business do?"
→ business/profession selection OR free-text description
→ adaptive AI interview
→ workflow map
→ calculators
→ opportunity ranking
→ recommended tools
→ recommended NOEPRAX path
→ self-service blueprint / managed package / consultation
→ onboarding
→ implementation
→ dashboard
→ optimization

The funnel should feel like an expert consultant discovering the business, not a survey.

## 4. Adaptive Business Understanding Agent

Working name: NOEPRAX Business Mapper.

The agent must identify five layers before it recommends anything:

### A. Business identity
- country
- language
- industry
- profession
- B2B / B2C / mixed
- solo / micro / small / medium
- employee count
- number of locations
- approximate transaction/customer volume

### B. Jobs-to-be-done
What work is actually performed?

Examples:
- answer incoming enquiries
- qualify leads
- schedule appointments
- create proposals
- prepare reports
- send reminders
- chase invoices
- collect documents
- write social content
- answer support questions
- reconcile data
- summarize calls
- create listings
- prepare quotes

The user may select tasks, type free text or speak naturally in later versions.

### C. Current stack
Detect or ask for:
- website/CMS
- email provider
- office suite
- calendar
- CRM
- accounting software
- ecommerce platform
- helpdesk
- phone/VoIP
- social channels
- document storage
- project management
- automation tools already used
- current AI subscriptions

### D. Process economics
For every material workflow capture:
- occurrences per week/month
- minutes per occurrence
- people involved
- approximate loaded hourly cost
- customer/lead value where relevant
- error/rework rate if known
- current software cost

### E. Risk / constraints
- personal data
- health data
- legal information
- financial information
- customer-facing actions
- payments
- irreversible actions
- regulated profession
- requirement for human approval
- data residency/security constraints

## 5. Adaptive questioning logic

The agent must not ask every user the same 25 questions.

Use structured state and confidence scoring.

Example business profile schema:

```json
{
  "locale": "el-GR",
  "country": "GR",
  "industry": "real_estate",
  "role": "owner_agent",
  "company_size": 4,
  "business_model": "B2C",
  "channels": ["website", "phone", "email", "facebook"],
  "current_tools": ["Gmail", "Google Calendar"],
  "workflows": [],
  "goals": [],
  "constraints": [],
  "confidence": {}
}
```

Question policy:
1. Ask only questions that can materially change recommendation or economics.
2. One concise question at a time or a small grouped UI when choices are obvious.
3. Use branching logic by industry and answer.
4. Stop when the profile reaches recommendation confidence threshold.
5. Show users what the system understood before final analysis.
6. Allow correction: "That is not how my business works."

## 6. First vertical intelligence packs

MVP should begin with three verticals, not every profession.

### Real Estate
Workflow ontology:
- listing intake
- property descriptions
- inbound property enquiries
- lead qualification
- buyer/tenant requirements
- property matching
- viewing booking
- follow-up
- CRM updates
- owner reporting
- social/listing distribution

### Appointment Businesses
Initial subsegments:
- dentists with strict clinical guardrails
- beauty/wellness
- clinics where the system stays administrative, not diagnostic

Workflow ontology:
- enquiries
- booking
- rescheduling
- cancellations
- reminders
- FAQs
- missed calls
- follow-up
- reviews
- recalls/re-engagement

### Professional Services
Initial subsegments:
- accountants/bookkeepers
- consultants
- small agencies

Workflow ontology:
- client intake
- document collection
- email triage
- meeting preparation
- summaries/actions
- proposal preparation
- recurring reminders
- knowledge retrieval
- status reporting

After real usage data, expand into lawyers, hospitality, restaurants, trades, ecommerce, educators/coaches and other categories.

## 7. Calculator system

Calculators are not decorative lead magnets. They provide the economic layer of the recommendation engine.

### Calculator 1 — AI Automation Opportunity Calculator

Inputs:
- workflows
- volume
- time per workflow
- role cost
- automation feasibility

Outputs:
- monthly manual hours
- realistically automatable hours range
- annual time-value opportunity
- complexity
- confidence

Do not claim all detected time can be automated.

### Calculator 2 — Missed Lead / Slow Response Calculator

Best for real estate, appointments, local services and ecommerce.

Inputs:
- monthly enquiries
- approximate missed/late response percentage
- lead-to-sale/appointment conversion
- average gross value per conversion

Outputs:
- modeled opportunity range
- response bottleneck score
- recommended front-desk/lead automation

Every result must display assumptions and allow editing.

### Calculator 3 — AI Stack Cost & ROI Calculator

Inputs:
- current software subscriptions
- proposed tools
- user seats
- usage/voice/message estimates
- setup cost
- time-value assumptions

Outputs:
- current software cost
- recommended stack cost
- NOEPRAX managed alternative
- year-one total cost
- estimated payback range
- break-even workload

### Later calculators
- Employee vs AI-assisted workflow calculator
- Customer-support coverage calculator
- Content production economics
- Admin cost calculator
- Meeting cost calculator
- Tool consolidation calculator
- Automation readiness score

MVP should launch only the first three.

## 8. AI Tool Recommendation Engine

Working name: NOEPRAX Stack Advisor.

The tool recommender is a decision system, not a directory.

### Tool record schema

Each tool should store:
- canonical name
- vendor
- category
- supported jobs-to-be-done
- target company size
- target user sophistication
- supported countries
- languages
- pricing model
- indicative current pricing
- free trial/free tier
- APIs
- MCP support where relevant
- native integrations
- Zapier/Make/n8n compatibility
- Google Workspace compatibility
- Microsoft 365 compatibility
- CRM integrations
- ecommerce integrations
- security/compliance claims with source
- data residency notes
- human approval capabilities
- strengths
- limitations
- avoid-when conditions
- evidence sources
- evidence class
- last verified timestamp
- freshness TTL
- referral/affiliate availability stored separately from ranking factors

### Source hierarchy

Use the user's AI Resource Intelligence framework:

Discovery:
- Futurepedia and other credible discovery indexes

Prompt/workflow methodology:
- Learn Prompting

Community patterns:
- FlowGPT and selected community evidence as inspiration, never as final factual authority

Verification:
1. vendor documentation/pricing
2. official product pages
3. official security/compliance documentation
4. credible independent testing/reviews
5. community evidence where experience matters
6. Papers with Code / arXiv where technical model claims require research verification

### Freshness policy

Indicative TTL:
- pricing: 7 days
- plan limits: 7 days
- integrations: 30 days
- core features: 30 days
- security/compliance: 30 days or immediately after known material change
- legal/regulatory statements: verify at answer time when material

Expired data should not silently be treated as current.

## 9. Recommendation scoring

Use deterministic scoring around an LLM reasoning layer.

Suggested 100-point Tool Fit Score:
- job/task fit: 25
- integration fit: 20
- total cost/value: 15
- setup/operational simplicity: 10
- security/privacy/compliance fit: 10
- language/local-market fit: 5
- reliability/evidence quality: 5
- scalability: 5
- human-control/governance: 5

The LLM explains the score but does not invent the score inputs.

Hard rejection gates can override score:
- unavailable in market
- required integration missing
- prohibited data handling for the use case
- unaffordable relative to budget
- unsupported regulated action
- stale/unknown critical evidence

## 10. Recommendation output

Do not give the user 20 tools.

Default output:

### Your business, as NOEPRAX understands it
A concise business/workflow map.

### Biggest AI opportunities
Top 3, ranked by economic value and feasibility.

### Your recommended AI stack
For each task:
- Best Fit
- Lower Cost Alternative
- More Advanced Alternative only when justified

For every tool:
- why it fits
- which exact task it solves
- expected monthly cost range
- integration requirements
- limitations
- setup difficulty
- evidence freshness

### What not to buy
List redundant or poor-fit categories/tools.

This is a major trust feature.

### Build vs Buy recommendation
Choose:
- use existing SaaS
- connect multiple tools
- NOEPRAX managed service
- custom solution

### Economics
Show calculator results.

### 30-day action plan
Prioritized implementation sequence.

## 11. Example recommendation journey

User:
"I run a 4-person real-estate office in Glyfada. We get about 120 enquiries every month from our site and Facebook. I lose time answering the same questions and chasing people who never reply. We use Gmail and Google Calendar but no CRM."

System inference:
- vertical: real estate
- team size: microbusiness
- high inbound lead workflow
- no CRM
- Gmail/Google Calendar integration required
- repetitive Q&A
- follow-up leakage

Agent asks only missing high-value questions:
- average time to first reply
- approximate property transaction/commission value
- whether WhatsApp/phone is important
- whether listings exist in structured feed/database

Then output might recommend:
1. CRM/lead capture layer
2. AI website/communication assistant
3. workflow automation/follow-up layer
4. optional managed NOEPRAX Lead Engine

Specific vendor recommendations are selected from the live verified tool registry at run time, not hard-coded in page copy.

## 12. Vendor neutrality and monetization integrity

If NOEPRAX uses affiliate/referral partnerships:
- never include commission in Tool Fit Score
- recommendation ranking must be computed before affiliate logic
- show "Partner link" or equivalent disclosure
- offer the best non-affiliate tool if it scores higher
- store ranking reason and evidence for audit

This separation is critical for long-term trust.

## 13. Managed services upsell logic

The recommender should not always recommend NOEPRAX.

Examples:

### Self-service fit
A solo professional needs one simple tool, can configure it, low integration complexity.

Recommendation:
"Use this tool directly. You probably do not need a managed package yet."

### Guided setup fit
Multiple tools must be connected but workflow is standard.

Recommendation:
NOEPRAX Guided Setup.

### Managed service fit
Business lacks time/skills, needs ongoing monitoring, customer-facing agent, reporting or several integrations.

Recommendation:
NOEPRAX managed package.

### Custom fit
Complex data, regulated workflows, custom APIs, multiple departments or sensitive high-impact actions.

Recommendation:
Qualified advisory/implementation engagement.

Trust improves if the system sometimes tells the user not to buy NOEPRAX.

## 14. Site architecture

### Primary routes
- `/` — bilingual commercial home
- `/ai-advisor` — main adaptive funnel
- `/calculators`
- `/calculators/automation-opportunity`
- `/calculators/missed-leads`
- `/calculators/ai-roi`
- `/industries`
- `/industries/[industry]`
- `/solutions`
- `/solutions/[solution]`
- `/tools`
- `/tools/[tool]`
- `/compare/[tool-a]-vs-[tool-b]`
- `/pricing`
- `/how-it-works`
- `/security`
- `/responsible-ai`
- `/resources`
- `/about`

### Personalized result routes
- `/report/[secure-id]`
- `/blueprint/[secure-id]`

Do not expose sensitive business data in public SEO URLs.

### Customer routes
- `/app`
- `/app/business-profile`
- `/app/recommendations`
- `/app/workflows`
- `/app/calculators`
- `/app/agents`
- `/app/integrations`
- `/app/reports`
- `/app/billing`

## 15. Homepage structure

1. NOEPRAX logo + EN/EL
2. Hero: "Tell us how your business works. We’ll show you where AI actually fits."
3. Start AI Advisor CTA
4. Industry selector
5. Interactive mini diagnostic
6. Three calculator previews
7. "Stop buying random AI tools" section
8. Example personalized stack result
9. NOEPRAX implementation options
10. How the evidence system works
11. Security / privacy / human oversight
12. Profession-specific entry points
13. Pricing pathways
14. Final AI Advisor CTA

## 16. Bilingual / localization design

English and Greek are first-class locales, not machine-translated afterthoughts.

Requirements:
- locale routes or framework-level i18n
- EN / EL toggle
- persist locale in cookie/profile
- local terminology per industry
- localized currency and pricing
- localized tool availability
- localized compliance context
- no duplicate SEO confusion; use hreflang and canonical strategy

For future global scaling:
- language and country are separate dimensions
- do not assume English means US

## 17. Architecture

Recommended stack:
- Next.js App Router
- TypeScript
- Vercel
- Vercel AI SDK / AI Gateway
- Supabase/Postgres
- pgvector or equivalent where retrieval is needed
- Stripe
- Resend
- PostHog + first-party events
- Sentry

Core services:
- Business Profile Service
- Workflow Ontology Service
- Tool Registry
- Evidence Registry
- Recommendation Engine
- Calculator Engine
- Report Generator
- Billing / Entitlements
- Managed Service Provisioning
- Evaluation / QA

## 18. Agent architecture

### Business Mapper Agent
Understands the business and creates structured profile.

### Workflow Analyst Agent
Maps jobs, frequency, pain and automation feasibility.

### Tool Research Agent
Finds candidate tools from controlled sources.

### Evidence Verification Agent
Refreshes material feature/pricing/security facts.

### Stack Architect Agent
Scores and chooses minimal stack.

### Economics Agent
Uses calculator engine; may explain results but cannot invent inputs.

### Compliance/Risk Agent
Flags regulated/sensitive workflows and human checkpoints.

### Recommendation Writer Agent
Creates readable personalized output in EN or EL.

### Implementation Planner Agent
Creates ordered setup blueprint.

### NOEPRAX Sales Router
Routes self-service/guided/managed/custom based on real complexity, not pressure-selling.

## 19. MyAgenticTeam / AFFINITY integration

MyAgenticTeam remains implementation, QA, security and deployment control plane.

AFFINITY principles reused here:
- evidence before enthusiasm
- explicit claim/evidence classes
- reject weak options
- total cost rather than sticker price
- commercial truth over hype
- calculators/tools only where they improve decision quality
- no fabricated proof

AFFINITY Site Engine governs:
- Site Context
- user journeys
- information architecture
- route inventory
- Site DNA
- Page DNA
- cross-route conversion paths
- SEO/localization
- QA

NOEPRAX-specific decision logic remains separate from affiliate ranking so the service can remain vendor-neutral.

## 20. Data model — minimum entities

- users
- organizations
- organization_members
- business_profiles
- industries
- professions
- workflow_definitions
- business_workflows
- tools
- tool_features
- tool_integrations
- tool_pricing_snapshots
- tool_market_availability
- evidence_sources
- evidence_claims
- recommendation_runs
- recommendation_candidates
- recommendation_scores
- calculator_runs
- reports
- blueprints
- subscriptions
- partner_links
- managed_service_instances
- approvals
- audit_logs

Every recommendation run should be reproducible from stored evidence/version snapshots.

## 21. Trust architecture

Display:
- "Verified on [date]" for time-sensitive tool facts
- assumptions for calculator outputs
- confidence level
- reasons for recommendations
- reasons for exclusions when useful
- partner-link disclosure
- human-oversight flags

Never display:
- fake clients
- fake ROI
- fake scarcity
- fabricated reviews
- tool rankings influenced secretly by commission

## 22. SEO growth model

Do not generate thousands of thin pages.

High-value clusters:

### Industry intent
- AI tools for real estate agents
- AI for accountants
- AI receptionist for dentists
- AI automation for consultants

### Job intent
- AI for lead follow-up
- AI for appointment booking
- AI for email triage
- AI for document collection

### Tool comparison intent
Only when evidence is current and page provides real differentiated analysis.

### Calculators
Calculators can become organic acquisition assets when they produce genuine utility.

## 23. Analytics / product KPIs

North-star candidate:

> Qualified Recommendation Completion Rate × downstream value

Track:
- visitor → advisor start
- advisor start → profile completion
- questions per completed profile
- recommendation confidence
- calculator usage
- report share/download
- free → paid blueprint
- blueprint → implementation
- managed-service conversion
- average revenue per completed audit
- gross margin by package
- time to implementation
- retention
- tool-recommendation click-through
- recommendation correction rate
- recommendation satisfaction

## 24. MVP scope

### Build now
- English + Greek shell
- 3 vertical packs
- Business Mapper adaptive funnel
- 3 calculators
- initial 50–100 tool registry
- recommendation scoring engine
- personalized report
- email capture/report delivery
- NOEPRAX managed-service routing
- basic billing for paid blueprint
- analytics
- evidence timestamps

### Do not build in MVP
- every profession
- thousands of tools
- automatic external SaaS purchasing
- high-risk autonomous actions
- full multi-agent customer operations platform
- reseller marketplace
- white label

## 25. Build phases

### Phase A — Site DNA and product contracts
- final user journeys
- schemas
- workflow ontologies
- scoring rules
- calculator formulas
- design system
- EN/EL content architecture

### Phase B — Public experience
- homepage
- industries
- solutions
- calculators
- AI Advisor UI

### Phase C — Intelligence backend
- business-profile state machine
- tool/evidence registry
- recommendation engine
- economics engine
- report generator

### Phase D — Monetization
- paid blueprint
- managed service routing
- checkout
- onboarding

### Phase E — QA / governance
- deterministic tests
- recommendation regression suite
- evidence freshness tests
- calculator unit tests
- security/RLS tests
- accessibility/responsive/SEO QA

### Phase F — Deploy and measure
- preview deployment
- cross-route QA
- production deployment
- analytics baseline
- iterate based on real funnel data

## 26. Go / no-go criteria before expanding verticals

Do not expand aggressively until:
- at least 100 completed advisor sessions or enough statistically useful qualitative evidence
- users understand recommendations without manual explanation
- recommendation correction rate is acceptably low
- at least one vertical shows monetization signal
- tool data can be kept fresh operationally
- calculator outputs are trusted
- implementation offers have measurable delivery margin

## 27. Long-term moat

The moat is not the LLM and not a public AI-tool list.

Potential defensibility comes from:
- structured business/workflow ontology
- profession-specific decision rules
- verified tool/evidence history
- real recommendation performance data
- tool + workflow compatibility graph
- calculator/economics models
- implementation templates
- longitudinal customer outcome data
- trust from vendor-neutral recommendations

Long-term product:

> NOEPRAX Business OS — diagnose, choose, deploy, govern and optimize the AI stack for a business from one operating layer.

## 28. Final product definition

NOEPRAX should become the intelligent layer between businesses and the chaotic AI software market.

It asks what the business actually does, maps the work, calculates the opportunity, selects the smallest suitable AI stack, explains why, shows economics and risk, and then lets the customer either implement it independently or have NOEPRAX deploy and manage it end to end.
