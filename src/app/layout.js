import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/providers/AuthProvider"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Care.xyz - Trusted Caregiving Services",
  description: "Find reliable baby care, elderly care, and sick support services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`}
      >
        <AuthProvider>
          <Navbar />
          
          <main className="flex-grow">
            {children}
          </main>

          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}