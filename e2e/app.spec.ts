import { test } from 'next/dist/experimental/testmode/playwright/msw.js';
import server from '@/e2e/mock-server';

const expect = test.expect;

test.beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
test.afterEach(() => server.resetHandlers());
test.afterAll(() => server.close());

test.describe('Navbar tests', () => {
  test('should switch language via dropdown', async ({ page, browserName }) => {
    await page.goto('/');

    await expect(page).toHaveURL('/en');
    await expect(
      page.getByRole('heading', { name: "I'm Roman Jumatov" }),
    ).toBeVisible();

    await page.getByRole('button', { name: 'Select language' }).hover();
    await expect(
      page.getByRole('menu', { name: 'Select language' }),
    ).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'English' })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'German' })).toBeVisible();

    await page.getByRole('menuitem', { name: 'German' }).click();

    await expect(page).toHaveURL('/de');
    await expect(
      page.getByRole('heading', { name: 'Ich bin Roman Jumatov' }),
    ).toBeVisible();

    // msw fails to intercept server requests after page reload in WebKit
    if (browserName === 'webkit') return;
    await page.reload();

    await expect(page).toHaveURL('/de');
    await expect(
      page.getByRole('heading', { name: 'Ich bin Roman Jumatov' }),
    ).toBeVisible();
  });

  test('should navigate to About section from header menu', async ({
    page,
  }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'About' }).click();

    await expect(page).toHaveURL('/en#about');
    await expect(page.locator('#about')).toBeInViewport();
    await expect(page.getByRole('heading', { name: 'About me' })).toBeVisible();
  });

  test('should switch between light and dark mode', async ({
    page,
    browserName,
  }) => {
    await page.goto('/');

    const initialMode = await page.evaluate(() =>
      document.documentElement.classList.contains('dark'),
    );
    expect(initialMode).toBe(true);

    await page.getByRole('button', { name: 'Toggle theme' }).click();

    const darkMode = await page.evaluate(() =>
      document.documentElement.classList.contains('dark'),
    );
    expect(darkMode).toBe(false);

    // msw fails to intercept server requests after page reload in WebKit
    if (browserName === 'webkit') return;
    await page.reload();

    const persistentMode = await page.evaluate(() =>
      document.documentElement.classList.contains('dark'),
    );
    expect(persistentMode).toBe(false);

    await page.getByRole('button', { name: 'Toggle theme' }).click();
    const toggledBack = await page.evaluate(() =>
      document.documentElement.classList.contains('dark'),
    );
    expect(toggledBack).toBe(true);
  });
});
