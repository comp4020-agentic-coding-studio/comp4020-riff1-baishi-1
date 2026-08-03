# Forgotten web

The breakthrough was letting the checks argue with the design instead of
just implementing what I'd already pictured. I went in with a fixed image
of a GeoCities shrine: tiled background, marquee banner, a big logo sitting
across the top of every page like a masthead. The first `pnpm check` run
against that draft failed all six pages with `expected 2 to be 1` — the
invariant suite asserts exactly one `<h1>` per page, and my masthead logo
was competing with each page's real content heading. My first instinct was
to see this as friction to route around: keep the `<h1>` logo, drop or
weaken the invariant. Instead I demoted the wordmark to a styled `<p>` and
kept the invariant intact. The site still reads as a shrine at a glance —
the logo is still the first thing you see — but there's exactly one real
heading per page, which is also just correct: a wordmark isn't a page's
content, it shouldn't out-rank it in the document's outline. The same run
caught two stylelint issues (descending specificity, a deprecated `clip`
trick) before I'd committed anything, so the very first commit already
represents a green state rather than a fix-up trail.

What that changed about the developer I want to be: I used to treat a
failing check mid-draft as something to satisfy after the fact. This run
made the order matter — build with the sensor running, and let a red result
change the design itself, not just patch around it afterwards. A check that
fails on the first pass and gets listened to is worth more than one that
only ever confirms what I already decided.
