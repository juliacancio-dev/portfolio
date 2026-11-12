import { defineConfig, devices } from "@playwright/test";

// Porta própria, para não disputar com o `npm run dev` na 3000.
const port = 3100;
const baseURL = `http://localhost:${port}`;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  // Poucos navegadores ao mesmo tempo: com 6, a máquina ficou sem recursos.
  workers: 2,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  expect: { timeout: 10_000 },
  use: {
    baseURL,
    // O proxy escolhe o idioma pelo navegador; os testes partem do português.
    locale: "pt-BR",
    colorScheme: "light",
    trace: "on-first-retry",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  // Os testes rodam contra o build de produção: o servidor de dev compila
  // cada página sob demanda e deixa os testes lentos e instáveis.
  // No CI o build já foi feito pelo passo anterior.
  webServer: {
    command: process.env.CI
      ? `npm run start -- -p ${port}`
      : `npm run build && npm run start -- -p ${port}`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
