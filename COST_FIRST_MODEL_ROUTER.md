# NOEPRAX — Cost-First Multi-Model Routing Policy

Status: Canonical
Date: 2026-09-10

## 1. Objective

NOEPRAX must minimize inference cost without sacrificing task quality, privacy, reliability or customer outcomes.

The model router chooses the cheapest eligible model that passes the configured quality threshold for each task. Premium models are escalation targets, not defaults.

Core rule:

> Free/granted credits first when safe and available; otherwise cheapest approved model that meets quality, latency and privacy requirements; escalate only on failure or low confidence.

Free-tier availability is never treated as guaranteed production capacity.

## 2. Routing hierarchy

For every task, resolve in this order:

1. Is the task deterministic and solvable without an LLM? Use code/rules/SQL/search instead.
2. Can the task use cached output or a previously verified result? Reuse it.
3. Is the task low-risk, low-complexity and non-sensitive? Use free/granted-credit or cheapest approved small/flash model.
4. Is the task medium-complexity or tool-calling heavy? Use a low-cost general model with structured-output/tool reliability.
5. Is the task high-complexity, high-value or safety-sensitive? Route to a stronger approved model.
6. If confidence/evaluation fails, escalate one tier only.
7. If a provider fails, use an approved fallback under the same privacy policy.

## 3. Provider strategy

Initial approved provider families:
- DeepSeek
- OpenAI
- Google Gemini
- additional providers exposed through Vercel AI Gateway after evaluation

Use Vercel AI Gateway as the abstraction/routing/observability layer where practical, with provider allowlists, spend tracking, fallbacks, and BYOK when economically useful.

### DeepSeek
Prefer low-cost Flash-class models for classification, extraction, normalization, summarization, simple planning and routine agent turns when evaluation shows sufficient quality.
Use Pro-class models only when the quality uplift is justified.
If the account has granted balance, consume it before paid balance where provider billing does so automatically.

### OpenAI
Use low-cost Luna-class models for routine classification, extraction, structured responses, lightweight tool routing and conversational turns where they pass evaluation.
Use Sol-class models selectively for difficult reasoning, architecture, high-value recommendations, complex multi-step tool use, difficult multilingual work, or escalation.

### Gemini
Free-tier usage may be useful for development, public/non-sensitive research, synthetic evaluations and low-risk workloads, but must not receive confidential customer data when free-tier data-use terms conflict with NOEPRAX privacy policy.
Paid/no-training routes may be enabled separately.

## 4. Task-to-model policy

### Tier 0 — No LLM
Examples:
- calculations
- pricing formulas
- database lookups
- exact filtering/ranking
- static validation
- schema validation
- deterministic policy checks
- cached recommendation retrieval

Target: 0 inference tokens.

### Tier 1 — Economy
Examples:
- intent classification
- language detection
- entity extraction
- short summarization
- form normalization
- taxonomy mapping
- FAQ retrieval synthesis when low risk
- simple follow-up question generation

Default: cheapest approved flash/small model or safe free/granted-credit route.

### Tier 2 — Standard
Examples:
- adaptive business discovery
- workflow mapping
- recommendation explanation
- proposal drafting
- multi-tool orchestration
- customer support reasoning

Default: cheapest model that passes service-specific evaluation thresholds.

### Tier 3 — Premium
Examples:
- ambiguous cross-domain reasoning
- complex solution architecture
- difficult compliance interpretation support
- high-value enterprise recommendations
- failed lower-tier runs
- high-risk tasks requiring stronger reasoning before human review

Premium routing requires a reason code and is logged.

## 5. Token-economy rules

- Never resend full conversation history by default.
- Maintain compact structured state in Supabase and reconstruct only relevant context.
- Use rolling summaries for long conversations.
- Retrieve top-k memory chunks instead of dumping full memory.
- Store business profile, workflow map and policies as structured JSON rather than repeated prose.
- Use short system prompts composed from reusable policy IDs.
- Use deterministic enums and JSON schemas for outputs.
- Cap output length per task.
- Avoid chain-of-thought requests; ask for final structured reasoning artifacts only.
- Cache stable system/context prefixes where provider support exists.
- Reuse verified tool metadata until freshness TTL expires.
- Deduplicate repeated website/document ingestion.
- Precompute embeddings and metadata once, not per request.
- Batch offline enrichment where practical.
- Schedule non-urgent DeepSeek workloads for off-peak pricing where operationally safe.
- Do not invoke an LLM for simple arithmetic, sorting, filtering or templating.

