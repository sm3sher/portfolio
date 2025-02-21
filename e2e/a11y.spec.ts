import { expect, test } from './axe-test';

const sections = [
  { name: 'Home', id: '#home' },
  { name: 'About', id: '#about' },
  { name: 'Services', id: '#services' },
  { name: 'Contact', id: '#contact' },
];
const pages = ['/legal-notice', '/privacy-policy', '/not-found'];

test.describe('Dark mode', () => {
  test('should not have any WCAG A or AA violations on main page navigation', async ({
    page,
    axeBuilder,
  }) => {
    await page.goto('/');

    for (const { name, id } of sections) {
      await page.getByRole('link', { name, exact: true }).click();
      await expect(page.locator(id)).toBeInViewport();
      await page.waitForTimeout(500);
    }

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);

    const scanResults = await axeBuilder().analyze();
    expect(scanResults.violations).toEqual([]);
  });

  pages.forEach((path) =>
    test(`should not have any WCAG A or AA violations on ${path}`, async ({
      page,
      axeBuilder,
    }) => {
      await page.goto(path);
      await page.waitForTimeout(500);

      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      const scanResults = await axeBuilder().analyze();
      expect(scanResults.violations).toEqual([]);
    }),
  );
});

test.describe('Light mode', () => {
  test.use({ colorScheme: 'light' });

  test('should not have any WCAG A or AA violations on main page navigation', async ({
    page,
    axeBuilder,
  }) => {
    await page.goto('/');

    for (const { name, id } of sections) {
      await page.getByRole('link', { name, exact: true }).click();
      await expect(page.locator(id)).toBeInViewport();
      await page.waitForTimeout(500);
    }

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);

    const scanResults = await axeBuilder().analyze();
    expect(scanResults.violations).toEqual([]);
  });

  pages.forEach((path) =>
    test(`should not have any WCAG A or AA violations on ${path}`, async ({
      page,
      axeBuilder,
    }) => {
      await page.goto(path);
      await page.waitForTimeout(500);

      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      const scanResults = await axeBuilder().analyze();
      expect(scanResults.violations).toEqual([]);
    }),
  );
});
