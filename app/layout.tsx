import type { Metadata } from "next";
import { Roboto_Flex, Roboto_Slab } from "next/font/google";
// import CriticalStyles from "./components/CriticalStyles";
import "./globals.css";
import "./tailwind.css";

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Jyothish Vardhan Gompa",
  description: "Personal portfolio showcasing my work as a Product Designer and Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoFlex.variable} ${robotoSlab.variable} antialiased`}
      >
        {/* <CriticalStyles /> */}
        {children}
      </body>
    </html>
  );
}
