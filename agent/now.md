---
updated: 2026-08-04
deliverable: comp4020-crit1-baishi
---

# Now

## State

crit-1 ("forgotten web") is **fully finished and shipped**. This run (23h
out — inside the 24h finishing window per the doctrine clock) completed
the last outstanding finishing step: `reflections/crit-1.md` didn't exist
yet (only `reflections/README.md` was present), so I wrote it — headed
"Forgotten web" (the course source's title, not a week number), 281
words, breakthrough prompt first (the `pnpm check` run that failed
`expected 2 to be 1` on the wordmark/`<h1>` clash and how I let the
invariant win rather than routing around it), then the developer-identity
prompt (building with the sensor running, letting a red result reshape
the design rather than patch around it after the fact).

Before writing it I re-fetched the course source byte-for-byte: title
still "Forgotten web", `related` still `[studio-crit-model, assessment,
week-1]` — no `-retro` sibling, so this reflection entry only ever needs
to serve this one deliverable, not double as a retro's second half.

Re-ran the full finishing checklist:
- `CI=true pnpm check`: 55 tests green, clean build, zero lint/typecheck
  output.
- `CI=true pnpm check:evidence`: reflections/ now has 1 entry (was 0),
  PROCESS.md's 3 cited commits all resolve.
- Served `dist/` with `CI=true pnpm preview --port 4321`, opened all six
  pages with `agent-browser` (`AGENT_BROWSER_ARGS="--no-sandbox"` inline
  in the same Bash call — it does NOT persist across separate Bash
  calls, has to be in the same invocation as the `agent-browser`
  commands), `agent-browser console` empty on every page. Killed the
  preview server after.
- Committed the reflection alone (`1c15139`, "reflections: write the
  crit-1 entry, the breakthrough and takeaway"), `git status` clean,
  pushed. `origin/main` now at `1c15139`.
- Tried to verify the live URL (doctrine step 6) but both the repo page
  and the GitHub Pages URL return 404 unauthenticated — consistent with
  the repo still being private. Per doctrine step 7 and prior runs'
  notes, publishing/deploy is done by a separate trusted harness after
  cutoff; I never get its credential, so this 404 is expected, not a
  problem to chase.

PROCESS.md was re-checked for citation drift against `git log` since its
last edit — same as prior runs, no new citable commits (this run's own
reflections commit doesn't need a PROCESS.md citation; PROCESS.md cites
build-decision moments, and writing the reflection isn't one of those).

## Next action

Crit-1 is done: all doctrine finishing steps complete, tree clean, pushed.
Nothing left to build. Any future run before the marking sweep should
just re-verify (re-fetch course source for drift, re-run `pnpm check` /
`check:evidence`, confirm still pushed and clean) rather than opening a
new direction — per doctrine step "then stop," don't re-run the routine
once it's done. Once the repo goes public/deploys, a genuinely new check
becomes available: verify the actual live GitHub Pages URL end to end
(not just localhost), which no run has been able to do yet since the
repo has stayed private throughout.

## Lessons carried into MEMORY.md this run

- `AGENT_BROWSER_ARGS` (and any exported env var) does not persist
  between separate Bash tool calls in this harness — only cwd does. Put
  the `export` in the same command string as the `agent-browser`
  invocations that need it, every time, not as a one-off prior command.
