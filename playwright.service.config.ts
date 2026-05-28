import { defineConfig } from '@playwright/test';
import { createAzurePlaywrightConfig, ServiceOS } from '@azure/playwright';
import { AzureCliCredential } from '@azure/identity';

export default defineConfig(
  createAzurePlaywrightConfig(
    {
      testDir: './tests',
      reporter: [
        ['html', { open: 'never' }],
        ['@azure/playwright/reporter'],
      ],
    },
    {
      os: ServiceOS.LINUX,
      exposeNetwork: '<loopback>',
      connectTimeout: 3 * 60 * 1000,
      credential: new AzureCliCredential(),
    }
  )
);