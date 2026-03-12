import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site";
import { getAllProjects } from "@/lib/projects";
import { SiteSidebar } from "@/components/site-sidebar";

const sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const projects = getAllProjects();

  return (
    <html lang="zh-CN">
      <body className={`${sans.variable} bg-paper text-ink antialiased`}>
        <div className="min-h-screen md:grid md:grid-cols-[314px_1fr]">
          <SiteSidebar projects={projects} />
          <main className="min-h-screen">{children}</main>
        </div>
      </body>
    </html>
  );
}