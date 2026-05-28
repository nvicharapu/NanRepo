import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  
  timeout: 30 * 1000,

  retries: 0,

  workers: 1, // Important for Azure stability (avoid parallel issues)

  reporter: [
    ['html', { 
      outputFolder: 'playwright-report',
      open: 'never' // MUST for CI
    }],
    ['json', { 
      outputFile: 'test-results/results.json' 
    }],
    ['junit', { 
      outputFile: 'test-results/results.xml' 
    }]
  ],

  use: {
    headless: true,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',

    actionTimeout: 0,
    navigationTimeout: 30 * 1000,

    ignoreHTTPSErrors: true,
  },

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'] 
      },
    },
  ],

  outputDir: 'test-results/',
});
