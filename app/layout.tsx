import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const technor = localFont({
  src: [
    {
      path: "../public/assets/fonts/Technor-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Technor-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Technor-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Technor-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-technor",
});

export const metadata: Metadata = {
  title: "Prajjwal Saggar | Full Stack Developer",
  description: "Portfolio of Prajjwal Saggar, Full Stack Developer & Java Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${technor.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
