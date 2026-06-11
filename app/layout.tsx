import type { Metadata } from "next";
import { DM_Sans, Fraunces, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LandingHeader } from "@/components/landing-header";
import { LandingFooter } from "@/components/landing-footer";
import {
  CONTACT_EMAIL,
  KVK_NUMBER,
  PRODUCTS,
  SITE_DESCRIPTION,
  SITE_URL,
  VESTIGING,
} from "@/lib/constants";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Onderwijsbouwen | Bouwen aan onderwijs",
    template: "%s | Onderwijsbouwen",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Onderwijsbouwen",
  authors: [{ name: "Onderwijsbouwen" }],
  keywords: [
    "onderwijs",
    "AI in het onderwijs",
    "Corrigo",
    "Actuales",
    "Nexus Academy",
    "voortgezet onderwijs",
    "lerarentekort",
    "kansenongelijkheid",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: SITE_URL,
    siteName: "Onderwijsbouwen",
    title: "Onderwijsbouwen | Bouwen aan onderwijs",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Onderwijsbouwen | Bouwen aan onderwijs",
    description:
      "Nederlandse onderwijssoftware-studio. We bouwen aan Corrigo, Actuales en Nexus Academy.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Onderwijsbouwen",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/opengraph-image`,
  },
  description: SITE_DESCRIPTION,
  founder: {
    "@type": "Person",
    "@id": `${SITE_URL}/over#coen-sluijter`,
    name: "Coen Sluijter",
    url: `${SITE_URL}/over`,
  },
  foundingDate: "2024",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: VESTIGING,
      addressCountry: "NL",
    },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: VESTIGING,
    addressCountry: "NL",
  },
  email: CONTACT_EMAIL,
  identifier: {
    "@type": "PropertyValue",
    propertyID: "KvK",
    value: KVK_NUMBER,
  },
  knowsAbout: [
    "Onderwijssoftware",
    "Voortgezet onderwijs",
    "AI in het onderwijs",
    "Educatieve technologie",
  ],
  sameAs: PRODUCTS.map((product) => product.href),
  subOrganization: PRODUCTS.map((product) => ({
    "@type": "Organization",
    name: product.name,
    url: product.href,
    description: product.shortDescription,
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${dmSans.variable} ${fraunces.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <LandingHeader />
        <main className="flex-1">{children}</main>
        <LandingFooter />
      </body>
    </html>
  );
}
