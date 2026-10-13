import {test} from '@playwright/test'

test ('Handling the web table', async ({page}) => {
     
    await page.goto('https://tablepress.org/demo/') 

    const tableData =   await page.locator('//table[@id="tablepress-demo-premium"]//tbody//tr[1]//td[3]').textContent();

    console.log(tableData);


    const tableRow = await page.locator('//table[@id="tablepress-demo-premium"]//tbody//tr[6]').allTextContents();

    console.log(tableRow)

    for(let value of tableRow){
        console.log(value)
    }

    const tableColumn = await page.locator('//table[@id="tablepress-demo-premium"]//tbody//tr//td[2]').allTextContents();

     console.log(tableColumn);

     const tableahead = await page.locator('//table[@id="tablepress-demo-premium"]//thead//tr//th').allTextContents()

     console.log(tableahead)

     await page.waitForTimeout(8000)
} )