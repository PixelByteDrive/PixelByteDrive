import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Plus_Jakarta_Sans({
  variable: "--font-Plus_Jakarta_Sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PixelByteDrive",
  description: "Just a chill guy making things and having fun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased flex w-full justify-center`}
      >
        <div className="max-w-6xl min-h-screen h-fit border-x-gray-800 flex-col w-full border-x-1 flex border-dashed">
          <div className="p-6 z-10 flex items-center justify-center gap-4 backdrop-blur-lg backdrop-brightness-50 fixed w-full max-w-6xl">
            <Image src="./logo.svg" className="flex-none" alt="Site logo" width={32} height={32}/>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
