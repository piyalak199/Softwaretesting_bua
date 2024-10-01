const testDataLogin = require("../../fixtures/login.json");
import loginPage from "../../support/page_object/loginPage";

describe("login", () => {
  beforeEach(() => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
  });

  it("tc-01", () => {
    //   cy.login('student','Password123')
    cy.login(testDataLogin.username.positive, testDataLogin.password.positive)
    // cy.get(".post-title").should("have.text", "Logged In Successfully");
    loginPage.verifyLoginSucessText()
  });
  it("tc-02", () => {
    // cy.login("incorrectUser", "Password123");
    cy.login(testDataLogin.username.negative, testDataLogin.password.positive)
    // cy.get("#error").should("have.text", "Your username is invalid!");
    loginPage.verifyLoginErrorUsername()
  });
  it("tc-03", () => {
    // cy.login("student", "incorrectPassword");
    cy.login(testDataLogin.username.positive, testDataLogin.password.negative)
    // cy.get("#error").should("have.text", "Your password is invalid!");
    loginPage.verifyLoginErrorPassword("Your password is invalid!")
  })
});

// const testDataLogin = require("../../fixtures/login.json");

// describe("login", () => {
//   beforeEach(() => {
//     cy.visit("https://practicetestautomation.com/practice-test-login/");
//   });

//   it("tc-01", () => {
//     //   cy.login('student','Password123')
//     cy.login(testDataLogin.username.positive, testDataLogin.password.positive)
//     cy.get(".post-title").should("have.text", "Logged In Successfully");
//   });
//   it("tc-02", () => {
//     // cy.login("incorrectUser", "Password123");
//     cy.login(testDataLogin.username.negative, testDataLogin.password.positive)
//     cy.get("#error").should("have.text", "Your username is invalid!");
//   });
//   it("tc-03", () => {
//     // cy.login("student", "incorrectPassword");
//     cy.login(testDataLogin.username.positive, testDataLogin.password.negative)
//     cy.get("#error").should("have.text", "Your password is invalid!");
//   })
// });

/*
describe("login", () => {
  beforeEach(() => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
  });

  it("tc-01", () => {
    cy.login('student','Password123')
    // cy.get("#username").type("student");
    // cy.get("#password").type("Password123");
    // cy.get("#submit").click();
    cy.get(".post-title").should("have.text", "Logged In Successfully");
  });
  it("tc-02", () => {
    cy.login('incorrectUser','Password123')
    cy.get("#error").should("have.text", "Your username is invalid!");
  });
  it("tc-03", () => {
    // cy.get('input').clear()
    // const username = "student";
    // cy.get("#username").type(username);
    cy.login('student','incorrectPassword')
    // cy.contains("button", "Submit").click();
    cy.contains('Submit').click()
    cy.get("#error").should("have.text", "Your password is invalid!");
    // cy.get("#error").contains("Your password is invalid!");
    // cy.get("#error")
    //   .should("be.visible")
    //   .and("contain", "Your password is invalid!");
    // cy.url().should("include", "/logged-in-successfully/");
    // cy.reload();
    // Cypress.Keyboard.defaults({
    //   keystrokeDelay: 20,
    // });
    // Cypress.Commands.add("login", (username, password) => {
    //   cy.get("#username").type(username);
    //   cy.get("#password").type(password);
    //   cy.get("#submit").click();
    // });
    // cy.visit("https://practicetestautomation.com/practice-test-login/...");
    // cy.login("student", "Password123");
  });
  it("tc-04", () => {
    cy.get("#username").type("student");
    cy.get("#password").type("incorrectPassword");
    cy.get("#submit").click();
    cy.get('#error').should('have.text','Your password is invalid!')
    // cy.get("#error").then(($error) => {
    //   expect($error.text()).to.equal("Your password is invalid!");
    // });
    // cy.screenshot()
    // cy.wait(3000);
    // cy.go("back");
    // cy.get('img').rightclick().trigger('mousedown');
  });
});
*/
