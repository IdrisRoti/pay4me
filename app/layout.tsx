import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });
const inter = Inter({ subsets: ["latin"], weight: ["800"] });

export const metadata: Metadata = {
  title: "Pay4me landing page challenge",
  description: "Pay4me website landing page challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
