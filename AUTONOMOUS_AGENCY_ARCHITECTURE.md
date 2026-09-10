# NOEPRAX — Autonomous AI Agency Operating System

Status: Canonical architecture
Date: 2026-09-10

## 1. Product definition

NOEPRAX is not a conventional AI agency website. It is a highly automated AI-agency operating system with a self-service public funnel, autonomous delivery agents, continuous monitoring, and a human-controlled admin control plane.

Core promise:

> Describe your business. NOEPRAX maps the work, recommends the right AI stack, deploys the approved solution, monitors it, and continuously improves it.

Target operating model:
- 90%+ automation for discovery, qualification, recommendation, configuration, provisioning, QA, reporting, routine support and optimization.
- Human approval gates for legal, healthcare, finance, security-sensitive, destructive, payment, privacy-sensitive and irreversible actions.
- No ungoverned autonomous external actions.

---

## 2. Control-plane architecture

The system is split into five planes:

### A. Experience Plane
Public site, AI Navigator, calculators, pricing, checkout, onboarding, customer dashboard, bilingual EN/EL experience.

### B. Intelligence Plane
Business understanding, workflow graph, tool matching, ROI modeling, recommendation engine, prompt/model routing, evidence engine.

### C. Execution Plane
Autonomous agents that provision workflows, configure integrations, generate implementation artifacts, test, deploy, monitor and optimize.

### D. Governance Plane
Approval gates, audit logs, permissions, provenance, compliance policies, rollback, versioning, risk classification.

### E. Admin Control Plane
One central NOEPRAX Admin application used by the operator to configure agents, prompts, packages, pricing, tools, models, risk rules, customers, deployments, alerts and business metrics.

---

## 3. Autonomous agent organization

### 3.1 Front-of-house agents

#### Business Discovery Agent
Goal: understand what the company actually does.

Inputs:
- profession / industry
- website
- location / market
- team size
- channels
- existing software
- repetitive work
- customer journey
- bottlenecks
- budget

Outputs:
- structured Business Profile
- confidence score
- missing-information list
- business-process map

Behavior:
- asks adaptive questions only
- stops when sufficient confidence is reached
- asks the customer to confirm the generated profile before recommendation

#### Workflow Mapper Agent
Builds a graph:

Business -> Department/Role -> Workflow -> Task -> Trigger -> Input -> Decision -> Tool -> Output -> Human checkpoint -> KPI

Outputs:
- current-state workflow graph
- friction points
- repetitive task inventory
- automation candidates
- dependency map

#### AI Opportunity Agent
Scores every candidate workflow for:
- business value
- hours saved
- revenue capture
- implementation complexity
- data sensitivity
- error impact
- autonomy suitability
- integration availability

Outputs:
- Automation Opportunity Score
- prioritized opportunities
- no-automation recommendations where AI would not add enough value

#### AI Stack Advisor Agent
Matches tasks to tools using verified metadata and compatibility constraints.

Must rank:
- fit
- integrations
- cost/value
- implementation effort
- language/country fit
- security/privacy
- support maturity
- scalability
- human controls

Affiliate or partner economics must never influence recommendation score.

#### ROI / Economics Agent
Calculates modeled ranges, not fabricated certainty.

Outputs:
- current manual cost
- estimated automatable workload
- implementation cost
- subscription cost
- potential revenue recovery
- break-even range
- payback assumptions

---

## 4. Sales automation agents

### Proposal Agent
Converts the diagnostic result into a personalized proposal.

Produces:
- executive summary
- recommended stack
- expected outcomes
- implementation scope
- exclusions
- delivery plan
- pricing
- assumptions
- risks
- approval requirements

### Package Configurator Agent
Maps requirements to:
- DIY Blueprint
- Guided Setup
- Managed NOEPRAX
- Custom Advisory

The agent may recommend a cheaper plan or no managed service where appropriate.

### Qualification Agent
Determines:
- self-service eligible
- requires consultation
- custom integration
- high-risk / human-review required
- reject / unsupported use case

### Checkout / Contract Orchestrator
Prepares the correct commercial flow after customer approval.

