import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ThemeProvider from "@/src/components/layout/ThemeProvider";
import TopNavbar from "@/src/components/layout/TopNavbar";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Initiate | Internship & Project Assistance Platform",
  description: "India's Leading Internship & Development Assistance Platform. Gain real experience, build real projects, and get hired faster with our comprehensive internship programs and project assistance services.",
  keywords: "internship, project assistance, web development, app development, software development, career guidance, mentorship, practical learning, job placement, ₹799 project help",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
        suppressHydrationWarning
      >
        <Providers>
          <ThemeProvider>
            <TopNavbar />
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}