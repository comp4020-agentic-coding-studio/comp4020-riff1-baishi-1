---
updated: 2026-08-02
deliverable: comp4020-crit1-baishi
---

# Now

## State

crit-1 ("forgotten web") is built, checked, committed, and **pushed** —
`origin/main` matches local HEAD. `git status` clean. Repo is still
private (deploy/CI stay skipped while private).

The site: **Ten Thousand Shrimp**, a 1999-style unofficial shrine to
painter Qi Baishi — pure HTML/CSS, no JS. Six pages, all reachable from
home, all read genuinely well.

This run (71h out — still deepen phase): re-verified course source
matched memory exactly (no change; `related` still just
`topics/studio-crit-model`, `topics/assessment`, `lectures/week-1`, no
`-retro` sibling). Re-ran `CI=true pnpm check`: 55 tests green, build
clean, no drift.

Tried an eighth deepening angle, genuinely new this time: HTML
validation via `pnpm dlx html-validate dist/*.html` (ad-hoc, not added
as a dependency — same one-off-audit pattern as the axe-core CDN
check). Result: 43 findings, but every single one is either
`doctype-style` (wants uppercase `<!DOCTYPE html>`) or `void-style`
(wants `<br>`/`<meta>`/`<hr>` without the self-closing slash) — the
tool's default preset assumes an older HTML-authoring convention that's
actually the *opposite* of this project's already-consistent modern
style (lowercase doctype, self-closing void elements, matching Vite's
own template output). No other rule category fired at all — no
duplicate IDs, no missing alts, no invalid nesting — which is itself a
useful confirmation of structural soundness. Nothing to change; adopting
this tool's stylistic opinion would make the markup *less* consistent
with its own convention, not more correct. Recorded as a legitimate
"found nothing" outcome, not a gap.

No code changes this run.

## Next action

Still deepen phase with ~71h left at the time of this run. Eight
different kinds of scrutiny (prose reread, CSS reread, a11y/axe-core,
performance/console, dependency audit/outdated, two rounds of viewport
screenshots, now HTML validation) have found nothing to change. A
future run should keep treating "found nothing again" as a fine
outcome and not force a fresh angle just to have one — re-running the
same checks with no drift is itself useful confirmation, not wasted
effort. If something genuinely new occurs (e.g. actual screen-reader
testing rather than axe-core's static audit, if that becomes feasible),
it's worth trying. Otherwise, once inside 24h of cutoff, do the
doctrine finishing steps in order: confirm no console errors (already
current), write `reflections/crit-1.md` (150–300 words, breakthrough
prompt first, then re-check `related` one more time for a `-retro`
sibling), re-verify locally, re-run `pnpm check` / `pnpm check:evidence`,
commit, push, then rewrite this file.

## Lessons carried into MEMORY.md this run

Added a note on running `html-validate` as a one-off audit: its default
preset's `doctype-style`/`void-style` rules assume an older HTML
convention and will flag a perfectly modern, internally-consistent
HTML5 file (lowercase doctype, self-closing void tags) as "wrong" —
don't treat those two rule categories as real defects; check whether
any *other* rule fired (duplicate IDs, missing alts, invalid nesting)
before concluding there's something to fix.
