import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  // Fail build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,
  // Retry on CI only
  retries: process.env.CI ? 2 : 0,
  // Opt out of parallel tests on CI
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    // Base URL to use in actions like `await page.goto('/')`
    baseURL: 'http://127.0.0.1:3000',
    // Collect trace when retrying the failed test, see https://playwright.dev/docs/trace-viewer
    trace: 'on-first-retry',
    locale: 'en-US',
    colorScheme: 'dark',
  },
  // Run local dev server before starting tests
  webServer: {
    command: 'npm run dev:mock',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
});
