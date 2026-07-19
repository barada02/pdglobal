import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const siteUrl = "https://www.pdglobal.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Performance Dimensions Global | Talent & Organization Effectiveness",
    template: "%s",
  },
  description:
    "Performance Dimensions Global (PDG) is a people-science based, global Talent and Organization Effectiveness consulting firm led by Dr. Himank Priyadarshi, delivering analytics-driven talent management, leadership assessment, and AI-powered workforce strategy.",
  keywords: [
    "Talent Management Consulting",
    "Organization Effectiveness",
    "Leadership Assessment",
    "People Analytics",
    "AI Workforce Strategy",
    "Skills-Based Organization",
    "Himank Priyadarshi",
    "Performance Dimensions Global",
  ],
  authors: [{ name: "Performance Dimensions Global" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Performance Dimensions Global",
    title: "Performance Dimensions Global | Talent & Organization Effectiveness",
    description:
      "People-science based, global Talent and Organization Effectiveness consulting firm. Architecting & Accelerating Organizations.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Dimensions Global | Talent & Organization Effectiveness",
    description:
      "People-science based, global Talent and Organization Effectiveness consulting firm. Architecting & Accelerating Organizations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Performance Dimensions Global",
  alternateName: "PDG",
  url: siteUrl,
  description:
    "People-science based, global Talent and Organization Effectiveness consulting firm.",
  areaServed: ["United States", "Canada", "Europe", "Australia", "India"],
  founder: {
    "@type": "Person",
    name: "Himank Priyadarshi, Ph.D.",
    jobTitle: "Founder and CEO",
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Tata Institute of Social Sciences" },
      { "@type": "CollegeOrUniversity", name: "MIT Sloan School of Management" },
    ],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chicago",
    addressRegion: "IL",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} data-theme="dark">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* overflow-x: clip on body (globals.css) handles horizontal clipping without breaking position:sticky */}
        {children}
      </body>
    </html>
  );
}
