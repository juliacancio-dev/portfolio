import type { Messages } from "@/shared/i18n/messages";
import type { routing } from "@/shared/i18n/routing";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: Messages;
  }
}
