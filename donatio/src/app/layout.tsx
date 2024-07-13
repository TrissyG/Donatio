import type { Metadata } from "next";
import { Fredoka, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navigation/Navbar";
import StatusBar from "./_components/navigation/StatusBar";
const fredoka = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Donatio",
  description: "Donatio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fredoka.className} `}>
        <div className="border-4 border-black rounded-[58px] w-[413px] h-[872px] absolute left-1/2 -translate-x-1/2 bg-donatio-cream overflow-hidden">
          <StatusBar />
          {children}
          <Navbar />
        </div>
      </body>
    </html>
  );
}
