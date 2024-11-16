import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bagosTrialVF = localFont({
  src: "./fonts/BagossTRIALVF.ttf",
  variable: "--bagos-trial",
  weight: "100 900",
});

const sohneBuch = localFont({
  src: "./fonts/Sohne-Buch.otf",
  variable: "--sohne-buch",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Juicebox Test Next App",
  description: "Juicebox Test Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bagosTrialVF.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