Never changes pricing or legal terms autonomously outside configured admin rules.

---

## 5. Autonomous delivery agents

### Onboarding Agent
Collects and validates:
- authorized website/domain
- brand data
- FAQs
- products/services
- calendar
- CRM
- email
- knowledge files
- permissions
- integration credentials via secure OAuth/secrets mechanisms
- escalation contacts

### Knowledge Agent
Creates approved knowledge bases with:
- provenance
- timestamps
- allowed source list
- update schedule
- sensitive-data classification
- customer approval state

### Solution Architect Agent
Generates a deterministic implementation plan from approved templates and requirements.

It may choose from approved components but cannot silently introduce unapproved vendors or privileged actions.

### Provisioning Agent
Configures:
- AI agents
- workflows
- integrations
- knowledge connections
- triggers
- model/provider routing
- logging
- escalation
- dashboards

### Integration Agent
Connects supported systems through approved adapters/APIs.

### QA Agent
Runs:
- scripted conversations
- structured-output tests
- integration tests
- failure scenarios
- hallucination tests
- access-control checks
- escalation tests
- localization tests

### Security/Governance Agent
Checks:
- tenant isolation
- least privilege
- secret handling
- data provenance
- retention rules
- audit logging
- model/provider policy
- PII/sensitive content rules
- human approval gates

### Deployment Agent
Promotes only validated configurations/builds.

Requirements:
- QA pass
- security pass
- required approval pass
- rollback reference
- deployment state recorded

---

## 6. Continuous operations agents

### Monitoring Agent
Always-on service-health monitoring.

Monitors:
- uptime
- failed workflows
- integration errors
- webhook failures
- latency
- AI model errors
- tool-call failures
- cost spikes
- token usage
- conversation escalation rate
- customer-defined KPIs

Produces incidents and alerts, not silent autonomous destructive fixes.

### Evaluation Agent
Continuously evaluates sampled/approved interactions for:
- correctness
- policy adherence
- task success
- response quality
- hallucination risk
- escalation correctness
- customer satisfaction proxies

### Cost Optimizer Agent
Tracks per-tenant and per-agent economics:
- model spend
- voice spend
- message spend
- automation runs
- gross margin

Can recommend model/routing changes but material changes must follow configured approval policy.

### Customer Success Agent
Creates customer-facing weekly/monthly summaries:
- work completed
- leads captured
- appointments/actions
- estimated hours saved
- failures
- recommendations
- next best automation

### Growth Agent
Optimizes public acquisition and conversion using only verified data.

### Tool Intelligence Agent
Maintains the AI-tool catalog:
- pricing snapshots
- feature changes
- integrations
- API/MCP availability
- security/compliance data
- region/language support
- deprecation alerts
- evidence freshness

Stale tools are downgraded or hidden until reverified.

---

## 7. Admin Control Center

The Admin is the heart of the business.

### 7.1 Command Center
Display:
- active customers
- active agents
- incidents
- pending approvals
- deployments
- MRR/ARR
- gross margin
- AI/API spend
- conversion funnel
- support backlog
- health score

### 7.2 Customer Control
Per customer:
- profile
- current package
- integrations
- active agents
- knowledge sources
- recent runs
- costs
- KPIs
- permissions
- incidents
- invoices
- deployment/version
- pause/disable controls

### 7.3 Agent Registry
For every agent:
- agent_id
- role
- status
- version
- model policy
- prompt policy
- allowed tools
- maximum spend
- timeout
- retry policy
- autonomy level
- human approval policy
- fallback model
- escalation target
- evaluation threshold

### 7.4 Prompt & Policy Studio
Admin can configure without code:
- system instructions
- vertical overlays
- locale overlays
- customer overrides
- forbidden actions
- required disclosures
- escalation rules
- confidence thresholds

All changes versioned and rollbackable.

### 7.5 Model Router
Configure per task:
- preferred provider/model
- fallback(s)
- max cost
- max latency
- minimum quality tier
- data/privacy constraints
- training restrictions where supported

