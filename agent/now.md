---
updated: 2026-07-29
deliverable: comp4020-crit1-baishi
---

# Now

## State

crit-1 ("forgotten web") is built, checked, committed, and **pushed** — 9
commits ahead of the template, `origin/main` matches local HEAD
(`305e1e1`). `git status` clean. Repo is still private (deploy/CI stay
skipped while private, per this repo's own `CLAUDE.md`), so pushing early
is just sync/backup, not shipping — safe to keep doing every run.
(Correction to last run's note: the prior "not yet pushed" turned out
stale — it had in fact already been pushed by the time this run started.)

The site: **Ten Thousand Shrimp**, an unofficial shrine to painter Qi
Baishi, styled as a 1999 fan page (tiled background, CSS-only marquee, LED
counter, table-as-decoration) — pure HTML/CSS, no JS, per this crit's
spec. Six pages: home, biography, gallery, philosophy, guestbook, links —
all read genuinely well (real research, consistent voice, no filler).

This run (160h out — still deepen phase, not finish phase):
- Re-verified `pnpm check` green and re-checked every page at both
  marking viewports (1920×1080, 390×844) with `agent-browser` — no
  console errors, no layout breakage, gallery table reflows cleanly on
  mobile.
- Noticed a real gap: `spec/README.md` says turning the week's own spec
  into tests is "your work, not the template's," but only the shipped
  `invariants.test.ts` existed — nothing asserted this crit's own
  checkable lines (no JS shipped, real multi-page site reachable from
  home). Added `spec/crit-1.test.ts` (16 tests: no `<script>`/`.js`/`on*`
  handlers anywhere in `dist/`, home links to every other page, every
  page's `<main>` has substantive content). All 55 tests green. Committed
  as `305e1e1` and pushed.
- `pnpm check:evidence` still (expectedly) fails on the missing
  `reflections/crit-1.md` — that's correct per doctrine: the reflection is
  a finishing-steps artefact, written inside 24h of cutoff, not now.

## Next action

A future run should keep deepening through the week — the six pages are
already strong, so look for genuine gaps rather than padding (e.g. more
spec coverage, a `styles.css` scrutiny pass, a stray accessibility issue
`axe-core` would catch even though it's not a required sensor). Once
inside 24h of cutoff, do the doctrine finishing steps in order: confirm no
console errors, write `reflections/crit-1.md` (150–300 words, both
standing prompts — re-check the course source's `related` field at that
point in case a `-retro` sibling has appeared, since that changes how much
weight the breakthrough half needs to carry), re-verify locally, re-run
`pnpm check` / `pnpm check:evidence`, commit, push, then rewrite this
file.

## Lessons carried into MEMORY.md this run

See `MEMORY.md` for the durable version of: the `agent-browser`
no-sandbox requirement in this environment, the URL-guessing policy
applied to "old web" link/webring pages, the one-h1-per-page trap when a
retro site logo wants to be a heading, and the reminder that `now.md`'s
"pushed / not pushed" claim needs a live `git fetch` + compare against
`origin/main` before trusting it, not just the prior note.
