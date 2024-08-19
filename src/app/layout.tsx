import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PT Blambangan Mandiri Sejahtera",
  description:
    "PT Blambangan Mandiri Sejahtera adalah perusahaan yang bergerak di bidang advokat dan layanan hukum, berkomitmen untuk memberikan konsultasi dan layanan hukum terbaik.",
  keywords:
    "PT Blambangan Mandiri Sejahtera, Advokat, Pengacara, Layanan Hukum, Konsultasi Hukum",
  openGraph: {
    siteName: "PT Blambangan Mandiri Sejahtera",
    url: "https://blambanganmandiri.com/",
    type: "website",
    images: [
      {
        url: "https://blambanganmandiri.com/logo.png",
      },
    ],
  },
  metadataBase: new URL("https://blambanganmandiri.com/"),
  other: {
    "X-UA-Compatible": "IE=edge",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
