import test from '@playwright/test'

test.only("Storage State",async({page})=>{

await page.goto("https://login.salesforce.com/?locale=in")
await page.locator("#username").fill("sanjaykumar2k14.sk.f35ed64f9b5d@agentforce.com")
await page.locator("#password").fill("Tn32af0639")
await page.locator("#Login").click()
//await page.waitForurl("orgfarm-b585f61b6a-dev-ed.develop.lightning.force.com/lightning/page/home")
//await page.waitForTimeout(20000)
await page.waitForSelector('one-appnav')
await page.context().storageState({path:"StorageState/SF_Login3.json"})
})