import { LoginPage } from "./01-loginpage"
import {selectors} from "./locators"

export class welcomePage extends LoginPage{

    async clickCRM(){
        await this.page.locator(selectors.crmLink).click()

    }


}
