import type { Metadata } from "next";
import { Poppins } from "./fonts";
import { staticMetadata } from "./utils/siteStaticMetadata";
import "./globals.css";

export const metadata: Metadata = staticMetadata;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${Poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
