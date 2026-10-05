import { Locator, Page } from "@playwright/test";

export class BasePage 
{
   protected readonly page:Page;
   protected readonly logo :Locator
   constructor(page:Page)
   {
    this.page=page;
   }


}