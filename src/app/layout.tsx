import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import ProviderWrapper from "@/components/Providers/provider-wrapper";
import Footer from "@/components/layout/footer";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rapha Codes",
  description: "Construindo, quebrando e reinventando código.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={` ${geistMono.variable} antialiased`}>
        <ProviderWrapper>
          {children}
          <Footer />
        </ProviderWrapper>
      </body>
    </html>
  );
}
