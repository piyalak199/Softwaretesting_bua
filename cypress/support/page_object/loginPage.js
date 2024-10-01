//การเขียนให้เป็น JAVA Class
class loginPage {
  get loginSucessText() {
    return cy.get(".post-title");
  }
  //Action
  verifyLoginSucessText() {
    this.loginSucessText.should("have.text", "Logged In Successfully");
  }
  get loginErrorUsername() {
    return cy.get("#error");
  }
  //Action
  verifyLoginErrorUsername() {
    this.loginErrorUsername.should("have.text", "Your username is invalid!");
  }
  get loginErrorPassword() {
    return cy.get("#error");
  }
  //Action with parameter
  verifyLoginErrorPassword(Text) {
    this.loginErrorPassword.should("have.text", Text);
  }
}
export default new loginPage();
