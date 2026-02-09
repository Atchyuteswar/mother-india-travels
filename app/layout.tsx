import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mother India Travels",
  description: "Experience the soul of India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#F4EBD9] text-[#4A3B32] font-body">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}