// @ts-check
import { chromium, defineConfig, devices, firefox } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  // retries:1,
  expect:
  {
    timeout: 6000
  },
  reporter: [
    ['html'],
    ['allure-playwright'],
     ['list'],
  ],

  use:
  {
    baseURL: 'https://rahulshettyacademy.com',
    // screenshot: 'on',
    // headless: false,
    // trace: 'on',
    // video: 'on',

  }
  ,
  workers:5,

  
 

  projects: [
    {
      name: 'chrome',
      use: {
        // Do not spread the device descriptor if you want viewport: null
        // ...devices['Desktop Chrome'],
        browserName:'chromium',
        headless: false,
        screenshot: 'on',
        ignoreHTTPSErrors:true,
        trace: 'on',
        video: 'retain-on-failure',
        launchOptions: {
          args: ['--start-maximized']
        },
        viewport: null // This is now valid because device descriptor is not spread
      }
      
    },
    {
      name: 'firefox',
      use: {
        // Do not spread the device descriptor if you want viewport: null
        // ...devices['Desktop Chrome'],
        browserName:'firefox',
        headless: false,
        screenshot: 'on',
        trace: 'on',
        video: 'on',
        launchOptions: {
          args: ['--start-maximized']
        },
        viewport: null // This is now valid because device descriptor is not spread
      }

      
    },
    {
      name: 'webkit',
      use: {
        // Do not spread the device descriptor if you want viewport: null
        // ...devices['Desktop Chrome'],
        browserName:'webkit',
        headless: false,
        screenshot: 'on',
        trace: 'on',
        video: 'on',
        launchOptions: {
          args: ['--start-maximized']
        },
       // This is now valid because device descriptor is not spread
       ...devices['BlackBerry Z30']
      }
      
    }
    //     ,
    // {
    //   name:"Mobile Chrome",
    //   use:{...devices["Pixel 7"]}
    // }
  ]





});

