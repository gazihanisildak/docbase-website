import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDictionary, Locale, locales } from "@/lib/dictionaries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = (locales.includes(locale as Locale) ? locale : "en") as Locale;
  const dict = await getDictionary(validLocale);

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    keywords: [
      "document management",
      "document scanner",
      "OCR",
      "GDPR compliant",
      "Germany",
      "paperless",
      "digital documents",
    ],
    authors: [{ name: "Docbase" }],
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      type: "website",
      locale: validLocale === "de" ? "de_DE" : "en_US",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = (locales.includes(locale as Locale) ? locale : "en") as Locale;
  const dict = await getDictionary(validLocale);

  return (
    <html lang={validLocale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header dict={dict} locale={validLocale} />
        <main className="flex-1">{children}</main>
        <Footer dict={dict} locale={validLocale} />
      </body>
    </html>
  );
}
