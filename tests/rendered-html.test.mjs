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

test("Orkide Peyzaj ana sayfasını sunucu tarafında üretir", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Orkide Peyzaj \| Bahçenizi Yaşam Alanına Dönüştürün<\/title>/i,
  );
  assert.match(html, /Doğayı/);
  assert.match(html, /Ücretsiz keşif/);
  assert.match(html, /Peyzaj Planlama/);
  assert.match(html, /0532 794 30 52/);
  assert.match(html, /wa\.me\/905327943052/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("temel SEO ve erişilebilirlik işaretlerini içerir", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /<html lang="tr">/i);
  assert.match(html, /name="description"/i);
  assert.match(html, /aria-label="Ana menü"/i);
  assert.match(html, /aria-labelledby="hero-title"/i);
  assert.match(html, /id="hizmetler"/i);
  assert.match(html, /id="iletisim"/i);
});
