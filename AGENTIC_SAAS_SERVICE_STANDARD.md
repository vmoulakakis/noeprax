# NOEPRAX — Agentic SaaS Service Standard

Status: Canonical product architecture
Date: 2026-09-10

## 1. Core rule

Every NOEPRAX customer-facing service is an agentic SaaS system. No service is implemented as a one-off automation bundle or bespoke script unless explicitly approved as an exception.

Every service must be composed from the same reusable contract:

> SERVICE = LLM + MEMORY + TOOLS + POLICIES + WORKFLOWS + EVALUATIONS + OBSERVABILITY + BILLING + TENANT CONTEXT

Examples:
- AI Front Desk
- AI Lead Engine
- AI Client Desk
- AI Property Agent
- AI Guest Concierge
- AI Operations Copilot
- AI Content Agent
- AI Business OS

Each is a configuration of the common NOEPRAX runtime rather than a separate codebase.

---

## 2. Agentic Service Object

Each service instance must contain:

### Identity
- service_id
- service_type
- service_version
- tenant_id
- vertical_id
- package_id
- locale
- status

### LLM policy
- primary model
- fallback models
- max cost/run
- max latency
- quality tier
- structured-output schema
- provider restrictions
- data/privacy restrictions

### Memory
- working/session memory
- customer profile memory
- workflow memory
- approved knowledge memory
- interaction summary memory
- preferences/state memory
- KPI/outcome memory
- incident/learning memory

### Tools
- allowed tools only
- OAuth-scoped customer integrations
- read/write permission per tool
- action risk class
- approval requirement
- rate limits
- spend limits

### Policies
- global safety policy
- market policy
- vertical policy
- package policy
- customer-specific policy
- service-specific policy
- escalation policy

### Workflows
- triggers
- states
- tasks
- decisions
- tool calls
- retries
- human checkpoints
- success/failure criteria

### Evaluations
- task success
- factuality/grounding
- tool-use correctness
- escalation correctness
- policy adherence
- customer-specific KPI

### Observability
- run history
- tool calls
- latency
- cost
- errors
- retries
- fallback usage
- evaluation score
- business outcome

### Billing
- plan entitlement
- included usage
- metered usage
- overage rules
- AI/tool cost allocation
- gross margin

---

## 3. Memory architecture

Memory must be explicit and tenant-isolated.

### Layer A — Working memory
Short-lived context for the current run/conversation.

### Layer B — Customer memory
Stable facts about the customer:
- company profile
- team/roles
- products/services
- locations
- communication style
- approved preferences
- integrations

### Layer C — Workflow memory
State of ongoing processes:
- lead status
- appointment status
- onboarding progress
- open tasks
- follow-up state

### Layer D — Knowledge memory
Only approved/provenance-tracked knowledge sources:
- website content
- FAQs
- policies
- product/service catalog
- internal docs
- SOPs

### Layer E — Learning/outcome memory
Operational learnings derived from measured outcomes:
- successful routing patterns
- recurring failure patterns
- approved optimization findings
- customer-specific thresholds

Rules:
- no cross-tenant memory leakage
- memory writes are policy-controlled
- important memory mutations are auditable
- sensitive data retention is configurable
- generated assumptions must never be stored as facts without validation

---

## 4. Tool architecture

LLMs do not directly own permissions. Agents receive capability-scoped tools.

Tool categories:
- communication
- calendar
- CRM
- documents
- web/research
- analytics
- payments/billing
- marketing
- social
- ecommerce
- voice
- workflow automation
- internal NOEPRAX services

Every tool binding specifies:
- tenant
- OAuth/account connection
- scopes
- read/write/delete capability
- risk level
- approval gate
- rate limit
- cost budget
- timeout
- retry policy

A model switch must never increase tool permissions.

---

## 5. Runtime pattern

Standard execution loop:

EVENT/TRIGGER
-> LOAD TENANT + SERVICE CONFIG
-> LOAD RELEVANT MEMORY
-> RESOLVE POLICY
-> PLAN/SELECT NEXT ACTION
-> CALL APPROVED TOOL OR GENERATE OUTPUT
-> VALIDATE RESULT
-> RUN EVALUATION/POLICY CHECK
-> UPDATE WORKFLOW STATE
-> WRITE APPROVED MEMORY
-> EMIT TELEMETRY
-> CONTINUE / ESCALATE / COMPLETE

All material steps are correlated through run_id / workflow_id / tenant_id.

---

## 6. Multi-agent services

A service may contain one or multiple specialized agents.

Example: AI Lead Engine
- Lead Intake Agent
- Qualification Agent
- Research/Enrichment Agent
- Follow-up Agent
- Booking Agent
- CRM Agent
- Supervisor Agent

The Supervisor coordinates policy and state; it does not bypass permissions.

Example: AI Front Desk
- Reception Agent
- Knowledge Agent
- Scheduling Agent
- Escalation Agent
- QA/Supervisor

---

