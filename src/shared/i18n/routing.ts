import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt", "en"],
  defaultLocale: "pt",
  // A pasta em app/ se chama "curriculo"; em inglês a URL vira /en/resume.
  pathnames: {
    "/": "/",
    "/curriculo": {
      pt: "/curriculo",
      en: "/resume",
    },
  },
});
