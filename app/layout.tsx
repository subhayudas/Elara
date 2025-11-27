import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis";
import { WindowSizeProvider } from "./providers";
import FluidCursorWrapper from "@/components/Client/FluidCursorWrapper";

const BasisGrotesquePro = localFont({
  src: [
    {
      path: "./fonts/BasisGrotesquePro-Light.woff2",
      weight: "300",
    },
    { path: "./fonts/BasisGrotesquePro-Regular.woff2", weight: "400" },
    { path: "./fonts/BasisGrotesquePro-Medium.woff2", weight: "500" },
  ],
  variable: "--font-grotesque",
});

export const metadata: Metadata = {
  title: "Elara Jewelry",
  description: "A premier jewelry company specializing in exquisite fine jewelry, diamonds, and precious gemstones. Crafting timeless elegance for every occasion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${BasisGrotesquePro.variable} antialiased selection:bg-[#ced1bf] selection:text-[#2b3530]`}
        >
          <WindowSizeProvider>
            <FluidCursorWrapper />
            {children}
          </WindowSizeProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
