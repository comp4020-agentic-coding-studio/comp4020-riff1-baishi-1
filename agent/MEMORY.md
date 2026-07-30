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
- In this sandboxed container any pnpm command that triggers a deps
  reconciliation (`check`, `install`, `preview`, `dev`) can abort with
  `ERR_PNPM_ABORTED_REMOVE_MODULES_DIR_NO_TTY` (it wants to confirm
  purging `node_modules` interactively and there's no TTY). Prefix with
  `CI=true` — `CI=true pnpm preview` — rather than investigating further.

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
- The template's `spec/README.md` is explicit that turning the week's own
  published spec into tests is the agent's work, not the template's — the
  shipped `invariants.test.ts` only covers site-agnostic basics. Check
  every run whether a crit-specific `spec/<crit>.test.ts` exists yet for
  the checkable lines a test actually can assert (e.g. "no JavaScript",
  "pages reachable from home"); if it's missing, writing it is a genuine,
  well-scoped deepening task, not scope creep.
- Before trusting a stale `now.md` claim like "not yet pushed," run
  `git fetch` and compare against `origin/main` directly — a prior run's
  note can lag what actually happened (this repo's C1 work turned out
  already pushed despite the note saying otherwise).
- To run a real accessibility check without adding a permanent
  dependency: serve `dist/` locally, open a page with `agent-browser`,
  and `agent-browser eval` a snippet that appends a `<script src="https://
  cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.2/axe.min.js">` and awaits
  its `onload`, then a second `eval` calling `axe.run().then(r =>
  JSON.stringify(r.violations...))`. Network access from the browser
  works fine in this sandboxed environment. This is a one-off audit, not
  the same thing as wiring axe-core as a permanent CI sensor (the
  template's `CLAUDE.md` explicitly leaves that as separate, later work)
  — reach for the CDN-injection version first when the question is just
  "does this page currently pass," and only add a real devDependency +
  test if the week's spec asks for a standing sensor.
- `PROCESS.md`'s "moments that mattered" needs to be re-read against
  `git log` every run, not just extended when new work happens — a prior
  run added a genuinely good commit (`spec/crit-1.test.ts`) but never
  updated `PROCESS.md` to cite it, so the reading-guide silently fell
  behind the history it's supposed to map. Check for this drift
  specifically: does every notable commit since the last `PROCESS.md`
  edit have a citation, not just the newest one.
- The crit-1 repo has an in-repo `agent/` directory (`agent/doctrine.md`,
  `agent/MEMORY.md`, `agent/now.md`) that mirrors this external memory
  system, committed under messages like "memory: tick snapshot
  <timestamp>" with author `Baishi <baishi@comp4020.anu.edu.au>` — the
  same identity this session commits as. Don't mistake these for a prior
  run's own edits, and never touch `agent/` directly: the doctrine is
  explicit that `agent/` is harness-owned, and the most consistent read
  is that a wrapper around the `claude --print` invocation (not the model)
  writes these snapshots after a run finishes. Only ever write to the
  real `memory/now.md` and `memory/MEMORY.md` outside the repo.
- When a deepening pass turns up nothing to change (checks all green, a
  close CSS re-scrutiny and a full line-by-line prose reread of every
  page find no defects), that is a legitimate outcome, not a failure to
  find work — record what was checked and move on rather than inventing
  cosmetic changes (e.g. a favicon, or editing the template's generic
  `README.md`) just to have a diff. Manufactured busywork reads worse in
  the process evidence than an honest "verified, nothing needed" note.

## Open threads for future runs

- None outstanding for crit-1 beyond the routine weekly deepen/finish
  cycle — see `now.md` for exact state and the next action.
