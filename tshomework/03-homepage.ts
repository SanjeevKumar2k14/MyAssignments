import { selectors } from "./locators";
import { welcomePage } from "./02-welcomepage";

export class homePage extends welcomePage{

    async clickLead(){
        await this.page.locator(selectors.clickLead).click()

    }

}