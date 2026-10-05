import { Locator, Page } from "playwright-core";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage
{
    private readonly logoutLink:Locator;
    private readonly headers : Locator;

    constructor(page:Page)
    {
        super(page);
        this.logoutLink=page.getByRole('link',{name: 'Logout'});
        this.headers=page.getByRole('heading',{level:2});
    }

    async isLogoutLinkExist() : Promise<boolean>
    {
        return await this.logoutLink.isVisible();
    }

    async getHomePageHeaders() : Promise<string[]>
    {
        return await this.headers.allInnerTexts();
    }

    // page title
   async getHomePageTitle():Promise<string>
   {
      return await this.page.title();
   }
}