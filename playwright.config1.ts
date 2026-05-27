import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  retries: 1,
  timeout: 30000,
  expect: {
    timeout: 5000
  },
 /*
  use: {
  
    browserName: 'chromium',
      headless: false,
  },
  */
  reporter: 'html',
 // workers: 1,
 // fullyParallel: true,

  /* Configure projects for major browsers */
  projects: [

     /*
    {
     name: 'safari',
      use: {
        
         ...devices['iPhone 13'],
         headless: false,
         trace : 'on',
         screenshot: 'on',
         video: 'on',
         ignoreHTTPSErrors: true,
         permissions: ['geolocation'],
         geolocation: { longitude: 12.4924, latitude: 41.8902 },
         locale: 'en-US',
         //viewport: { width: 1280, height: 720 },
         colorScheme: 'dark',
         timezoneId: 'America/New_York',
         userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1'

        }
    },
*/
     {
      name: 'chrome',
      use: { 

        ...devices['Desktop Chrome'] ,
        headless: false,
         trace : 'on',
         screenshot: 'on',
         video: 'on',
         ignoreHTTPSErrors: true,
         permissions: ['geolocation'],
         geolocation: { longitude: 12.4924, latitude: 41.8902 },
         locale: 'en-US',
        // viewport: { width: 720, height: 720 },
         colorScheme: 'dark',
         timezoneId: 'America/New_York',
         userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1'

        }

      }

    
       ],

  
});
