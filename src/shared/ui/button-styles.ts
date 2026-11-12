// Classes dos botões, compartilhadas entre a home, os estudos de caso e o currículo.

const base =
  "group inline-flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors";

// Ação principal: tinta cheia, vira a cor de destaque no hover.
export const buttonPrimary = `${base} bg-foreground text-background hover:bg-primary hover:text-primary-foreground`;

// Ação secundária: só o contorno.
export const buttonSecondary = `${base} border-foreground/25 hover:border-foreground border`;
