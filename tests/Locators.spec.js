import {test} from '@playwright/test'

test('Validating Login', async ({page}) =>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

// const userName = await page.locator('//tagname[@Attributename ='Attributevalue')

const userName = await page.locator('//input[@name ="username"]'); 

await userName.fill ("Admin") 

const passWord = await page.locator('//input[@placeholder="Password"]');

await passWord.fill ("admin123")

await page.waitForTimeout(10000);
});