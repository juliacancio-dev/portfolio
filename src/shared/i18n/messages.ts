import homeEn from "@/features/home/messages/en.json";
import homePt from "@/features/home/messages/pt.json";
import sharedEn from "@/shared/messages/en.json";
import sharedPt from "@/shared/messages/pt.json";

// Cada fatia traz os próprios textos; aqui eles viram um namespace.
const pt = {
  Home: homePt,
  Shared: sharedPt,
};

export type Messages = typeof pt;

// Tipado como Messages: se faltar uma chave em inglês, o typecheck acusa.
const en: Messages = {
  Home: homeEn,
  Shared: sharedEn,
};

export const messages = { pt, en };
