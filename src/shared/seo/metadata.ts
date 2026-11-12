import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { getPathname } from "@/shared/i18n/navigation";
import { routing } from "@/shared/i18n/routing";

export const siteUrl = "https://juliacancio.vercel.app";

// Rotas internas, como estão em routing.ts ("/", "/curriculo"...).
export type StaticPathname = keyof typeof routing.pathnames;

const openGraphLocales: Record<Locale, string> = {
  pt: "pt_BR",
  en: "en_US",
};

// Caminho da mesma página em cada idioma, para as tags hreflang.
export function languagePaths(href: StaticPathname) {
  return {
    ...Object.fromEntries(
      routing.locales.map((locale) => [locale, getPathname({ locale, href })]),
    ),
    "x-default": getPathname({ locale: routing.defaultLocale, href }),
  };
}

type PageMetadata = {
  locale: Locale;
  href: StaticPathname;
  title: string;
  description: string;
};

// Título, descrição, URL canônica, hreflang e cartão de compartilhamento.
// Os caminhos são relativos: o metadataBase do layout completa o domínio.
export function buildMetadata({
  locale,
  href,
  title,
  description,
}: PageMetadata): Metadata {
  const path = getPathname({ locale, href });

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: languagePaths(href),
    },
    openGraph: {
      type: "website",
      siteName: "Julia Cancio",
      title,
      description,
      url: path,
      locale: openGraphLocales[locale],
      images: [{ url: "/julia.jpg", alt: "Julia Cancio" }],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: ["/julia.jpg"],
    },
  };
}
