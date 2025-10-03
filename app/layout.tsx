import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import type React from "react";
import { DialogProvider } from "@/context/dialog-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yacine HK | Personal Portfolio",
  description: "Yacine is a full-stack developer with 5 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* Animated background blobs */}
{/* Animated background blobs (cover viewport, fixed) */}
{/* aria-hidden so screen-readers ignore them */}
<div aria-hidden="true" className="site-blob blob-1" />
<div aria-hidden="true" className="site-blob blob-2" />
<div aria-hidden="true" className="site-blob blob-3" />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <DialogProvider>
              <Header />
              {children}
              <Footer />
              <Toaster position="top-right" />
              <ThemeSwitch />
            </DialogProvider>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
