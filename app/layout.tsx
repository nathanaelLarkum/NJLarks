import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NJLarks — Software Studio",
    template: "%s | NJLarks",
  },
  description:
    "NJLarks builds fast, modern software — from affordable business websites to custom SaaS platforms, admin dashboards, payment systems and AI-powered tools.",
  keywords: [
    "software development",
    "Next.js developer UK",
    "SaaS development",
    "web design UK",
    "business websites",
    "admin dashboards",
    "AI integration",
    "NJLarks",
  ],
  authors: [{ name: "NJLarks" }],
  creator: "NJLarks",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://njlarks.com",
    siteName: "NJLarks",
    title: "NJLarks — Software Studio",
    description:
      "From affordable business websites to custom SaaS platforms, admin dashboards, payment systems and AI-powered tools.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NJLarks — Software Studio",
    description:
      "From affordable business websites to custom SaaS platforms and AI-powered tools.",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${manrope.variable} ${inter.variable} ${geistMono.variable} font-sans antialiased bg-dark1 text-light1`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
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
