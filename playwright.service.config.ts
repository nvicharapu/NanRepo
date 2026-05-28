import { defineConfig } from '@playwright/test';
import { createAzurePlaywrightConfig, ServiceOS } from '@azure/playwright';
import { AzureCliCredential } from '@azure/identity';

export default defineConfig(
  createAzurePlaywrightConfig(
    {
      testDir: './tests',
    },
    {
      exposeNetwork: '<loopback>',
      connectTimeout: 3 * 60 * 1000,
      os: ServiceOS.LINUX,
      credential: new AzureCliCredential(),
    }
  )
);
