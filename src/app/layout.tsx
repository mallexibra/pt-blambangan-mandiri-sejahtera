import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PT Blambangan Mandiri Sejahtera",
  description:
    "Perusahaan yang bergerak di bidang jasa keamanan (security) yang berkomitmen untuk menyediakan layanan keamanan yang andal dan profesional bagi berbagai sektor industri, komersial, dan perumahan.",
  keywords:
    "PT Blambangan Mandiri Sejahtera, jasa keamanan, layanan keamanan, security, industri, komersial, perumahan, profesional",
  openGraph: {
    siteName: "PT Blambangan Mandiri Sejahtera",
    url: "https://www.blambanganmandirisejahtera.com/",
    type: "website",
    images: [
      {
        url: "https://www.blambanganmandirisejahtera.com/logo.png",
      },
    ],
  },
  metadataBase: new URL("https://www.blambanganmandirisejahtera.com/"),
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
