import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the personal site content", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>BUGg921｜个人实验室<\/title>/i);
  assert.match(html, /你好，我是/);
  assert.match(html, /未来的工具箱/);
  assert.match(html, /最近想写/);
  assert.match(html, /视觉灵感来自/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("keeps expansion points and Vue 3 wiring in the source", async () => {
  const [{ readFile }, { default: vuePackage }] = await Promise.all([
    import("node:fs/promises"),
    import("../node_modules/vue/package.json", { with: { type: "json" } }),
  ]);
  const [template, vueEntry, page] = await Promise.all([
    readFile(new URL("../app/site-template.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/vue-personal-site.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(vuePackage.version, /^3\./);
  assert.match(vueEntry, /createApp/);
  assert.match(page, /VuePersonalSite/);
  assert.match(template, /id="tools"/);
  assert.match(template, /id="notes"/);
  assert.match(template, /aria-controls="site-navigation"/);
  assert.match(template, /toggleTheme/);
  assert.match(template, /github\.com\/6owen\/arvin/);
});
