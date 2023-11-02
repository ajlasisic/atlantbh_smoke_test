const { $ } = require("@wdio/globals");
const Page = require("./Page");

class LoginPage extends Page {
  get inputEmail() {
    return $("#email");
  }
  get inputPassword() {
    return $("#pass");
  }
  get btnSignIn() {
    return $("#send2");
  }
  get loginSuccess() {
    return $("body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.greet.welcome > span");
  }
  get signInDropdown() {
    return $('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.customer-welcome > span > button')
  }
  get btnSignOut() {
    return $('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.customer-welcome.active > div > ul > li.authorization-link > a')
  }
  get msgSignOut () {
    return $('#maincontent > div.page-title-wrapper > h1 > span')
  }

  async login() {
    await this.inputEmail.setValue(this.loginUser.email);
    await this.inputPassword.setValue(this.loginUser.password);
    await this.btnSignIn.click();
  }
  async logout() {
    await this.signInDropdown.click()
    await this.btnSignOut.click();
  }

  loginUser = {
    email: 'test@random.com',
    password: 'Atlant123',
  };
  
}
module.exports = new LoginPage();