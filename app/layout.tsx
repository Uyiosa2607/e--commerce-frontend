import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/items/navbar";
import Footer from "@/components/items/footer";
export const metadata: Metadata = {
  title: "Home",
  description: "e-Commerce Tea Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="overflow-x-hidden" lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
