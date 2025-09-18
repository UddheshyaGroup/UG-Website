import type React from "react";
import type { Metadata } from "next";
import { Mona_Sans as FontSans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LoadingScreen from "@/components/loading-screen";
import { ThemeProvider } from "@/components/theme-provider";
import { OrganizationSchema } from "@/components/schema-markup";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "UDDHESHYA GROUP – Best Digital Marketing Platform in Nepal | SEO, Social Media Marketing Kathmandu",
  description:
    "UDDHESHYA GROUP is the best digital marketing platform in Nepal, helping businesses in Kathmandu, Banepa, and across the country grow via SEO, social media marketing, branding, and web development. Leading digital marketing agency in Nepal.",
  keywords:
    "best digital marketing platform in Nepal, digital marketing agency Nepal, SEO Nepal, social media marketing Kathmandu, digital marketing services Nepal, top digital marketing agency Nepal, leading digital marketing firm Kathmandu, Nepali businesses marketing, local businesses Nepal, digital advertising Nepal",
  authors: [{ name: "UDDHESHYA GROUP" }],
  creator: "UDDHESHYA GROUP",
  publisher: "UDDHESHYA GROUP",
  generator: "Next.js",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://uddheshyagroup.com",
    title: "UDDHESHYA GROUP – Best Digital Marketing Platform in Nepal",
    description: "Leading digital marketing agency in Nepal helping businesses grow with SEO, social media marketing, and branding services in Kathmandu and across Nepal.",
    siteName: "UDDHESHYA GROUP",
  },
  twitter: {
    card: "summary_large_image",
    title: "UDDHESHYA GROUP – Best Digital Marketing Platform in Nepal",
    description: "Leading digital marketing agency in Nepal helping businesses grow with SEO, social media marketing, and branding services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="short.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${fontSans.variable} font-sans antialiased cursor-premium`}
      >
        <OrganizationSchema />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingScreen />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