### 7.6 Tool Catalog Admin
Manage:
- tool records
- categories
- verified pricing
- integrations
- country availability
- language support
- evidence links
- last verified
- recommendation eligibility
- partner/affiliate metadata kept separate from fit score

### 7.7 Package & Pricing Builder
Admin-configurable:
- packages
- monthly fee
- setup fee
- included usage
- limits
- overage rules
- enabled agents
- enabled integrations
- markets
- currencies
- vertical availability

### 7.8 Vertical Template Manager
Each vertical contains:
- workflow ontology
- discovery questions
- calculators
- recommended tools
- prohibited use cases
- compliance notes
- solution templates
- page content
- pricing overrides

### 7.9 Monitoring & Incident Center
Views:
- health by tenant
- health by integration
- health by agent
- incident severity
- failure clusters
- retry state
- customer impact
- root-cause notes
- rollback control

### 7.10 Approval Inbox
One unified queue for:
- sensitive customer deployments
- external-send permissions
- model/provider changes
- budget threshold breaches
- destructive actions
- high-risk outputs
- custom contracts/pricing

### 7.11 Experiment Center
Manage controlled experiments:
- site CRO
- recommendations
- prompts
- models
- onboarding
- pricing display

Every experiment has one primary hypothesis and rollback.

### 7.12 Audit & Compliance
Immutable event trail for:
- who/what changed a configuration
- previous/new version
- agent actions
- external actions
- approvals
- knowledge-source changes
- deployment state
- failures and rollbacks

---

## 8. Autonomy levels

Every action is classified:

### Level 0 — Read only
Research, analysis, monitoring.

### Level 1 — Draft
Agent prepares output; no external action.

### Level 2 — Safe automatic
Low-risk reversible internal actions under configured policy.

### Level 3 — Conditional automatic
Agent may act when deterministic policy conditions are satisfied.

### Level 4 — Approval required
Human must approve before external/sensitive action.

### Level 5 — Prohibited
Agent must never execute.

Autonomy is configured per agent + tool + customer + action type.

---

## 9. Event-driven orchestration

The platform should be event-driven rather than a collection of uncontrolled agents.

Examples:

lead.created -> discovery/qualification
business.profile.confirmed -> workflow mapper
recommendation.approved -> proposal/package config
payment.completed -> onboarding
onboarding.complete -> architecture/provisioning
provisioning.complete -> QA/security
qa.pass + approvals.pass -> deploy
deployment.active -> monitoring/evaluation/reporting
incident.created -> incident workflow
usage.threshold -> cost/upgrade workflow
tool.evidence_stale -> verification workflow

Each event must have:
- idempotency key
- tenant ID
- correlation ID
- actor
- timestamps
- input schema
- output schema
- retry policy
- dead-letter handling
- audit record

---

## 10. Configuration hierarchy

Configuration resolution priority:

GLOBAL POLICY
-> MARKET POLICY
-> VERTICAL TEMPLATE
-> PACKAGE
-> CUSTOMER OVERRIDE
-> AGENT VERSION
-> RUN-TIME CONTEXT

A lower layer cannot override a higher-level safety prohibition.

---

## 11. Data model

Core entities:
- organizations
- users
- business_profiles
- workflows
- workflow_tasks
- opportunities
- tools
- tool_evidence
- recommendations
- packages
- subscriptions
- agents
- agent_versions
- prompts
- policies
- connectors
- customer_integrations
- knowledge_sources
- deployments
- agent_runs
- tool_calls
- evaluations
- incidents
- approvals
- audit_events
- costs
- kpis
- reports
- experiments

Every operational record is tenant-scoped.

---

## 12. Monitoring model

### Platform metrics
- uptime
- error rate
- latency
- queue depth
- deployment failures
- webhook failure rate

### AI metrics
- token/model cost
- completion/error rate
- structured-output validity
- tool-call success
- fallback rate
- evaluation score
- hallucination/unsupported-answer rate

### Customer metrics
- task completion
- response time
- qualified leads
- appointments
- admin hours modeled/saved
- automation success
- escalations

