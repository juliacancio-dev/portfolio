"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/shared/i18n/navigation";
import { sections } from "./sections";

export default function MobileMenu() {
  const t = useTranslations("Shared.Header");
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Esc fecha o menu e devolve o foco ao botão.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? t("closeMenu") : t("openMenu")}
        className="border-border text-muted hover:border-foreground hover:text-foreground border p-2 transition-colors"
      >
        <svg
          className="size-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {/* Fica abaixo do cabeçalho (h-16), que é sticky e serve de referência. */}
      <nav
        id="mobile-menu"
        aria-label={t("navLabel")}
        hidden={!open}
        className="border-border bg-background absolute inset-x-0 top-16 border-b"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-6 py-6">
          {sections.map((section) => (
            <li key={section}>
              <Link
                href={{ pathname: "/", hash: section }}
                onClick={() => setOpen(false)}
                className="hover:text-primary block py-2 font-serif text-3xl transition-colors"
              >
                {t(section)}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/curriculo"
              onClick={() => setOpen(false)}
              className="hover:text-primary block py-2 font-serif text-3xl transition-colors"
            >
              {t("resume")}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
