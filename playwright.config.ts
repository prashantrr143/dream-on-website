import { defineConfig, devices } from '@playwright/test'

/**
 * Browser tests run against a production build (`pnpm build` first).
 * Set PLAYWRIGHT_BASE_URL to test an already-running server instead.
 */
const PORT = 3111
const baseURL = process.env['PLAYWRIGHT_BASE_URL'] ?? `http://localhost:${PORT}`

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'list',
  use: { baseURL, trace: 'retain-on-failure' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  ...(process.env['PLAYWRIGHT_BASE_URL']
    ? {}
    : { webServer: { command: `pnpm start -p ${PORT}`, url: baseURL, reuseExistingServer: true } }),
})
