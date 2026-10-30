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
- `FACEBOOK_ACCESS_TOKEN` (server) or `NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN` — Facebook Graph `v24.0` live video; use never-expiring Page token; missing token → 500 from `/api/live-video`
- EmailJS keys for `ContactUs.jsx` (client-side)
- `next.config.js` — `images.domains` allowlist + security headers (`X-Frame-Options: DENY`, etc.); update allowlist when adding image hosts

## Gotchas

- `pnpm-lock.yaml` + `bun.lockb` both present; prefer `pnpm` for installs
- Live video flow: `/api/live-video` calls Facebook Graph `v24.0`; `GetLiveVideo.tsx` polls every 30s and shows the embed when live, otherwise static "Live video isn't available right now" message. Facebook returns empty `embed_html` unless `embeddable=true` is POSTed to the broadcast; select by status first, then construct an iframe from `permalink_url` when needed. Status enum has `LIVE_NOW` (not `LIVE`); `LIVE` check remains defensive legacy code. `/api/live-video` must keep `export const dynamic = "force-dynamic"` — without it production served a build-time static `{"live":false}` (`x-vercel-cache: HIT`). Route logs each video’s `id`, `status`, and `embed_html_length` for diagnosis.
- Audio stream `https://streaming.broadcastradio.com/brutal`; `BottomPlayer` is active player, `Player.tsx` is legacy/disabled — don't re-enable both
- `BottomPlayer` detects current show from `src/app/lib/programs.ts` every 10s; volume in `localStorage`
- Generated/ignored: `.next/`, `tsconfig.tsbuildinfo`, `context.json`/`context.toml` (from `contexting` tool) — don't hand-edit
- No `.cursor/rules`, `.cursorrules`, or `.github/copilot-instructions.md` in repo

## Preferences

- Keep files/components small; split when growing
- Never auto-run `dev`/`build`/`start` — only on explicit request
