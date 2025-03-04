import { expect, test } from '@/e2e/axe-test';

const sections = [
  { name: 'Home', id: '#home' },
  { name: 'About', id: '#about' },
  { name: 'Services', id: '#services' },
  { name: 'Contact', id: '#contact' },
];
const pages = ['/legal-notice', '/privacy-policy', '/not-found'];
const colorSchemes = ['dark', 'light'] as const;

for (const colorScheme of colorSchemes) {
  test.describe(`${colorScheme.charAt(0).toUpperCase()}${colorScheme.slice(1)} mode`, () => {
    test.use({ colorScheme });

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

    for (const path of pages) {
      test(`should not have any WCAG A or AA violations on ${path}`, async ({
        page,
        axeBuilder,
      }) => {
        await page.goto(path);
        await page.waitForTimeout(500);

        await page.evaluate(() =>
          window.scrollTo(0, document.body.scrollHeight),
        );
        await page.waitForTimeout(1000);

        const scanResults = await axeBuilder().analyze();
        expect(scanResults.violations).toEqual([]);
      });
    }
  });
}
