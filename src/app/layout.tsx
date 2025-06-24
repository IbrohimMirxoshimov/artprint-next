import ReactQueryProvider from "@/components/ReactQueryProvider";
import { Toaster } from "@/components/ui/toaster";
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
  title:
    "ArtPrint - Корпоративная одежда и сувениры с логотипом | Лучшие цены в Узбекистане",
  description:
    "ArtPrint - ведущая компания по изготовлению корпоративной одежды с логотипом в Узбекистане. Футболки, толстовки, кепки, шопперы и другие товары с принтом. Быстро, качественно, выгодно.",
  keywords:
    "корпоративная одежда, печать логотипов, футболки с принтом, толстовки с логотипом, промо продукция Узбекистан",
  openGraph: {
    title:
      "ArtPrint - Корпоративная одежда и сувениры с логотипом | Лучшие цены в Узбекистане",
    description:
      "ArtPrint - ведущая компания по изготовлению корпоративной одежды с логотипом в Узбекистане.",
    url: "https://artprint.vercel.app/",
    type: "website",
  },
  alternates: {
    canonical: "https://artprint.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          {children}
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
