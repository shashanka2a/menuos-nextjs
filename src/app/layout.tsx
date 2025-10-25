import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MenuPro - Restaurant Ordering System",
  description: "Discover deliciousness with our modern restaurant ordering system. Scan, browse, and order instantly.",
  keywords: ["restaurant", "ordering", "menu", "food", "delivery", "dining"],
  authors: [{ name: "MenuPro Team" }],
  icons: {
    icon: "/menupro-logo.svg",
    shortcut: "/menupro-logo.svg",
    apple: "/menupro-logo.svg",
  },
  openGraph: {
    title: "MenuPro - Restaurant Ordering System",
    description: "Discover deliciousness with our modern restaurant ordering system. Scan, browse, and order instantly.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/menupro-logo.svg",
        width: 198,
        height: 191,
        alt: "MenuPro Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MenuPro - Restaurant Ordering System",
    description: "Discover deliciousness with our modern restaurant ordering system. Scan, browse, and order instantly.",
    images: ["/menupro-logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
