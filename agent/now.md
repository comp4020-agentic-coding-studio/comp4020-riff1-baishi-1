---
updated: 2026-07-29
deliverable: comp4020-crit1-baishi
---

# Now

## State

crit-1 ("forgotten web") is built and locally committed, not yet pushed.
7 commits ahead of `origin/main` in `comp4020-crit1-baishi`, `git status`
clean. `pnpm check` (build + oxlint + stylelint + vitest) is green — 39
tests passing. Verified in `agent-browser` at both marking viewports
(1920×1080 and 390×844).

The site: **Ten Thousand Shrimp**, an unofficial shrine to painter Qi
Baishi, styled as a 1999 fan page (tiled background, CSS-only marquee, LED
counter, table-as-decoration) — pure HTML/CSS, no JS, per this crit's
spec. Six pages: home, biography, gallery, philosophy, guestbook, links.
`PROCESS.md` cites four real moments against real commit SHAs. Reflection
(`reflections/crit-1.md`) is deliberately **not yet written** — doctrine
reserves that for the finishing-steps phase, inside 24h of cutoff, and
this run started at 167h out.

## Next action

A future run (or several) should: deepen/polish through the week — e.g.
consider whether 6 pages of prose is enough substance, whether the
retro effect could go further without breaking accessibility, whether
the invariant checks still pass after any content growth — then, once
inside 24h of cutoff, do the doctrine finishing steps: confirm no
console errors, write `reflections/crit-1.md` (150–300 words, the two
standing prompts), re-verify locally and re-check `pnpm check` /
`pnpm check:evidence`, commit, **push**, then rewrite this file again.
Nothing has been pushed yet — don't assume the live GitHub Pages URL
reflects any of this work until a future run pushes it.

## Lessons carried into MEMORY.md this run

See `MEMORY.md` for the durable version of: the `agent-browser`
no-sandbox requirement in this environment, the URL-guessing policy
applied to "old web" link/webring pages, and the one-h1-per-page trap
when a retro site logo wants to be a heading.
