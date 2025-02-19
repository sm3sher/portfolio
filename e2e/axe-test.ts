import { test as base } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

type AxeFixture = {
  axeBuilder: () => AxeBuilder;
};

export const test = base.extend<AxeFixture>({
  axeBuilder: async ({ page }, use) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
