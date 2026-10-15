// One-off: crops the original photo to a 4:5 head-to-chest portrait + a square avatar.
// Usage: node scripts/crop-profile.mjs <path-to-original.jpg> [left] [top] [width]
import sharp from "sharp";
import path from "node:path";

const [src, l = "400", t = "250", w = "1900"] = process.argv.slice(2);
if (!src) {
  console.error("Usage: node scripts/crop-profile.mjs <original.jpg> [left] [top] [width]");
  process.exit(1);
}

const left = Number(l);
const top = Number(t);
const width = Number(w);
const height = Math.round((width * 5) / 4);
const out = path.resolve("public/images");

const base = sharp(src).rotate();
const meta = await base.metadata();
console.log(`source ${meta.width}x${meta.height}, crop ${width}x${height} @ ${left},${top}`);

await base
  .clone()
  .extract({ left, top, width, height })
  .resize(1200, 1500)
  .webp({ quality: 82 })
  .toFile(path.join(out, "profile.webp"));

// Square avatar centred on the upper part of the portrait crop (face area).
const sq = width;
await base
  .clone()
  .extract({ left, top, width: sq, height: sq })
  .resize(512, 512)
  .webp({ quality: 85 })
  .toFile(path.join(out, "avatar.webp"));

// Small preview for checking framing quickly.
await sharp(path.join(out, "profile.webp")).resize(400).toFile(path.join(out, "_preview.jpg"));
console.log("written profile.webp, avatar.webp, _preview.jpg");
