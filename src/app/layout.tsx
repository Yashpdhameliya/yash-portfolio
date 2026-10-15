import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { person, site, socials } from "@/data/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${person.name}`,
  },
  description: site.description,
  keywords: [
    "Yash Dhameliya",
    "Tech Lead",
    "Full-Stack Engineer",
    "Full-Stack Developer",
    "Team Lead",
    "Next.js developer",
    "Nest.js",
    "React developer",
    "Flutter developer",
    "Surat",
    "India",
    "Portfolio",
  ],
  authors: [{ name: person.name, url: site.url }],
  creator: person.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: person.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0f10" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: person.role,
  description: site.description,
  url: site.url,
  image: `${site.url}${person.avatar}`,
  email: `mailto:${person.email}`,
  telephone: person.phone.e164,
  address: {
    "@type": "PostalAddress",
    addressLocality: person.address.city,
    addressRegion: person.address.region,
    postalCode: person.address.postalCode,
    addressCountry: person.address.countryCode,
  },
  worksFor: {
    "@type": "Organization",
    name: "Cloudus Infotech Pvt. Ltd.",
  },
  sameAs: socials.filter((s) => s.external).map((s) => s.href),
  knowsAbout: ["Next.js", "React", "TypeScript", "Nest.js", "Node.js", "MySQL", "Flutter", "Tailwind CSS"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${instrument.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>{children}</ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
