// Tell Bing (and other IndexNow engines: Yandex, Seznam, Naver) that pages changed.
// Run after a deploy is live:
//   pnpm indexnow                      -> every URL in the live sitemap
//   pnpm indexnow /blueprint /insights -> only these paths
// The key file lives at public/<KEY>.txt and must stay deployed.
const HOST = 'yatisphere.com';
const KEY = 'fe9219dadf8940ab96f977397a2e7891';
const ORIGIN = `https://${HOST}`;

async function sitemapUrls() {
  const res = await fetch(`${ORIGIN}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

const args = process.argv.slice(2);
const urlList = args.length
  ? args.map((p) => (p.startsWith('http') ? p : `${ORIGIN}${p.startsWith('/') ? '' : '/'}${p}`))
  : await sitemapUrls();

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${ORIGIN}/${KEY}.txt`, urlList }),
});

// 200 = accepted, 202 = accepted (key check pending), 403 = key file not found/mismatch, 422 = URL not on host
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URL(s)`);
if (res.status >= 300) {
  console.log(await res.text());
  process.exit(1);
}
