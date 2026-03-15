import { selectors } from "./locators";
import { createLeadPage } from "./05-createleadpage";   

export class viewLeadPage extends createLeadPage{

    async verifyFirstName(){
        const fname = await this.page.locator(selectors.verifyFirstName)//.innerText()
        console.log(fname)

    }
}