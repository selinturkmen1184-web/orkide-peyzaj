import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "orkide-peyzaj-studio.selin-t-rkme-6680.chatgpt.site";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") || host.startsWith("127.0.0.1")
      ? "http"
      : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
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
      images: [
        {
          url: `${origin}/og.png`,
          width: 1672,
          height: 941,
          alt: "Akdeniz dokusuyla tasarlanmış Orkide Peyzaj bahçesi",
        },
      ],
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Orkide Peyzaj",
      description: "Doğayı yaşam alanınıza taşıyoruz.",
      images: [`${origin}/og.png`],
    },
  };
}

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
