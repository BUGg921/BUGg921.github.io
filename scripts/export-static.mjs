import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const projectRoot = new URL("../", import.meta.url);
const workerUrl = new URL("dist/server/index.js", projectRoot);
workerUrl.searchParams.set("static-export", `${Date.now()}`);

const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("https://personal-site.local/", {
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

if (!response.ok) {
  throw new Error(`Static export failed with HTTP ${response.status}`);
}

const contentType = response.headers.get("content-type") ?? "";
if (!contentType.startsWith("text/html")) {
  throw new Error(`Static export expected HTML, received ${contentType}`);
}

const outputRoot = new URL("static-dist/", projectRoot);
await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(new URL("dist/client/", projectRoot), outputRoot, { recursive: true });

const html = await response.text();
await Promise.all([
  writeFile(new URL("index.html", outputRoot), html),
  writeFile(new URL("404.html", outputRoot), html),
]);

console.log("Static site exported to static-dist/");
