import { Inter, Space_Grotesk } from "next/font/google";
import "./css/globals.css";
import Navbar from "@/components/Navbar";
import BackgroundBlobs from "@/components/BackgroundBlobs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-tau-eight-23.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Janhavi Sonurkar | Full Stack & Blockchain Developer",
    template: "%s | Janhavi Sonurkar",
  },
  description:
    "Portfolio of Janhavi Sonurkar — Full Stack & Blockchain Developer building modern web apps and Web3 experiences. Open to Full Stack, Blockchain, and Web3 roles.",
  keywords: [
    "Full Stack Developer",
    "Blockchain Developer",
    "Web3",
    "Next.js",
    "Solidity",
    "Janhavi Sonurkar",
  ],
  authors: [{ name: "Janhavi Sonurkar" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Janhavi Sonurkar Portfolio",
    title: "Janhavi Sonurkar | Full Stack & Blockchain Developer",
    description:
      "Full Stack & Blockchain Developer building production-ready web apps and on-chain experiences. Open to Full Stack, Blockchain, and Web3 roles.",
    images: [
      {
        url: "/hero-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Janhavi Sonurkar — Full Stack & Blockchain Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Janhavi Sonurkar | Full Stack & Blockchain Developer",
    description:
      "Full Stack & Blockchain Developer building production-ready web apps and on-chain experiences.",
    images: ["/hero-photo.jpg"],
  },
  // Favicon is provided by app/favicon.ico (App Router file convention)
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} bg-canvas text-ink-muted antialiased`}>
        <BackgroundBlobs />
        <Navbar />
        <main className="relative min-h-screen">{children}</main>
      </body>
    </html>
  );
}
