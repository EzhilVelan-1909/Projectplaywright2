import {test} from '@playwright/test'

test ('Validating Dropdown', async ({page})=> {
    await page.goto('https://demo.automationtesting.in/Register.html#google_vignette')

    const firstName = await page.locator('//input[@placeholder="First Name"]')

    await firstName.fill('Ezhil')

    const lastName = await page.locator('//input[@ng-model="LastName"]')

    await lastName.fill('Velan')

    const address = await page.locator('//textarea[@ng-model="Adress"]')

    await address.fill('178,RajaStreet,Salem')

    
    const emailAddress = await page.locator('//input[@type="email"]')

     await emailAddress.fill('ezhilvel1922@gmail.com')

     const phonenum = await page.locator('//input[@type="tel"]')

     await phonenum.fill('8098724173')

     const gender = await page.locator('//input[@value="Male"]')

     await gender.check()
    
     const  hobbies =  await page.locator('//input[@id="checkbox1"]')

     await hobbies.check()

     await page.locator('//div[@id="msdd"]').click()

     await page.getByText('Arabic').click()

     await page.getByText('English').click()
    
     await page.getByText('German').click() 

    //  const DdClose = ('//ul[@class="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content ui-corner-all"]')

    //  await page.press(DdClose,"Tab");

    //  await page.press('your-dropdown-locator', 'Tab');

    // Single dropdown

    const skills = await page.locator("//select[@id='Skills']")

    await skills.selectOption({index : 4});

    const selectedElement = await skills.locator('option:checked').textContent()

    console.log ('The selected value is :' , selectedElement)

    // -----------year

    const yearbox = await page.locator('//select[@id="yearbox"]')

    await yearbox.selectOption({value : "2000"});

    const selectedYear = await yearbox.locator('option:checked').textContent()

    console.log("The selected year is : ", selectedYear)

    // -----month

    const monthBox = await page.locator('//select[@ng-model="monthbox"]')

    await monthBox.selectOption({index : 9});

    const selectedMonth = await monthBox.locator('option:checked').textContent();

    console.log('The selected month is : ', selectedMonth);

    // ---Date

    const DayBox = await page.locator('//select[@placeholder="Day"]')

    await DayBox.selectOption({index : 19});

    const passWord = await page.locator('//input[@ng-model="Password"]')

    await passWord.fill('Ezhil@123')

    const confirmPassword = await page.locator('//input[@id="secondpassword"]')

    await confirmPassword.fill('Ezhil@123')
    // --------------------------------------------

    // const languages = await page.locator("//a[text()='English']")

    // await languages . click()

    // const selectedlanguage = await languages.locator ('click.visible')

    // await languages.click();


// await page.locator("//li[text()='English']").click();

    // console.log(selectedlanguage)

    // test ('Multiple dropdown', async({page}) =>{

    //     await page.goto('https://demo.automationtesting.in/Register.html#google_vignette')

    //     const multipleDropdowns = await page.locator("//div[@id='msdd']")

    //     await multipleDropdowns.selectOption.click('English')

    //     console.log(multipleDropdowns)
    // }
    


 
const country = page.locator("#country");

await country.selectOption({ value: "India" });

const selectedCountry = await country
    .locator("option:checked")
    .textContent();

console.log("The selected country is:", selectedCountry);

await page.waitForTimeout(15000)

})
