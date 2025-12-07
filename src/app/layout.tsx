import type { Metadata } from "next";
import { Urbanist, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MM Auto | Premium Vehicles in Bulgaria",
  description: "MM Auto - Your trusted partner for premium used vehicles in Bulgaria. 360+ cars in stock, leasing options, and expert service since 2005.",
  keywords: ["MM Auto", "cars Bulgaria", "used cars Sofia", "premium vehicles", "car dealership", "MM Group"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body
        className={`${urbanist.variable} ${dmSans.variable} antialiased bg-[#0a0a0f] text-white`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ChatAssistant />
      </body>
    </html>
  );
}
