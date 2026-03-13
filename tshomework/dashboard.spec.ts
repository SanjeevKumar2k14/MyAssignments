import test, { expect } from '@playwright/test'
test.use({storageState:"StorageState/SF_Login3.json"})

test("Salesforce Creating newdashboard",async({page})=>{
   
    await page.goto(`https://orgfarm-b585f61b6a-dev-ed.develop.lightning.force.com/lightning/page/home`)
    await page.click("[class='slds-button slds-context-bar__button slds-icon-waffle_container slds-show']")
    await page.locator("[class='slds-button']").nth(1).click()
    await page.locator("[class='slds-input']").fill("dashboards")
    await page.locator("//a[@class='al-tab-item']").click()
    await page.locator("//div[@title='New Dashboard']").click()
    const frame = page.frameLocator('iframe')
    await frame.locator("#dashboardNameInput").fill("Sanjeev")
    await frame.locator("#dashboardDescriptionInput").fill("test")
    await frame.locator("#submitBtn").click()
    await page.waitForTimeout(5000)
    //await page.getByRole('button',{name:"Close"}).click()
    //await page.locator("[class='slds-button__icon slds-button__icon_large']").nth(1).click()
    await frame.getByRole('button',{name:"Save"}).click()
    let success = await page.locator("[class='toastMessage slds-text-heading--small forceActionsText']")
    await expect(success).toHaveText("Dashboard saved")
    
    
    



    //await page.waitForTimeout(5000)
})