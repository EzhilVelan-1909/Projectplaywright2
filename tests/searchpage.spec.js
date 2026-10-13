import {test} from '@playwright/test'
import { SearchPage } from '../page/SearchPage'
import { LoginPage } from '../page/LoginPage';

test ('Handling the search page', async ({page})=>{



    const login = new LoginPage(page)
await login.visitUrl()
await login.enterusername('EzhilVelan')
await login.enterpassword('Ezhil@123')
await login.enterlogin()

    

    const search = new SearchPage(page);
    await search.enterLocation();
    await search.hotel();
    await search.typeroom();
    await search.roomno();
    await search.incheck();
    await search.outcheck();
    await search.adult();
    await search.children();
    await search.submitting();

})