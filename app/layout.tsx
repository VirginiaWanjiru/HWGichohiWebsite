import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from 'next/head';



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "H. W. Gichohi & Company:Top Audit Firm in Kenya, ",
  description: "Top Audit Firm in Kenya , Top Audit Firm in Africa, Best Audit and Accounting Firm in Kenya ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

<Head>
    <link rel="icon" href="/logo.ico"/>
  </Head>
      

      <body className={inter.className}>
        <Navbar/>
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}
