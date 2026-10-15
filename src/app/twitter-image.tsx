import { renderOgCard } from "@/lib/og-card";
import { person } from "@/data/profile";

export const alt = `${person.name}, ${person.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgCard();
}
