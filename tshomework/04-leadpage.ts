import { homePage } from "./03-homepage";   
import { selectors } from "./locators";

export class leadPage extends homePage{

    async clickCreateLead(){
        await this.page.locator(selectors.createLead).click()

    }

}