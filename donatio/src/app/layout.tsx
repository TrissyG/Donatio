import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/navigation/Navbar";
import StatusBar from "./_components/navigation/StatusBar";
import { Fredoka } from "next/font/google";

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
      <body className={`${fredoka.className} bg-black`}>
        <div className="border-4 border-black rounded-[58px] w-[413px] h-[872px] absolute left-1/2 -translate-x-1/2 bg-donatio-cream overflow-hidden">
          <StatusBar />
          {children}
          <Navbar />
        </div>
      </body>
    </html>
  );
}
