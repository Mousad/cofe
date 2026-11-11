
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SHAHEEN | عارض المنتجات",
  description: "شاشة العرض الرقمية للمنتجات",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
