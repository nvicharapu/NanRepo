import { defineConfig } from '@playwright/test';
import { createAzurePlaywrightConfig, ServiceOS } from '@azure/playwright';
import { AzureCliCredential } from '@azure/identity';

export default defineConfig(
  createAzurePlaywrightConfig(
    {
      testDir: './tests',

      // ✅ add reporter here ONLY
      reporter: [
        ['html', { open: 'never' }],
        ['@azure/playwright/reporter'],
      ],

      // ✅ NO browser config
      // ✅ NO projects
      // ✅ NO use: { browserName: ... }
    },
    {
      os: ServiceOS.LINUX,
      exposeNetwork: '<loopback>',
      connectTimeout: 3 * 60 * 1000,
      credential: new AzureCliCredential(),
    }
  )
);
