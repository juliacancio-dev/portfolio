import { expect, test } from "@playwright/test";

test("a raiz leva para a home em português", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveURL(/\/pt$/);
  await expect(
    page.getByRole("heading", { level: 1, name: "Julia Cancio" }),
  ).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("lang", "pt");
});

test("o menu leva até a seção Projetos", async ({ page }) => {
  await page.goto("/pt");

  await page
    .getByRole("navigation", { name: "Navegação principal" })
    .getByRole("link", { name: "Projetos" })
    .click();

  await expect(page).toHaveURL(/#projects$/);
  await expect(
    page.getByRole("heading", { level: 2, name: "Projetos" }),
  ).toBeInViewport();
});

test("o botão de idioma troca para inglês", async ({ page }) => {
  await page.goto("/pt");

  await page.getByRole("link", { name: "Mudar o idioma para inglês" }).click();

  await expect(page).toHaveURL(/\/en$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(
    page.getByRole("heading", { level: 2, name: "About me" }),
  ).toBeVisible();
});

test("o botão de tema alterna entre claro e escuro", async ({ page }) => {
  await page.goto("/pt");
  const html = page.locator("html");
  const toggle = page.getByRole("button", {
    name: "Alternar entre tema claro e escuro",
  });

  await expect(html).toHaveAttribute("data-theme", "light");
  await toggle.click();
  await expect(html).toHaveAttribute("data-theme", "dark");
  await toggle.click();
  await expect(html).toHaveAttribute("data-theme", "light");
});

test.describe("celular", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("o menu abre, navega e fecha", async ({ page }) => {
    await page.goto("/pt");

    await page.getByRole("button", { name: "Abrir o menu" }).click();
    const menu = page.getByRole("navigation", { name: "Navegação principal" });
    await expect(menu).toBeVisible();

    await menu.getByRole("link", { name: "Contato" }).click();

    await expect(page).toHaveURL(/#contact$/);
    await expect(menu).toBeHidden();
  });

  test("Esc fecha o menu", async ({ page }) => {
    await page.goto("/pt");

    await page.getByRole("button", { name: "Abrir o menu" }).click();
    await page.keyboard.press("Escape");

    await expect(
      page.getByRole("button", { name: "Abrir o menu" }),
    ).toBeFocused();
  });
});
