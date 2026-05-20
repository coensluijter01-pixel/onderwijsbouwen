import type { Metadata } from "next";
import { DM_Sans, Fraunces, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LandingHeader } from "@/components/landing-header";
import { LandingFooter } from "@/components/landing-footer";
import { CONTACT_EMAIL, SITE_URL, VESTIGING } from "@/lib/constants";

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

const SITE_DESCRIPTION =
  "Onderwijsbouwen ontwikkelt technologie en kennis voor het Nederlandse onderwijs. We bouwen aan twee initiatieven: Corrigo voor docenten en Nexus Academy voor leerlingen.";

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
      "Nederlandse onderwijssoftware-studio. We bouwen aan Corrigo en Nexus Academy.",
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
  name: "Onderwijsbouwen",
  url: SITE_URL,
  logo: `${SITE_URL}/opengraph-image`,
  description: SITE_DESCRIPTION,
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: VESTIGING,
      addressCountry: "NL",
    },
  },
  email: CONTACT_EMAIL,
  sameAs: ["https://corrigo.nl", "https://nexusacademy.nl"],
  subOrganization: [
    {
      "@type": "Organization",
      name: "Corrigo",
      url: "https://corrigo.nl",
      description:
        "AI-nakijktool voor docenten in het voortgezet onderwijs.",
    },
    {
      "@type": "Organization",
      name: "Nexus Academy",
      url: "https://nexusacademy.nl",
      description: "AI-leercoach voor leerlingen en studenten.",
    },
  ],
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
