# NOEPRAX — Agentic Business Platform MVP

A dependency-free, bilingual EN/EL vertical slice implementing the public NOEPRAX experience, free calculators, cost-protected AI Navigator, agentic service architecture preview and Admin Control Center preview.

## Core policy
- Free/public users: **zero paid-token spend**. Deterministic calculations and rules are the guaranteed path. Optional external inference is eligible only through explicitly free routes and must satisfy privacy policy.
- Paid users: cost-first model routing. Low-cost capable models first; reasoning/premium escalation only when evaluation or task complexity justifies it.
- Paid entitlement must be verified server-side before any paid model execution. Client headers are never accepted as payment proof.
- Sensitive or irreversible actions require policy gates and human approval.

## Verify
```bash
npm test
npm run verify
npm run build
```
No dependency installation is required.

## Production secrets (not committed)
Configure only in Vercel/Supabase secret stores when enabling provider calls: `OPENROUTER_API_KEY`, `GEMINI_API_KEY`, `DEEPSEEK_API_KEY`, `OPENAI_API_KEY`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`.

## Architecture
Every service follows: `LLM + Memory + Tools + Workflow + Policy + Evaluation + Monitoring + Billing`.

The public site is intentionally useful without an LLM. The production SaaS layer attaches tenant state, subscriptions, agent runs, memory, tools, incidents and audit logs behind authenticated APIs.
