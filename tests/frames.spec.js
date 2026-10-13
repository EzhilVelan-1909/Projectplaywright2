import {test} from '@playwright/test'

test ('Handling frames ' ,async ({page})=> {

    await page.goto('https://demo.automationtesting.in/Frames.html');

    const singleFrame =  await page.frameLocator('//iframe[@id="singleframe"]');

    await singleFrame.locator('//input[@type="text"]').fill('Handled SingleFrame');

    // Multiple Frames

    await page.locator('(//a[@class="analystic"])[2]');

    const outerFrame = await page.frameLocator('//iframe[@src="MultipleFrames.html"]');

    const innerFrame = await outerFrame.frameLocator('//iframe[@src="SingleFrame.html"]');
    
    await innerFrame.locator('//input[@type="text"]').fill('Handled the nested value');

    await page.waitForTimeout(5000);
})