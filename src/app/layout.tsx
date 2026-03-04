﻿import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/site.config";

export const viewport = {
  themeColor: site.themeColor,
};

export const metadata: Metadata = {
  title: site.metaTitle,
  description: site.metaDescription,
  metadataBase: new URL(site.baseUrl),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-800">
        <header className="border-b">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-2xl font-bold tracking-tighter text-red-600">CONGOMEN</span>
            </Link>
            <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
              <a href="#mission" className="hover:text-red-600">The Mission</a>
              <a 
                href={site.hero.ctaPrimary.href}
                className="px-4 py-2 rounded-md bg-black text-white hover:bg-red-700 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Listen on Spotify
              </a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="py-12 border-t bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-bold text-lg">{site.brand}</p>
            <p className="mt-2 text-gray-500">{site.contact.email}</p>
            <div className="mt-6 flex justify-center gap-6">
              <a href={site.social.instagram} className="text-gray-400 hover:text-red-600">Instagram</a>
            </div>
            <p className="mt-8 text-xs text-gray-400">© {new Date().getFullYear()} {site.brand}. A cry from the heart.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}