import test from '@playwright/test'
test.use({storageState:"StorageState/SF_Login3.json"})

test("Salesforce Creating Lead",async({page})=>{
    // await page.goto("https://orgfarm-b585f61b6a-dev-ed.develop.my.salesforce.com/")
    // await page.locator("#username").fill("sanjaykumar2k14.sk.f35ed64f9b5d@agentforce.com")
    // await page.locator("#password").fill("Tn32af0639")
    // await page.click("#Login")
    await page.goto(`https://orgfarm-b585f61b6a-dev-ed.develop.lightning.force.com/lightning/page/home`)
    await page.click("[class='slds-button slds-context-bar__button slds-icon-waffle_container slds-show']")
    await page.locator("[class='slds-button']").nth(1).click()
    await page.locator("[class='slds-input']").fill("marketing")
    await page.locator("//p[contains(text(),'Track sales ')]").click()
    await page.locator("[class='slds-context-bar__label-action dndItem']").nth(3).click()
    //await page.locator("[class='slds-button slds-button_neutral slds-button_first']").first().click()
    //await page.getByRole("button", { name: "New" }).click()
    await page.locator(".forceActionLink").first().click()
    await page.getByRole('combobox',{name:"Salutation"}).click()
    await page.getByRole('option',{name: "Mr."}).click()
    await page.locator("[class='slds-input']").nth(2).fill("Sanjeev")
    await page.locator("[class='slds-input']").nth(3).fill("Kumar1")
    await page.getByRole(`textbox`,{name:"Company"}).fill("Employee")
    //await page.locator("[class='slds-input']").nth(4).fill("Employee")
    //await page.getByRole(`button`,{name:"Save"}).click()
    await page.getByText(`Save`,{exact:true}).click()
    await page.getByText(`Show more actions`,{exact:true}).click()
    await page.getByText(`Convert`,{exact:true}).click()
    await page.locator("[class='slds-button slds-button_neutral slds-button_stretch transparentButton']").nth(2).fill("Luffy")  
    await page.getByRole(`button`,{name:"Convert"}).click()
    await page.getByRole(`button`,{name:"Go to Leads"}).click()
    await page.getByPlaceholder(`Search this list...`).fill("Kumar1")
    await page.getByPlaceholder(`Search this list...`).press("Enter")
    await page.getByText(`Opportunities`,{exact:true}).click()
    await page.waitForTimeout(5000)

    


})