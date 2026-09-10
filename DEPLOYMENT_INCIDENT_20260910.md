# NOEPRAX Deployment Incident — 2026-09-10

## Status
RESOLVED

## Failed deployment
- Deployment: `dpl_4CAXMvvnNuGaiiwZScoccxBS5zyS`
- State: ERROR
- Root cause: Vercel was configured to expect the `public/` output directory, while the build command only ran tests and verification and did not emit `public/`.
- Application tests were not the failure: all 14 tests passed and verification was GREEN before the output-directory error occurred.

## Permanent repository fix
- Added `scripts/build.mjs` to emit the static application into `public/`.
- Updated `package.json` so `npm run build` runs tests, verification, and then the static build.
- Updated `vercel.json` to explicitly set `outputDirectory` to `public`.

## Recovery deployment
- Deployment: `dpl_5VSpMxvB1BE4nbi86hLjhdpbUqwB`
- Production alias: `https://noeprax.vercel.app`
- State: READY

## Runtime verification
- `/` -> HTTP 200
- `/admin` -> HTTP 200
- `/api/health` -> HTTP 200
- Health payload reports `ok: true`, service `noeprax`, version `0.1.1`, mode `agentic-saas`, and `freePaidTokens: 0`.

## Guardrail
Future production deployments must not be marked GREEN until both build output and post-deployment runtime routes are verified.
