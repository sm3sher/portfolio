import AxeBuilder from '@axe-core/playwright';
import { test as base } from '@playwright/test';

type AxeFixture = {
  axeBuilder: () => AxeBuilder;
};

export const test = base.extend<AxeFixture>({
  axeBuilder: async ({ page }, use) => {
    await use(() =>
      new AxeBuilder({ page }).withTags([
        'wcag2a',
        'wcag2aa',
        'wcag21a',
        'wcag21aa',
      ]),
    );
  },
});

export { expect } from '@playwright/test';
