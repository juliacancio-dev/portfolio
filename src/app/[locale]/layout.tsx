import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/shared/i18n/routing";
import { siteUrl } from "@/shared/seo/metadata";
import ThemeProvider from "@/shared/theme/theme-provider";
import "../globals.css";
import SiteFooter from "@/shared/layout/site-footer";
import SiteHeader from "@/shared/layout/site-header";

// Texto e interface.
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

// Títulos: serifada de display, só existe no peso 400.
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

// Rótulos, datas e nomes de tecnologia.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Cada página define título e descrição com buildMetadata.
// O metadataBase transforma os caminhos relativos em URLs completas.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Julia Cancio",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${geist.variable} ${instrumentSerif.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground flex min-h-full flex-col font-sans">
        <ThemeProvider>
          <NextIntlClientProvider>
            <SiteHeader />
            {children}
            <SiteFooter />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
