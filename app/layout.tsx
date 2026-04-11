import type { Metadata } from "next";
import { Baloo_2, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const SITE_URL = "https://swrlfactory.pages.dev";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "SWRL Cinnamon Roll Factory™ | Stuffed Cinnamon Rolls & Franchise",
  description:
    "Stuffed, glazed, ruined — and now franchising. SWRL Cinnamon Roll Factory™ serves handcrafted cinnamon rolls in Charlotte, NC, with territories opening across the South.",
  keywords: [
    "cinnamon rolls",
    "stuffed cinnamon rolls",
    "SWRL",
    "Charlotte NC bakery",
    "cinnamon roll franchise",
    "Oreo cinnamon roll",
    "best cinnamon rolls Charlotte",
  ],
  openGraph: {
    title: "SWRL Cinnamon Roll Factory™ — Life's Too Short for Boring Rolls.",
    description:
      "Stuffed, glazed, ruined — and now franchising. Handcrafted cinnamon rolls from Charlotte, NC.",
    url: SITE_URL,
    type: "website",
    locale: "en_US",
    siteName: "SWRL Cinnamon Roll Factory™",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "SWRL Cinnamon Roll Factory — Life's Too Short for Boring Rolls.",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SWRL Cinnamon Roll Factory™",
    description:
      "Stuffed, glazed, ruined — and now franchising. Handcrafted cinnamon rolls from Charlotte, NC.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${baloo2.variable} ${inter.variable} h-full`}
    >
      <body className="grain-overlay bg-swrl-black text-swrl-white font-body antialiased min-h-full flex flex-col">
        <ScrollProgress />
        <Navbar />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-swrl-pink focus:text-swrl-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
        >
          Skip to content
        </a>
        <div id="main-content" className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
