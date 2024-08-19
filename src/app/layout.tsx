import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <Head>
        <meta name="X-UA-Compatible" content="IE=edge" />
        <meta
          name="keywords"
          content="PT Blambangan Mandiri Sejahtera, Advokat, Pengacara, Layanan Hukum, Konsultasi Hukum"
        />
        <meta
          name="description"
          content="PT Blambangan Mandiri Sejahtera adalah perusahaan yang bergerak di bidang advokat dan layanan hukum, berkomitmen untuk memberikan konsultasi dan layanan hukum terbaik."
        />
        <meta
          property="og:site_name"
          content="PT Blambangan Mandiri Sejahtera"
        />
        <meta property="og:url" content="https://blambanganmandiri.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://blambanganmandiri.com/logo.png"
        />
        <title>PT Blambangan Mandiri Sejahtera</title>
      </Head>
      <body>{children}</body>
    </html>
  );
}