### Commercial metrics
- visitor -> navigator
- navigator completion
- recommendation -> checkout
- CAC
- MRR
- ARR
- churn
- expansion
- gross margin/customer
- support cost/customer
- AI cost/customer

---

## 13. Incident policy

Severity:
- SEV0 security/data exposure
- SEV1 customer-critical outage or dangerous action
- SEV2 degraded important workflow
- SEV3 non-critical failure
- SEV4 informational

Automatic behavior may include:
- stop affected workflow
- switch to configured safe fallback
- retry idempotent action
- open incident
- notify admin

Automatic behavior must not include arbitrary destructive remediation.

---

## 14. Self-healing policy

Allowed only for predefined, reversible remedies:
- retry transient API call
- requeue failed idempotent job
- use approved fallback model
- pause failing connector
- revert to last-known-good prompt/configuration when explicit policy permits

Any fix outside registered remediation playbooks becomes an admin approval item.

---

## 15. Public/customer experience

The customer should experience:

1. Choose language EN/EL.
2. Describe business.
3. Confirm generated Business Map.
4. Receive Automation Opportunity Score.
5. Run calculators.
6. Receive ranked AI stack.
7. Choose DIY / Guided / Managed / Custom.
8. Pay / authorize onboarding.
9. Connect tools.
10. Track provisioning status.
11. Approve sensitive configuration if required.
12. See live AI team in customer dashboard.
13. Receive recurring outcome reports.

Customer dashboard should expose understandable business outcomes, not internal agent complexity.

---

## 16. Admin navigation

/admin
/admin/command-center
/admin/customers
/admin/agents
/admin/agents/[id]
/admin/prompts
/admin/policies
/admin/models
/admin/tools
/admin/packages
/admin/verticals
/admin/integrations
/admin/monitoring
/admin/incidents
/admin/approvals
/admin/deployments
/admin/evaluations
/admin/costs
/admin/analytics
/admin/experiments
/admin/audit
/admin/settings

---

## 17. Recommended stack

- Next.js + TypeScript
- Vercel deployment
- Vercel AI SDK / AI Gateway or equivalent provider-routing layer
- Supabase Postgres
- tenant-aware RLS
- background/event processing layer
- Stripe
- Resend
- OAuth integrations
- PostHog/analytics
- Sentry/error telemetry
- Vercel runtime/build/agent observability where available

MyAgenticTeam remains the software implementation/review/test control plane.
AFFINITY Site Engine / Page Engine remain the authority for site architecture, CRO and page generation.

---

## 18. MVP build scope

### Phase A — Foundation
- bilingual marketing site
- auth/tenancy
- admin shell
- agent registry
- policy registry
- event/audit schema

### Phase B — Diagnostic funnel
- adaptive Business Discovery Agent
- workflow mapper
- three calculators
- recommendation engine
- 50–100 verified tools
- personalized report

### Phase C — Commerce
- packages
- Stripe
- proposal engine
- onboarding
- customer dashboard

### Phase D — Delivery automation
- provisioning agent
- integration adapters
- QA/evaluation agent
- deployment state machine
- approval gates

### Phase E — Operations
- monitoring
- incidents
- cost telemetry
- reports
- optimization agent
- tool freshness agent

---

## 19. Non-negotiables

- Agents do not own policy; the admin control plane does.
- All external actions are tool-scoped and permission-scoped.
- No credentials in prompts or logs.
- Every material configuration is versioned.
- Every deployment has rollback.
- Every customer is tenant-isolated.
- Every recommendation exposes evidence and assumptions.
- High-risk use cases require human oversight.
- Never fabricate ROI, case studies, customers, reviews or tool capabilities.
- Monitoring is continuous; autonomous remediation is limited to approved playbooks.
- The admin can pause any customer, agent, integration or automation immediately.

## Final operating definition

NOEPRAX is an autonomous AI-agency platform in which AI agents discover needs, design solutions, configure and provision services, test them, deploy approved configurations, monitor performance and optimize routine operations — while a central Admin Control Center governs policy, risk, cost, configuration, approvals and rollback across the entire business.