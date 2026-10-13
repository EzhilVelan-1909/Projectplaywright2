import { test } from '@playwright/test'
import { LoginPage } from '../page/LoginPage'


test('Page object model', async ({page})=>{

const login = new LoginPage(page)
await login.visitUrl()
await login.enterusername('EzhilVelan')
await login.enterpassword('Ezhil@123')
await login.enterlogin()


})