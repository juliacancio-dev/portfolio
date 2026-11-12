import type { MetadataRoute } from "next";
import { getPathname } from "@/shared/i18n/navigation";
import { routing } from "@/shared/i18n/routing";
import {
  languagePaths,
  siteUrl,
  type StaticPathname,
} from "@/shared/seo/metadata";

// Uma entrada por página e por idioma, gerada a partir de routing.ts.
export default function sitemap(): MetadataRoute.Sitemap {
  const pathnames = Object.keys(routing.pathnames) as StaticPathname[];

  return pathnames.flatMap((href) =>
    routing.locales.map((locale) => ({
      url: siteUrl + getPathname({ locale, href }),
      alternates: {
        languages: Object.fromEntries(
          Object.entries(languagePaths(href)).map(([language, path]) => [
            language,
            siteUrl + path,
          ]),
        ),
      },
    })),
  );
}
