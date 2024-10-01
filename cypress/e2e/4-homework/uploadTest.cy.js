import uploadTest from "../../support/page_object/uploadTest";

describe("uploadTest", () => {
  beforeEach(() => {
    cy.visit("https://practice-automation.com/file-upload/");
  });

  it("tc-01", () => {
    cy.get('#file-upload').selectFile("cypress/e2e/4-homework/fileUpload/TC-01.txt");
    cy.get("#upload-btn").click();
    uploadTest.verifySucessUpload()
  });
  it("tc-02", () => {
    cy.get('#file-upload').selectFile("cypress/e2e/4-homework/fileUpload/TC-02.pdf")
    cy.get("#upload-btn").click();
    uploadTest.verifySucessUpload()
  });
  it("tc-03", () => {
    cy.get('#file-upload').selectFile("cypress/e2e/4-homework/fileUpload/TC-03.docx")
    cy.get("#upload-btn").click();
    uploadTest.verifySucessUpload()
  });
  it("tc-04", () => {
    cy.get('#file-upload').selectFile("cypress/e2e/4-homework/fileUpload/TC-04.jpeg")
    cy.get("#upload-btn").click();
    uploadTest.verifySucessUpload()
  });
  it("tc-05", () => {
    cy.get('#file-upload').selectFile("cypress/e2e/4-homework/fileUpload/TC-05.jpg")
    cy.get("#upload-btn").click();
    uploadTest.verifySucessUpload()
  });
  it("tc-06", () => {
    cy.get('#file-upload').selectFile("cypress/e2e/4-homework/fileUpload/TC-06.png")
    cy.get("#upload-btn").click();
    uploadTest.verifySucessUpload()
  });
  it("tc-07", () => {
    cy.get('#file-upload').selectFile("cypress/e2e/4-homework/fileUpload/TC-07.gif")
    cy.get("#upload-btn").click();
    uploadTest.verifySucessUpload()
  });
  it("tc-08", () => {
    cy.get("#upload-btn").click()
    uploadTest.verifyError();
  });
  it("tc-09", () => {
    cy.get('#file-upload').selectFile("cypress/e2e/4-homework/fileUpload/TC-09.pdf")
    uploadTest.verifyTooBig();
  });
  it("tc-10", () => {
    cy.get('#file-upload').selectFile("cypress/e2e/4-homework/fileUpload/TC-10.xlsx")
    cy.get("#upload-btn").click()
    uploadTest.verifyBlank();
    uploadTest.verifyError();
  });

});
