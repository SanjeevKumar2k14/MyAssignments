//import {  chromium,test} from "@playwright/test"
import{viewLeadPage} from "../Pages/06-viewleadpage"
import { test1 } from "../utility/customfixture"


test1("login page using pom",async ({loginfix,welcomefix,homefix,leadfix,createleadfix,viewleadfix}) => {

/* async function doLogin(){


 /* const browser = await chromium.launch({ headless: false })
//open the window
const context = await browser.newContext()
//open the page
const page = await context.newPage()
/*  */  
 

//const vp = new viewLeadPage(page)

await loginfix.loadurl("http://leaftaps.com/opentaps/control/main")
await loginfix.enterCredentails("DemoSalesmanager","crmsfa")
await loginfix.clickLogin()
await welcomefix.clickCRM()
await homefix.clickLead()
await leadfix.clickCreateLead()
await createleadfix.enterMandatory()
await createleadfix.clickSubmit()
await viewleadfix.verifyFirstName()


//await page.waitForTimeout(3000) // This is just to view the process
//await vp.closeBrowser()



})
//doLogin()