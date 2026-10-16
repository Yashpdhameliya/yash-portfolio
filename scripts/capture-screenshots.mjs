// Captures desktop screenshots of each live project using the locally installed
// Chrome (via playwright-core, no browser download), dismisses cookie banners,
// then resizes/converts to WebP in public/images/projects/.
//
// Usage: node scripts/capture-screenshots.mjs [slug ...]
import { chromium } from "playwright-core";
import { mkdirSync, statSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SITES = [
  // waosim.com is a "coming soon" page; the live app runs on main.waosim.com.
  { slug: "waosim", url: "https://main.waosim.com/" },
  { slug: "exambro", url: "https://exambro.app/" },
  { slug: "sirohotels", url: "https://sirohotels.com/" },
  { slug: "olysim", url: "https://olysim.com/" },
  // dukkan: employee-only platform behind a login; its image (public/images/projects/dukkan.webp) is supplied manually.
  { slug: "mentalhappy", url: "https://mentalhappy.com/" },
  { slug: "barbera", url: "https://barbera.io/" },
  // viewportHeight: a taller window pushes this site's fixed notice bar below the 1600x1000 area we keep.
  { slug: "lingling", url: "https://www.linglingdubai.com/", viewportHeight: 1120 },
];

const CONSENT_BUTTONS = [
  "Accept All Cookies",
  "Accept All",
  "Accept all",
  "Accept",
  "I agree",
  "Got it",
  "OK",
];

const only = process.argv.slice(2);
const outDir = path.resolve("public/images/projects");
const rawDir = path.resolve(".shots");
mkdirSync(outDir, { recursive: true });
mkdirSync(rawDir, { recursive: true });

const browser = await chromium.launch({ channel: "chrome", headless: true });
const context = await browser.newContext({
  viewport: { width: 1600, height: 1000 },
  deviceScaleFactor: 1,
  locale: "en-US",
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
});

for (const site of SITES) {
  if (only.length && !only.includes(site.slug)) continue;
  console.log(`→ ${site.slug}: ${site.url}`);
  const page = await context.newPage();
  await page.setViewportSize({ width: 1600, height: site.viewportHeight ?? 1000 });
  try {
    await page.goto(site.url, { waitUntil: "domcontentloaded", timeout: 45_000 });
    await page.waitForLoadState("networkidle", { timeout: 20_000 }).catch(() => {});
    await page.waitForTimeout(1500);

    // Dismiss cookie / consent banners.
    for (const label of CONSENT_BUTTONS) {
      const btn = page.getByRole("button", { name: label, exact: true }).first();
      if (await btn.isVisible().catch(() => false)) {
        await btn.click({ timeout: 3000 }).catch(() => {});
        await page.waitForTimeout(800);
        break;
      }
    }
    // Hide common chat widgets / floating bubbles.
    await page.addStyleTag({
      content: `
        iframe[title*="chat" i], iframe[src*="tawk"], iframe[src*="crisp"], iframe[src*="intercom"],
        [id*="tawk" i], [class*="crisp" i], [id*="intercom" i], [class*="chat-widget" i],
        [id*="onetrust" i], [class*="cookie" i], [id*="cookie" i] { display: none !important; }
      `,
    });
    // Hide temporary announcement bars (e.g. "Important notice") so screenshots show the design.
    await page.evaluate(() => {
      for (const el of document.querySelectorAll("div,section,aside,header")) {
        const t = (el.innerText || "").trim();
        if (/^important notice/i.test(t) && el.getBoundingClientRect().height < 160) {
          let bar = el;
          while (bar.parentElement && bar.parentElement !== document.body && bar.parentElement.getBoundingClientRect().height < 160) bar = bar.parentElement;
          bar.style.display = "none";
        }
      }
    });
    await page.waitForTimeout(400);

    const raw = path.join(rawDir, `${site.slug}.png`);
    await page.screenshot({ path: raw, fullPage: false, clip: { x: 0, y: 0, width: 1600, height: 1000 } });
    const out = path.join(outDir, `${site.slug}.webp`);
    await sharp(raw).resize(1200, 750, { fit: "cover", position: "top" }).webp({ quality: 80 }).toFile(out);
    console.log(`   ✓ ${path.relative(process.cwd(), out)} (${Math.round(statSync(out).size / 1024)} KB)`);
  } catch (err) {
    console.warn(`   ✗ ${site.slug}: ${err.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
