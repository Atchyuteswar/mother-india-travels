import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton"; // Use @ alias if possible, or "./" works too

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Update this to match the client's brand
export const metadata: Metadata = {
  title: "Mother India Travels | Cultural Immersion & Personalized Trips",
  description: "Experience India not just by seeing, but by living it. Curated group trips and personalized itineraries by Leo & Tanu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
        {/* Add the button here so it floats on top of all pages */}
        <WhatsAppButton /> 
      </body>
    </html>
  );
}