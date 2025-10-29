import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const siteUrl = "https://cal-cpn.vercel.app/";

export const metadata: Metadata = {
 
  metadataBase: new URL(siteUrl),

  title: {
    template: "%s", 
    default: "Cal-Cpn: Accurate CPN Calculator for University Admissions", 
  },

  description:
    "Free and accurate CPN (Composite Percentage Number) calculator for students. Instantly calculate your aggregate score for university admissions in Pakistan.",

  keywords: [
    "CPN calculator",
    "aggregate calculator",
    "university admissions",
    "CPN formula",
    "Cal-Cpn",
    "calculate CPN",
    "Pakistan university",
    "aggregate score",
  ],

  // For search engine crawlers
  robots: {
    index: true,
    follow: true,
  },


  openGraph: {
    title: "Cal-Cpn: Accurate CPN Calculator",
    description:
      "Instantly calculate your CPN (Composite Percentage Number) for university admissions.",
    url: siteUrl,
    siteName: "Cal-Cpn",
  
    images: [
      {
        url: "/og-image.png", // Path relative to /public
        width: 1200,
        height: 630,
        alt: "Cal-Cpn CPN Calculator",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Cal-Cpn: Accurate CPN Calculator",
    description:
      "Instantly calculate your CPN (Composite Percentage Number) for university admissions.",
    // !! IMPORTANT: Use the same /og-image.png
    images: ["/og-image.png"],
    // Optional: Add your Twitter handle
    // creator: "@yourTwitterHandle",
  },
};

// --- Layout Component ---

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Navbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
