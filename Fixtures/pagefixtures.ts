import {test as base} from "@playwright/test"
import { Loginpage } from "../pages/loginpage"
import { LogoutPage } from "../pages/logoutpage";
import { BasePage } from "../pages/basepage";

type myfixtures = {

    loginpage:Loginpage;
    logoutpage:LogoutPage;
    basepage:BasePage
} 

export const test =base.extend<myfixtures>({
 
    basepage :async({page},use)=>{
    const basepage = new BasePage(page)
    await use(basepage)
    },


    loginpage :async({page},use)=>{
    const loginpage = new Loginpage(page)
    await use(loginpage)
    },

  logoutpage :async({page},use)=>{
    const logoutpage = new LogoutPage(page)
    await use(logoutpage)
    }

});
export {expect} from "@playwright/test"