## 7. Service Factory

NOEPRAX Admin must be able to create a new service from configuration rather than code.

Service Factory inputs:
- name
- vertical(s)
- jobs-to-be-done
- supported triggers
- agent graph
- model policy
- memory schema
- tools
- workflows
- prompt/policy overlays
- risk classes
- evaluation suite
- package/pricing
- usage limits
- customer dashboard widgets

Output:
- versioned Service Definition
- deployable runtime configuration
- onboarding requirements
- QA suite
- monitoring profile
- pricing entitlement

New service lifecycle:
DRAFT -> TEST -> APPROVED -> PUBLISHED -> ACTIVE -> DEPRECATED

---

## 8. Admin configuration model

Admin controls must include:

### Service Registry
Create/edit/clone/version/pause/deprecate services.

### Agent Graph Editor
Configure which agents exist and how they hand off to one another.

### Model Router
Per service/task/model rules and fallbacks.

### Memory Inspector
View tenant-scoped memory, provenance, retention, write history and delete controls where permitted.

### Tool Permission Manager
Grant/revoke scopes and set approval policies.

### Workflow Builder
Triggers, states, branches, actions, retries, escalation.

### Prompt/Policy Studio
Versioned prompt and policy overlays.

### Evaluation Studio
Test datasets, expected behavior, thresholds and regression history.

### Monitoring Center
Runs, failures, costs, latency, tool errors, quality and business KPIs.

### Service Economics
Revenue, variable AI/tool spend, gross margin, overage and plan utilization.

---

## 9. Customer experience

Customers buy an outcome-oriented SaaS service, not an LLM configuration.

Example:

AI Property Lead Engine
- answers enquiries
- qualifies prospects
- remembers lead context
- searches approved listings
- books viewings
- updates CRM
- follows up
- escalates complex cases
- measures conversion

Behind the scenes this uses LLM + memory + tools + workflow + monitoring.

The customer dashboard should show:
- service status
- tasks completed
- leads/actions
- pending approvals
- integrations
- recent activity
- KPIs
- usage
- estimated value/outcomes

It should not expose unnecessary model/prompt complexity.

---

## 10. Tool recommendation and deployment

The NOEPRAX Navigator first decides whether a business need should be solved by:

1. native NOEPRAX agentic service
2. third-party SaaS tool
3. hybrid NOEPRAX + third-party stack
4. existing customer tool with configuration changes
5. no AI at all

If NOEPRAX can deliver the workflow through its own service runtime, it may recommend and instantiate the relevant service definition.

If a third-party tool is better, the recommendation engine must say so.

Commercial relationships must not affect fit scoring.

---

## 11. Security and governance

Non-negotiable:
- tenant isolation
- least privilege tools
- short-lived/scoped credentials where possible
- secrets never stored in prompts
- auditable memory writes
- versioned prompts/models/policies
- human approval for configured high-risk actions
- reversible deployments
- kill switches
- provider/data routing controls
- evaluation gates before material service version promotion

---

## 12. Observability standard

Every agentic service reports:

Technical:
- availability
- latency
- run success/failure
- tool-call success
- retry count
- fallback model use

AI quality:
- evaluation score
- grounded answer rate
- structured-output validity
- escalation quality
- unsupported claim rate

Economics:
- token/model cost
- tool/API cost
- cost per completed task
- gross margin

Business:
- service-specific KPI
- task completion
- time saved model
- lead/booking/revenue outcome where attributable

---

## 13. Product architecture

NOEPRAX PLATFORM

CONTROL PLANE
-> Admin
-> Policies
-> Service Registry
-> Agent Registry
-> Models
-> Tools
-> Memory
-> Workflows
-> Evaluations
-> Monitoring
-> Billing

RUNTIME PLANE
-> Tenant Context
-> Agent Runtime
-> Memory Runtime
-> Tool Gateway
-> Workflow Engine
-> Event Bus
-> Evaluation Runtime
-> Telemetry

SERVICE LAYER
-> AI Front Desk
-> AI Lead Engine
-> AI Client Desk
-> AI Property Agent
-> AI Guest Concierge
-> AI Operations Copilot
-> AI Content Agent
-> additional vertical services

EXPERIENCE LAYER
-> Public Site
-> AI Navigator
-> Calculators
-> Checkout
-> Onboarding
-> Customer Dashboard

---

## 14. Strategic consequence

NOEPRAX should be positioned as an Agentic SaaS platform, not as an agency that happens to use agents.

The reusable asset is the runtime and Service Factory.

A new profession should normally require:
- vertical ontology
- memory schema additions only where needed
- tool bindings
- service configuration
- prompts/policies
- workflows
- evaluations
- localized UX/content

It should not require a new standalone application.

## Final definition

> Every NOEPRAX service is a governed, tenant-isolated agentic SaaS product powered by LLMs, persistent memory, permissioned tools, workflows, evaluations and continuous monitoring — configured and operated through one central NOEPRAX control plane.
