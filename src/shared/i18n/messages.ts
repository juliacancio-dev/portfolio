import aboutEn from "@/features/about/messages/en.json";
import aboutPt from "@/features/about/messages/pt.json";
import homeEn from "@/features/home/messages/en.json";
import homePt from "@/features/home/messages/pt.json";
import projectsEn from "@/features/projects/messages/en.json";
import projectsPt from "@/features/projects/messages/pt.json";
import stackEn from "@/features/stack/messages/en.json";
import stackPt from "@/features/stack/messages/pt.json";
import sharedEn from "@/shared/messages/en.json";
import sharedPt from "@/shared/messages/pt.json";

// Cada fatia traz os próprios textos; aqui eles viram um namespace.
const pt = {
  About: aboutPt,
  Home: homePt,
  Projects: projectsPt,
  Shared: sharedPt,
  Stack: stackPt,
};

export type Messages = typeof pt;

// Tipado como Messages: se faltar uma chave em inglês, o typecheck acusa.
const en: Messages = {
  About: aboutEn,
  Home: homeEn,
  Projects: projectsEn,
  Shared: sharedEn,
  Stack: stackEn,
};

export const messages = { pt, en };
