# NOEPRAX Google OAuth production setup

Current production site: `https://noeprax.vercel.app`

Current Supabase project used by the deployed auth client: `rpfadpdnnxequgvdcfoq` (`socialmarket`). This is a temporary production bridge until a dedicated `noeprax` Supabase project is created.

## Google Cloud

Create a Google OAuth client of type **Web application**.

Authorized JavaScript origin:

- `https://noeprax.vercel.app`

Authorized redirect URI for Supabase Auth:

- `https://rpfadpdnnxequgvdcfoq.supabase.co/auth/v1/callback`

Required scopes:

- `openid`
- `email`
- `profile`

Do not commit the Google client secret to GitHub.

## Supabase Auth

In Authentication > Sign In / Providers > Google:

1. Enable Google.
2. Enter the Google OAuth Client ID.
3. Enter the Google OAuth Client Secret.
4. Save.

In Authentication > URL Configuration, allow production return URLs including:

- `https://noeprax.vercel.app/login`
- `https://noeprax.vercel.app/report`

The NOEPRAX frontend checks `/auth/v1/settings` at runtime. The Google button stays disabled while `external.google` is false and becomes active automatically after the provider is enabled.

## Verification

1. Open `https://noeprax.vercel.app/login`.
2. Confirm the Google button is enabled.
3. Complete Google consent.
4. Confirm return to the NOEPRAX login/report flow.
5. Confirm `/api/health` remains healthy and the free report still works without authentication.

## Security rules

- Publishable Supabase keys may be present in browser code; service-role keys and OAuth client secrets must never be committed.
- Keep the free diagnostic usable without an account.
- Do not send sensitive customer data to consumer/free AI tools.
- Keep NOEPRAX data isolated from SocialMarket data; migrate to a dedicated Supabase project when available.
