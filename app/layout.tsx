import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // <--- INI YANG BIKIN TAILWIND JALAN

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio Noor Aziz",
  description: "Website portofolio pribadi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}