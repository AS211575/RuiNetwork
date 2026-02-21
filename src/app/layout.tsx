import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ruinet.work"),
  title: "RuiNetwork",
  description: "一个神奇的BGP Network的网站(?",
  openGraph: {
    type: "website",
    title: "RuiNetwork",
    url: "https://ruinet.work",
    description: "一个神奇的BGP Network的网站(?",
    images: [
      {
        url: "https://logo.ruinet.work/ruinetwork-og.png",
        width: 1910,
        height: 1000,
        alt: "RuiNetwork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RuiNetwork",
    description: "一个神奇的BGP Network的网站(?",
    images: ["https://logo.ruinet.work/ruinetwork-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
