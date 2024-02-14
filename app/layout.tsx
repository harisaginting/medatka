import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });
// Font files can be colocated inside of `pages`
const blanka = localFont({ src: '../fonts/Blanka-Regular.otf' , variable: "--font-blanka"})
const glaciall = localFont({ src: '../fonts/GlacialIndifference-Regular.otf',variable: "--font-glaciall"})
const glaciallBold = localFont({ src: '../fonts/GlacialIndifference-Bold.otf',variable: "--font-glaciall-bold" })

export const metadata: Metadata = {
  title: {
    default: "Medatka",
    template: "Medatka | %s",
  },
  description: "Mengenal Dengan Adat Kita",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${inter.className} ${blanka.variable} ${glaciall.variable} ${glaciallBold.variable}`}>
        <Toaster position="bottom-left" richColors theme="light" />
        {children}
      </body>
    </html>
  );
}
