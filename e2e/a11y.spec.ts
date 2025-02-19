import { expect, test } from './axe-test';

const sections = [
  { name: 'Home', id: '#home' },
  { name: 'About', id: '#about' },
  { name: 'Services', id: '#services' },
  { name: 'Contact', id: '#contact' },
];

test.describe('Dark mode', () => {
  test('should not have any automatically detectable WCAG A or AA violations', async ({
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

    const scanResults = await axeBuilder().analyze();
    expect(scanResults.violations).toEqual([]);
  });
});
