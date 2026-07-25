import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orkide Peyzaj | Bahçenizi Yaşam Alanına Dönüştürün",
  description:
    "Ege ve Akdeniz genelinde peyzaj planlama, bahçe düzenleme, otomatik sulama, budama, rulo çim ve periyodik bakım hizmetleri.",
  keywords: [
    "peyzaj",
    "bahçe düzenleme",
    "otomatik sulama",
    "rulo çim",
    "bahçe bakımı",
    "Orkide Peyzaj",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Orkide Peyzaj",
    description: "Doğayı yaşam alanınıza taşıyoruz.",
    images: ["/images/hero-villa.jpg"],
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
