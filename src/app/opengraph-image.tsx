import { ImageResponse } from "next/og";
import { person, site } from "@/data/profile";

export const alt = `${person.name} — ${person.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #faf9f6 0%, #f1efe8 100%)",
          color: "#1a1a18",
          fontFamily: "Georgia, 'Times New Roman', serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -140,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(15,118,110,0.22) 0%, rgba(15,118,110,0) 70%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#5e5d57", fontFamily: "monospace" }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, background: "#22c55e" }} />
          {person.availability}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 112, lineHeight: 1, letterSpacing: -3 }}>{person.name}</div>
          <div style={{ fontSize: 44, color: "#0f766e", fontStyle: "italic" }}>{person.role}</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#5e5d57",
            fontFamily: "monospace",
          }}
        >
          <div>Next.js · Nest.js · MySQL · Flutter</div>
          <div>{site.url.replace(/^https?:\/\//, "")}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
