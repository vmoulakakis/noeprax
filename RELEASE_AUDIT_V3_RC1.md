# NOEPRAX v3 RC1 — Release Audit

## Static / route integrity

- Routes checked: **20**
- Links checked: **105**
- Broken internal links: **0**
- Missing assets: **0**
- Duplicate element IDs: **0**
- JavaScript syntax failures: **0**
- Missing public build outputs: **0**

## Synthetic UX / funnel test

100 scripted low-AI-knowledge personas across 21 professions/business contexts were exercised across Free, Action Report, Guided, Managed, and Business OS intents.

- Mean synthetic satisfaction: **86.2 / 100**
- Mean synthetic funnel score: **85.4 / 100**
- Free journey score: **98.2 / 100**
- Functional checks: **41 / 42**

These are synthetic usability heuristics, not real CSAT, NPS, conversion data, reviews, or testimonials.

## External trust links audited

- OWASP Application Security Verification Standard (ASVS 5.0 official project page)
- OWASP Artificial Intelligence Security Verification Standard (AISVS 1.0 official project page)
- NIST AI Risk Management Framework official page

## Known hard blocker

Secure Supabase Auth provider/callback configuration has not yet been verified end-to-end. Paid activation therefore remains intentionally closed rather than presenting a fake or insecure sign-in / checkout flow.

## Release posture

The public/free v3 funnel is release-candidate quality. Paid SaaS activation remains gated until auth/provider callbacks and entitlement activation are verified.
