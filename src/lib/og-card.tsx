import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { brand, person, site } from "@/data/profile";

/*
 * Social preview card (Open Graph + Twitter), 1200x630.
 *
 * Every platform crops this differently: Teams, WhatsApp and Slack show a small,
 * centre-cropped thumbnail; LinkedIn and X show the full width. So the photo,
 * name and title sit in a centred "safe zone" about 560px wide, and only
 * decoration (logo, URL, glows) lives near the edges.
 */

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = `${person.name}, ${person.role}`;

// Read once at module scope; the card doesn't depend on request data.
const assets = join(process.cwd(), "src/assets");
const [serif, interBold, avatar] = await Promise.all([
  readFile(join(assets, "fonts/InstrumentSerif-Regular.ttf")),
  readFile(join(assets, "fonts/Inter-Bold.ttf")),
  readFile(join(assets, "og-avatar.jpg"), "base64"),
]);
const avatarSrc = `data:image/jpeg;base64,${avatar}`;

const C = {
  bg: "#faf9f6",
  fg: "#1a1a18",
  muted: "#5e5d57",
  faint: "#8f8e86",
  accent: "#0f766e",
  accentLight: "#2dd4bf",
  amber: "#f59e0b",
  line: "#e6e3db",
};

function Mark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      <path d="M16.5 6 6 20l10.5 14" stroke="#0f766e" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M23.5 6 34 20 23.5 34" stroke="#2dd4bf" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M20 15.8 24.2 20 20 24.2 15.8 20Z" fill="#f59e0b" />
    </svg>
  );
}

export function renderOgCard() {
  const host = site.url.replace(/^https?:\/\//, "");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: C.bg,
          fontFamily: "Inter",
        }}
      >
        {/* dotted paper texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage: `radial-gradient(${C.line} 1.4px, transparent 1.4px)`,
            backgroundSize: "26px 26px",
          }}
        />
        {/* soft glows near the edges */}
        <div
          style={{
            position: "absolute",
            left: -160,
            top: -200,
            width: 560,
            height: 560,
            borderRadius: 9999,
            display: "flex",
            background: "radial-gradient(circle, rgba(15,118,110,0.20) 0%, rgba(15,118,110,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -180,
            bottom: -240,
            width: 600,
            height: 600,
            borderRadius: 9999,
            display: "flex",
            background: "radial-gradient(circle, rgba(245,158,11,0.16) 0%, rgba(245,158,11,0) 70%)",
          }}
        />

        {/* brand, top-left (decorative; fine if cropped) */}
        <div style={{ position: "absolute", left: 56, top: 48, display: "flex", alignItems: "center", gap: 12 }}>
          <Mark size={40} />
          <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: C.fg, letterSpacing: -0.6 }}>
            {brand.word}
            <span style={{ color: C.accent }}>{brand.accent}</span>
          </div>
        </div>

        {/* ---------- centred safe zone ---------- */}
        <div
          style={{
            display: "flex",
            padding: 5,
            borderRadius: 9999,
            background: `linear-gradient(135deg, ${C.accentLight}, ${C.accent} 60%, ${C.amber})`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatarSrc}
            width={168}
            height={168}
            alt=""
            style={{ borderRadius: 9999, border: `5px solid ${C.bg}` }}
          />
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 22,
            fontFamily: "Instrument Serif",
            fontSize: 88,
            lineHeight: 1,
            letterSpacing: -1.5,
            color: C.fg,
          }}
        >
          {person.name}
        </div>
        <div style={{ display: "flex", marginTop: 16, fontSize: 25, fontWeight: 700, color: C.accent, letterSpacing: -0.3 }}>
          {person.role}
        </div>
        <div style={{ display: "flex", marginTop: 14, fontSize: 20, color: C.muted, letterSpacing: 0.2 }}>
          Next.js · NestJS · AWS · Flutter · AI · Surat, India
        </div>

        {/* availability + url, bottom-centre */}
        <div
          style={{
            position: "absolute",
            bottom: 38,
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 17,
            color: C.faint,
            letterSpacing: 0.3,
          }}
        >
          <div style={{ width: 9, height: 9, borderRadius: 999, background: "#22c55e", display: "flex" }} />
          <span style={{ color: C.muted }}>{person.availability}</span>
          <span>·</span>
          <span>{host}</span>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Instrument Serif", data: serif, style: "normal", weight: 400 },
        { name: "Inter", data: interBold, style: "normal", weight: 700 },
      ],
    },
  );
}
