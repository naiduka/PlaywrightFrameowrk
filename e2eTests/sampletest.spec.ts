import { test, expect } from '@playwright/test';

test ("launch browser", async ({browser}) =>
{
    const context = browser.newContext();
    console.log("welcome to automation workd");
    
}
);