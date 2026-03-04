﻿import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/site.config";

export const viewport = {
  themeColor: site.themeColor,
};


export const metadata: Metadata = {
  title: site.metaTitle,
  description: site.metaDescription,
  openGraph: {
    title: site.metaTitle,
    description: site.metaDescription,
    url: site.baseUrl,
    siteName: site.brand,
    images: [{ url: "/og.jpg" }],
  },
  metadataBase: new URL(site.baseUrl),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased text-gray-800">
        {/* Header */}
        <header className="border-b">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/templates/photography-logo.svg"
                alt={site.brand}
                width={150}
                height={50}
                priority
                className="h-12 w-auto"
              />
              <span className="sr-only">{site.brand}</span>
            </Link>

            <nav className="hidden sm:flex items-center gap-6 text-sm">
              <a href="#portfolio" className="hover:opacity-80">Portfolio</a>
              <a href="#services" className="hover:opacity-80">Services</a>
              <a href="#why" className="hover:opacity-80">Why Us</a>
              <a
                className="px-3 py-1.5 rounded-md bg-black text-white hover:opacity-90"
                href={`https://wa.me/${site.contact.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="py-8 border-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} {site.brand}</p>
            <div className="flex items-center gap-4">
              <a href={site.social?.instagram} className="hover:opacity-80">Instagram</a>
              <a href={site.social?.facebook} className="hover:opacity-80">Facebook</a>
              <a href={site.social?.tiktok} className="hover:opacity-80">TikTok</a>
              <a href={site.social?.twitter} className="hover:opacity-80">X</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
