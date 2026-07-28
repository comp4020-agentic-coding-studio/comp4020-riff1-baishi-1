# Process overview

A reading-guide to how the work came together — a map to your process, not an
essay about it.

## What I built

**Ten Thousand Shrimp**, an unofficial shrine to the painter Qi Baishi
(齐白石, 1864–1957), styled the way a devoted fan page would have looked in
1999: tiled background, a marquee banner, table borders as decoration, a
visitor counter nobody could verify. Six pages — home, biography, gallery,
philosophy, guestbook, and a links/further-reading page — all pure HTML and
CSS, no JavaScript.

## The moments that mattered

1. **The brief said "no JavaScript," and the starter template ships some.**
   `main.ts` exists in the template purely so the lint sensor has something
   to check from day one, with a comment telling you to delete it once the
   week's spec rules JS out — this week's spec does exactly that. Rather than
   leaving a dead script tag around, I deleted `main.ts` and its `<script>`
   reference before writing any content
   ([`bc04184`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit1-baishi/commit/bc04184)),
   so the very first commit already matches the constraint instead of
   retrofitting it later.

2. **The "no JavaScript, but still needs a period scrolling banner" problem.**
   The obvious old-web move is a `<marquee>` tag, but it's non-standard,
   deprecated, and inconsistent across browsers — a bad foundation for
   something that has to render correctly at both marking viewports. Instead
   the marquee banner is CSS-only: an `overflow: hidden` strip with a
   `@keyframes` animation translating a duplicated text string, wrapped in a
   `prefers-reduced-motion` guard that stops it for anyone who's asked their
   OS to reduce motion. Same retro effect, no deprecated markup, no
   accessibility trap
   ([`bc04184`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit1-baishi/commit/bc04184)).

3. **`pnpm check` caught a real structural mistake before I ever committed it.**
   The obvious way to build a GeoCities-style banner is a big `<h1>` site
   logo at the top of every page — but every page also needs its own content
   `<h1>` for its actual heading, and the shipped invariant test asserts
   exactly one `<h1>` per page. Running `pnpm check` failed all six pages
   with `expected 2 to be 1`. Rather than dropping the invariant or the
   content heading, I demoted the site wordmark from `<h1>` to a plain `<p>`
   (`class="wordmark"`), keeping the visual logo but leaving exactly one real
   heading — the page's own — per document. The same run also caught two
   `stylelint` violations I wouldn't have otherwise noticed: `no-descending-specificity`
   flagged three places where I'd written a low-specificity rule (`a`,
   `footer p`) after a higher-specificity one that could clobber it in a
   later edit, and `property-no-deprecated` caught a `clip: rect(...)`
   visually-hidden trick that has a non-deprecated `clip-path: inset(50%)`
   equivalent. All three fixes landed before the first commit, so
   [`bc04184`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit1-baishi/commit/bc04184)
   already reflects a green `pnpm check`, not a red one — the correction
   happened in the editor, the commit just records the result.

4. **Deliberately not guessing external URLs for the links page.**
   An old-web "webring" page begs for outbound links to real museums and
   archives, but this agent's standing instructions say never to guess a URL
   unless it's for helping with programming — and a museum catalogue link
   holds up for exactly as long as that institution keeps the path stable,
   which is not a bet worth making on someone else's behalf. `links.html`
   names the institutions and books in plain text instead of hyperlinking
   them, and only cross-links pages inside this same repo, where I control
   whether the link resolves
   ([`52d5e2d`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit1-baishi/commit/52d5e2d)).
   That's a harness-level call (a rule I'm holding myself to, not just a
   one-off edit), and it shows up as the entire shape of that page rather
   than a single line.

## Before you ship

`pnpm check:evidence` verifies your citations resolve to real commits and your
relative image paths exist, before a marker ever opens the file.
It checks that your map is traceable, not that it is good: the marker judges
whether your small, deliberately chosen set of moments shows real judgement and
reflection. A green check is not a substitute for that curation.
