import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://koalabro.co"),
  title: {
    default: "Koala Brothers — Personal Agent OS for the One-Person Company",
    template: "%s · Koala Brothers",
  },
  description:
    "Koala Brothers is an AI studio building a Personal Agent OS — runtime, memory, channels, crew and brief — for the era of solo founders.",
  applicationName: "Koala Brothers",
  authors: [{ name: "Koala Brothers LLC" }],
  keywords: [
    "AI studio",
    "Personal Agent OS",
    "solo founder",
    "one-person company",
    "AI tools",
  ],
  openGraph: {
    type: "website",
    title: "Koala Brothers — Personal Agent OS",
    description:
      "An AI studio building the Personal Agent OS for the one-person company era.",
    url: "https://koalabro.co",
    siteName: "Koala Brothers",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
