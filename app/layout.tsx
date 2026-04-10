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

export const metadata: Metadata = {
  title: "SWRL Cinnamon Roll Factory™ | Stuffed Cinnamon Rolls & Franchise",
  description:
    "SWRL Cinnamon Roll Factory™ serves warm, stuffed cinnamon rolls in Charlotte, NC. From Oreo Stuff'd to Cherry Cobbler, every roll is handcrafted daily. Explore our menu, locations, and franchise opportunities.",
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
    title: "SWRL Cinnamon Roll Factory™ | Stuffed Cinnamon Rolls",
    description:
      "Handcrafted stuffed cinnamon rolls baked fresh daily in Charlotte, NC. Now franchising.",
    type: "website",
    locale: "en_US",
    siteName: "SWRL Cinnamon Roll Factory™",
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
