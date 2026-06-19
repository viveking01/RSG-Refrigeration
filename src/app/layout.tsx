import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "@/lib/metadata";
import { localBusinessSchema, webSiteSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCTABar from "@/components/layout/MobileCTABar";
import { WhatsAppButton, CallButton } from "@/components/layout/FloatingButtons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  ...defaultMetadata,
  metadataBase: new URL(BUSINESS.siteUrl),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const businessSchema = localBusinessSchema();
  const siteSchema = webSiteSchema();

  return (
    <html lang="en-IN" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0B1F66" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileCTABar />
        <WhatsAppButton />
        <CallButton />
      </body>
    </html>
  );
}
