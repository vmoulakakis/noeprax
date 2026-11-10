# NOEPRAX → MyAgenticTeam Agency OS handoff (staged)

## Proven integration
- Public, deterministic POST /api/agency-brief and bilingual Launch/Grow/Automate preview module.
- Produces inspectable, copyable service brief with proposed specialist team, milestones and measurable outcome.
- Contains zero paid LLM calls and zero shared-client database writes; only a proposal is generated.
- This public route does NOT send data to private Agency OS or create jobs, accounts, events or customer records.
- Existing NOEPRAX v3 release signature and app behavior retained; extension injected after archive verification by scripts/build.mjs.

## Next secure handoff
1. Explicit user/customer consent with identity and tenancy confirmed in NOEPRAX.
2. Match authorized NOEPRAX org ↔ Agency OS tenant via server-controlled mapping; never trust public client org ID.
3. Persist a consented brief and a redacted objective under owner/tenant-scope with idempotency.
4. Signed, short-lived service-to-service token for agency job intake; no browser service-role keys.
5. Founder approves scope/pricing/actions; worker only sees authorized project and tools.
6. Read-only status updates and evidence via tenant-safe API. GDPR retention/deletion and erasure requests.
7. Test cross-tenant failure, duplicate submissions, agent errors, provider timeouts and out-of-budget stops before production.

## Constraints
This is not a direct commercial client booking/payment flow, nor proof of running private agents. There is no unapproved transmission to the personal Agency Office database. Production promotion requires review of build, API security, frontend accessibility and output truth.
