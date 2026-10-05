import { Locator, Page } from "playwright-core";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage
{
   private readonly username:Locator;
   private readonly password:Locator;
   private readonly loginButton:Locator;
   private readonly forgotPasswordLink:Locator;

   constructor(page:Page)
   {
     super(page);
     this.username=page.getByRole('textbox',{name: 'E-Mail Address'});
     this.password=page.getByRole('textbox',{name: 'Password'});
     this.loginButton=page.getByRole('button',{name: 'Login'});
     this.forgotPasswordLink=page.getByRole('link',{name: 'Forgotten Password'}).first(); 
   }

   // page actions
   async goToLoginPage():Promise<void>
   {
      await this.page.goto("opencart/index.php?route=account/login");
   }
   
   async isForgotPasswordLinkExist() : Promise<boolean>
   {
      return await this.forgotPasswordLink.isVisible();
   }

   async doLogin(username :string, password:string) : Promise<void>
   {
      console.log(`Login with username: ${username} and passowrd: ${password}`);
      await this.username.fill(username);
      await this.password.fill(password);
      await this.loginButton.click();
   }
}