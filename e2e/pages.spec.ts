import { expect, test } from "@playwright/test";

test("o currículo abre nos dois idiomas, cada um com a sua URL", async ({
  page,
}) => {
  await page.goto("/pt/curriculo");
  await expect(
    page.getByRole("heading", { level: 2, name: "Experiência" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "Mudar o idioma para inglês" }).click();

  await expect(page).toHaveURL(/\/en\/resume$/);
  await expect(
    page.getByRole("heading", { level: 2, name: "Experience" }),
  ).toBeVisible();
});

test("o card do CashTrail leva ao estudo de caso", async ({ page }) => {
  await page.goto("/pt");

  await page
    .getByRole("article", { name: "CashTrail" })
    .getByRole("link", { name: "Estudo de caso" })
    .click();

  await expect(page).toHaveURL(/\/pt\/projetos\/cashtrail$/);
  await expect(
    page.getByRole("heading", { level: 1, name: "CashTrail" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 2, name: "Desafios e como resolvi" }),
  ).toBeVisible();
});

test("o estudo de caso do CoreManager abre em inglês", async ({ page }) => {
  await page.goto("/en/projects/coremanager");

  await expect(
    page.getByRole("heading", { level: 1, name: "CoreManager" }),
  ).toBeVisible();
  await expect(page).toHaveTitle("CoreManager: case study | Julia Cancio");
});

test("cada página tem URL canônica e hreflang", async ({ page }) => {
  await page.goto("/en/resume");

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    /\/en\/resume$/,
  );
  await expect(
    page.locator('link[rel="alternate"][hreflang="pt"]'),
  ).toHaveAttribute("href", /\/pt\/curriculo$/);
});
