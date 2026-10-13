import {test} from '@playwright/test'

test("Handling the alert", async ({page}) => {

    await page.goto('https://demo.automationtesting.in/Alerts.html')

    page.once('dialog' , async(SimpleAlert)=>{
        console.log('The simplealert msg is : ' , SimpleAlert.message())
        await SimpleAlert.accept()
    })

    await page.locator('//button[@onclick="alertbox()"]').click()

    await page.waitForTimeout(14000);
})