## 6. Memory architecture

Memory is layered:

1. Session memory — current conversation state.
2. Customer operational memory — confirmed business profile, preferences, workflows and approved facts.
3. Service memory — configuration and service-specific state.
4. Episodic memory — relevant prior outcomes/incidents/interactions.
5. Knowledge memory — retrieved approved documents and sources.

Only the minimum relevant memory is inserted into a model context.

Memory retrieval must be tenant-scoped and permission-aware.

## 7. Cost telemetry

Every model call records:
- tenant_id
- service_id
- agent_id
- task_type
- provider
- model
- input_tokens
- cached_input_tokens when available
- output_tokens
- provider_cost
- gateway_cost
- latency
- success/failure
- evaluation score
- escalation reason
- free_credit/granted_balance flag when observable

Admin dashboards expose:
- cost per customer
- cost per service
- cost per successful task
- cost per agent
- cost per provider/model
- gross margin per subscription
- premium escalation rate
- cache hit rate
- tokens per workflow

## 8. Budget controls

Configurable globally, by tenant, package, service and agent:
- max cost per run
- max daily spend
- max monthly spend
- max output tokens
- max premium-model calls
- max retries
- concurrency
- fallback policy

Threshold behavior:
- warn
- downgrade route
- pause non-critical tasks
- require approval
- hard stop

Safety-critical tasks must not be silently downgraded below their minimum quality tier solely to save money.

## 9. Free-credit policy

NOEPRAX may use free tiers, promotional credits and granted balances when all of these are true:
- usage is permitted by provider terms
- required privacy/data-use policy is satisfied
- rate limits are sufficient for the workload
- reliability is acceptable
- model quality passes evaluation

Do not architect production economics assuming promotional/free credits will remain available.

Free-credit routing priority is configurable in Admin and can be disabled globally or per tenant.

## 10. Privacy-aware routing

Each provider/model route carries metadata:
- training policy
- retention policy
- ZDR availability
- region
- data residency
- allowed sensitivity classes
- approved tenants

Customer-confidential, PII, healthcare, legal, financial or otherwise sensitive data is only routed through approved privacy-compatible routes.

Free tiers that use prompts/content to improve provider products are limited to non-sensitive/public/synthetic workloads unless terms change and are reverified.

## 11. Quality gates

Cost optimization is subordinate to quality gates.

Each service defines evaluation thresholds for:
- task success
- structured output validity
- factual support
- tool-call correctness
- hallucination rate
- language quality
- policy adherence
- latency

The router may automatically promote or demote model preference based on measured quality/cost data, but material production changes must remain versioned and rollbackable.

## 12. Admin controls

Admin must support:
- provider enable/disable
- model enable/disable
- preferred model by task
- fallback chain
- privacy class
- max cost/run
- max tokens
- free-credit preference
- off-peak scheduling preference
- minimum evaluation score
- premium escalation rules
- customer overrides
- emergency provider kill switch

## 13. Supabase integration

Reuse existing orchestration/agent-run patterns where appropriate, but NOEPRAX should use its own schema/namespace and tenant model rather than directly coupling core runtime state to SocialMarket-specific tables.

Recommended NOEPRAX tables include:
- model_providers
- model_catalog
- model_prices
- model_routes
- model_route_versions
- model_usage
- model_budgets
- agent_runs
- agent_run_steps
- evaluations
- memory_items
- memory_summaries
- tool_registry
- tool_calls
- incidents
- approvals

Price records must be timestamped and refreshable because model pricing changes frequently.

## 14. Production principle

The objective is not to maximize use of free models. The objective is to minimize cost per successful customer outcome.

A $0.001 model call that fails and triggers three retries can be more expensive than one $0.01 call that succeeds. Routing decisions must therefore optimize:

> expected total cost = inference cost + retry cost + tool cost + failure cost + human-support cost

NOEPRAX should learn this empirically from production telemetry.
