import { selectors } from "./locators";
import { leadPage } from "./04-leadpage";   

export class createLeadPage extends leadPage{

    async enterMandatory(){
       /*  await this.page.locator(`#createLeadForm_companyName`).fill("Teastleaf")
        await this.page.locator(`#createLeadForm_firstName`).fill("Sanjeev")
        await this.page.locator(`#createLeadForm_lastName`).fill("kumar") */

        await this.clearandfill(selectors.companyName,"Teastleaf")
        await this.clearandfill(selectors.firstName,"Sanjeev")
        await this.clearandfill(selectors.lastName,"kumar")
    }
    async clickSubmit(){
        await this.page.locator(selectors.submit).click()

    }

}