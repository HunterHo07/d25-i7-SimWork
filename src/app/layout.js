import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

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

export const metadata = {
  title: "SimWork - The Future of Work Training",
  description: "SimWork is an AI-driven, immersive 'future of work' game that transforms how companies train employees and assess candidates.",
};

export default function RootLayout({ children }) {
  // Determine the base path based on environment
  const basePath = process.env.NODE_ENV === 'production' ? '/d25-i7-SimWork' : '';

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Base tag for GitHub Pages */}
        {process.env.NODE_ENV === 'production' && (
          <base href="/d25-i7-SimWork/" />
        )}
        {/* Import CSS and favicon with proper paths */}
        <link rel="icon" href={`${basePath}/favicon.ico`} />
        {/* Add the GitHub Pages router script for client-side routing */}
        <Script src={`${basePath}/gh-pages-router.js`} strategy="beforeInteractive" />
        {/* Add a script to fix any path issues at runtime */}
        <Script id="github-pages-path-fix" strategy="beforeInteractive">
          {`
            (function() {
              // Only run in production
              if (window.location.hostname !== 'hunterho07.github.io') return;

              // Fix for assets that might be missing the basePath
              const basePath = '/d25-i7-SimWork';

              // Patch fetch to add basePath to URLs that start with / but don't include basePath
              const originalFetch = window.fetch;
              window.fetch = function(url, options) {
                if (typeof url === 'string' && url.startsWith('/') && !url.startsWith(basePath) && !url.startsWith('//')) {
                  url = basePath + url;
                }
                return originalFetch.call(this, url, options);
              };
            })();
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-gray-900 via-blue-950 to-black min-h-screen text-white`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
