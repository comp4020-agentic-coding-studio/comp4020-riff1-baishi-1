import { readdirSync, readFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { JSDOM } from "jsdom";
import { describe, expect, it } from "vitest";

// This week's own checkable requirements (crits/01-forgotten-web), the parts
// a test can actually assert: plain HTML/CSS with no JavaScript, and a real
// site where every page is reachable from the home page.
const DIST = resolve("dist");

function files(dir: string = DIST): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return files(path);
    return [path];
  });
}

const allFiles = files();
const htmlFiles = allFiles.filter((path) => path.endsWith(".html"));
const pages = htmlFiles.map((path) => ({
  name: relative(DIST, path),
  doc: new JSDOM(readFileSync(path, "utf8")).window.document,
}));

describe("crit-1: no JavaScript", () => {
  it("ships no .js files", () => {
    const jsFiles = allFiles.filter((path) => path.endsWith(".js"));
    expect(jsFiles).toEqual([]);
  });

  for (const { name, doc } of pages) {
    it(`${name} has no <script> tags`, () => {
      expect(doc.querySelectorAll("script").length).toBe(0);
    });

    it(`${name} has no inline event-handler attributes`, () => {
      for (const el of doc.querySelectorAll("*")) {
        for (const attr of el.attributes) {
          expect(
            attr.name.startsWith("on"),
            `<${el.tagName.toLowerCase()} ${attr.name}="...">`,
          ).toBe(false);
        }
      }
    });
  }
});

describe("crit-1: a real site, reachable from home", () => {
  const home = pages.find(({ name }) => name === "index.html");
  const others = pages.filter(({ name }) => name !== "index.html");

  it("has more than a single page", () => {
    expect(others.length).toBeGreaterThan(1);
  });

  it("links to every other page from the home page", () => {
    const hrefs = [...(home?.doc.querySelectorAll("a[href]") ?? [])].map(
      (a) => a.getAttribute("href"),
    );
    for (const { name } of others) {
      expect(hrefs.some((href) => href?.includes(name))).toBe(true);
    }
  });

  it("gives every page readable content, not a stub", () => {
    for (const { name, doc } of pages) {
      const text = doc.querySelector("main")?.textContent?.trim() ?? "";
      expect(text.length, `${name} main content`).toBeGreaterThan(200);
    }
  });
});
