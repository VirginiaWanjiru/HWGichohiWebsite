import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "H. W. Gichohi & Company ",
  description: "H.W Gichohi Audit Firm",
  icons: {
    icon: [
      { rel: 'icon', url: '/logo.ico', sizes: '128x128' },
      { rel: 'icon', url: '/logo.ico', sizes: '128x128' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      

      <body className={inter.className}>
        <Navbar/>
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}
