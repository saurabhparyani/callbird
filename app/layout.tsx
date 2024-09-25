import type { Metadata } from "next";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const workSans = Work_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Callbird - Your favorite meeting scheduler",
  description: "Your schedule, your way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${workSans.className} antialiased`}>
          <Header />
          <main className="bg-gradient-to-b from-gray-100 to-white min-h-screen">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
