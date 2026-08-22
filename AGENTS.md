# Maad 97.5 FM

Next.js 13 App Router site for Guyana's Maad 97.5 FM radio station. Live audio streaming, Facebook Live video, program schedule/host bios, and EmailJS contact form.

## Commands

- `pnpm dev` / `npm run dev` — dev server (never auto-run; only when user asks)
- `pnpm build` / `npm run build` — production build; must pass before push
- `pnpm lint` / `npm run lint` — ESLint (`next/core-web-vitals`)
- No test suite or single-test command in repo

## Conventions

- TypeScript `strict: true`, `skipLibCheck: true`, `jsx: preserve`; path alias `@/*` → `./src/*`
- ESLint extends `next/core-web-vitals` only — no Prettier config in repo
- Tailwind CSS (`src/app/globals.css`); brand color `#FD7B2B` / `#FF8C42`, `glass-dark` utilities, custom keyframes (`radio-wave`, `float`, `pulse-glow`)
- App Router (`src/app/`); dynamic route `bio/[id]`; API route `api/live-video`
- Fonts via `next/font/google` (Inter + Space Grotesk `variable: --font-display`)

## Env & Config

- `.env.example` documents only `NEXT_PUBLIC_DOMAIN`; the vars below are used in code but missing from it — add them when setting up env
- `FACEBOOK_ACCESS_TOKEN` (server) or `NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN` — Facebook Graph `v24.0` live video; missing token → 500 from `/api/live-video`
- EmailJS keys for `ContactUs.jsx` (client-side)
- `next.config.js` — `images.domains` allowlist + security headers (`X-Frame-Options: DENY`, etc.); update allowlist when adding image hosts

## Gotchas

- `pnpm-lock.yaml` + `bun.lockb` both present; prefer `pnpm` for installs
- Live video polls `/api/live-video` every 30s; `GetLiveVideo.tsx` checks `status === LIVE|LIVE_NOW` + `embed_html` — non-live state shows static message, not embed
- Audio stream `https://streaming.broadcastradio.com/brutal`; `BottomPlayer` is active player, `Player.tsx` is legacy/disabled — don't re-enable both
- `BottomPlayer` detects current show from `src/app/lib/programs.ts` every 10s; volume in `localStorage`
- Generated/ignored: `.next/`, `tsconfig.tsbuildinfo`, `context.json`/`context.toml` (from `contexting` tool) — don't hand-edit
- No `.cursor/rules`, `.cursorrules`, or `.github/copilot-instructions.md` in repo

## Preferences

- Keep files/components small; split when growing
- Never auto-run `dev`/`build`/`start` — only on explicit request
