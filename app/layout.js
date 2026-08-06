import { Bricolage_Grotesque, Manrope, JetBrains_Mono } from "next/font/google";
import "./css/globals.css";
import Navbar from "@/components/Navbar";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import CustomCursor from "@/components/CustomCursor";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-tau-eight-23.vercel.app";

const siteTitle = "Janhavi Sonurkar — Full-Stack Developer × Web3 × AI";
const siteDescription =
  "Full-Stack Developer × Web3 Builder creating digital experiences at the edge of web, blockchain, and AI.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Janhavi Sonurkar",
  },
  description: siteDescription,
  keywords: [
    "Full Stack Developer",
    "Web3 Developer",
    "Blockchain Developer",
    "Next.js",
    "Solidity",
    "AI",
    "Janhavi Sonurkar",
  ],
  authors: [{ name: "Janhavi Sonurkar" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Janhavi Sonurkar Portfolio",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${bricolage.variable} ${jetbrains.variable}`}
    >
      <body className={`${manrope.className} bg-canvas text-ink-muted antialiased`}>
        <BackgroundBlobs />
        <CustomCursor />
        <Navbar />
        <main className="relative min-h-screen">{children}</main>
      </body>
    </html>
  );
}
