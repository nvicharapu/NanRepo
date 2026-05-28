import { defineConfig, PlaywrightTestConfig } from '@playwright/test';
import { createAzurePlaywrightConfig, ServiceOS } from '@azure/playwright';
import { DefaultAzureCredential } from '@azure/identity';

const baseConfig: PlaywrightTestConfig = {
  testDir: './tests',
  reporter: [
    ['html', { open: 'never' }],
    ['@azure/playwright/reporter'],
  ],
};

export default defineConfig(
  baseConfig,
  createAzurePlaywrightConfig(baseConfig, {
    os: ServiceOS.LINUX,
    exposeNetwork: '<loopback>',
    connectTimeout: 3 * 60 * 1000,
    credential: new DefaultAzureCredential(),
  })
);