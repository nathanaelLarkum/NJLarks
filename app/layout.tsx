import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NJLarks — Full-Stack Software Engineer",
    template: "%s | NJLarks",
  },
  description:
    "NJLarks builds fast, modern websites and custom software for businesses of all sizes. Starter sites from £100. Business websites, SaaS, AI integrations, and more.",
  keywords: [
    "web developer",
    "full stack developer",
    "Next.js developer",
    "website design UK",
    "small business website",
    "SaaS development",
    "NJLarks",
  ],
  authors: [{ name: "NJLarks" }],
  creator: "NJLarks",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://njlarks.com",
    siteName: "NJLarks",
    title: "NJLarks — Full-Stack Software Engineer",
    description:
      "Fast, modern websites and custom software for businesses of all sizes. Starter sites from £100.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NJLarks — Full-Stack Software Engineer",
    description:
      "Fast, modern websites and custom software for businesses of all sizes.",
    creator: "@njlarks",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
