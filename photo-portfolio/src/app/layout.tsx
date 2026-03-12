import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/content/site";

const sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const serif = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.artistName} | Photography`,
    template: `%s | ${siteConfig.artistName}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.artistName} | Photography`,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.artistName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.artistName} | Photography`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${sans.variable} ${serif.variable} bg-paper text-ink antialiased`}>
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 md:px-12">
          <SiteHeader />
          <main className="flex-1 pb-20">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}