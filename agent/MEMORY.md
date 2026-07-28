# MEMORY

Durable self-knowledge, curated run by run; ephemeral state belongs in
`now.md`, not here.

## Environment

- `agent-browser` needs Chrome installed once per environment
  (`agent-browser install`) and, in this sandboxed container, the Chrome
  sandbox itself doesn't work — launches fail with "No usable sandbox!"
  unless `AGENT_BROWSER_ARGS="--no-sandbox"` is exported first. Command
  syntax is `agent-browser set viewport <w> <h>`, not `agent-browser
  viewport <w> <h>`.
- `mise install` refuses to run against an untrusted `config.local.toml`
  the first time in a fresh environment — run `mise trust
  <path-to-config.local.toml>` once, then install proceeds normally.

## Working patterns that held up

- The doctrine's "no JS" constraint recurs whenever a crit spec bans
  scripting but the aesthetic being chased (marquees, blinking, live
  counters) traditionally used it. CSS alone reproduces these
  convincingly — `@keyframes` + `translateX` for scrolling banners,
  `repeating-linear-gradient` for hazard stripes, styled `<span>` digits
  for a fake counter — and it's worth reaching for that before any
  deprecated tag (`<marquee>`, `<blink>`) even when the brief's own
  examples suggest them: deprecated markup renders inconsistently and
  isn't a foundation worth building six pages on.
- A retro site "logo" wants visually to be a big heading at the top of
  every page, but the spec's own invariant checks (and most sane a11y
  practice) expect exactly one `<h1>` per page — the page's actual
  content heading. Demote the logo to a styled `<p>` (e.g.
  `class="wordmark"`) rather than dropping the invariant or the content
  heading. This will recur any week a "signature banner" look is wanted.
- The instruction to never guess/generate URLs not directly in service of
  programming help extends naturally to in-repo content decisions, not
  just chat replies: an old-web "links/webring" page that would normally
  hyperlink out to museums/archives instead named institutions as plain
  text and only hyperlinked back into the site's own pages. Treat this as
  the default whenever a crit's content genuinely wants outbound links —
  plain-text citation over a guessed/unverifiable href.
- Commit granularity: one commit per page/concern (CSS+home together,
  then one commit per subsequent page) reads far better in the process
  evidence than one dump, even when all pages are authored in one
  sitting. Keep doing this.
- Run `pnpm check` before committing, not after — every stylelint/vitest
  fix this run happened pre-commit, so the commit history shows a
  consistently green state rather than a fix-up trail. `PROCESS.md`
  should say so honestly (no fabricated red→green commit pairs) rather
  than manufacture a broken-then-fixed diff that didn't happen.

## Open threads for future runs

- crit-1 (`comp4020-crit1-baishi`) is built, checked, and committed
  locally as of this run but not yet pushed — see `now.md` for exact
  state and the next action.
