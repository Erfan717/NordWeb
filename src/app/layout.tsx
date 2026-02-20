import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NordWeb – Moderne nettsider som gir resultater",
  description:
    "NordWeb bygger raske, sikre og brukervennlige nettsider for bedrifter, startups, organisasjoner og privatpersoner.",
  keywords: [
    "webbyrå",
    "Nettsider",
    "Next.js",
    "SEO",
    "webutvikling",
    "Norge",
  ],
  metadataBase: new URL("https://nordweb.no"),
  openGraph: {
    title: "NordWeb – Moderne nettsider som gir resultater",
    description:
      "Vi bygger moderne, raske og SEO-optimaliserte nettsider som skaper vekst.",
    type: "website",
    locale: "nb_NO",
    url: "https://nordweb.no",
  },
  twitter: {
    card: "summary_large_image",
    title: "NordWeb – Moderne nettsider som gir resultater",
    description:
      "Vi bygger moderne, raske og SEO-optimaliserte nettsider som skaper vekst.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
