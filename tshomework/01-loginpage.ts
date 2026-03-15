/* 
Actions:
1. Loading url.
2. Enter Credentials
3. Click Login. */


import { chromium, Page } from "@playwright/test"
import { selectors } from "./locators"
import {PWWrapper} from "../utility/playwrightWrapper"


export class LoginPage extends PWWrapper {


    /* page : Page // Global declaration // Explicit inference
//lppage == page
    constructor(Lpage:Page){ // Parameterized constructor // name and id is local variable
        this.page=Lpage // empName which global variable/property is assigned the value of local variabloe name which is "Hari"


       //1.Lpage == page got it at the time of object creation passed as a constructor argument
        //2. Gpage == Lpage local variable Tpage is assigning the value to the GLobal variable lppage
        //3. Gpage can be used in all the methods inside the class using "this" keyword
    
    }
 */

    async loadurl(url:string) {
             await this.page.goto(url)   // goto(), locator() all these methods are dependent on "page"
    }


    async enterCredentails(username:string,password:string) {


        //await this.page.locator(`selectors.usernamefield`).fill(username);
       // await this.page.locator(`selectors.pwdField`).fill(password)
        await this.clearandfill(selectors.usernameField,username)
       await this.clearandfill(selectors.pwdField,password)

    
    }


    async clickLogin() {


        await this.page.locator(selectors.login).click()
    }


    async closeBrowser(){
        await this.page.close()
    }


}


/* async function doLogin(){


const browser = await chromium.launch({ headless: false })
//open the window
const context = await browser.newContext()
//open the page
const page = await context.newPage()



const login = new LoginPage(page)
await login.loadurl("https://login.salesforce.com/?locale=in")
await login.enterCredentails("dilipkumar.rajendran@testleaf.com","TestLeaf@2025")
await login.clickLogin()


await page.waitForTimeout(3000) // This is just to view the process
await login.closeBrowser()



}
doLogin() */