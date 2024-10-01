const dataUploadFile = require("../../fixtures/uploadTest.json");
import uploadTest from "../../support/page_object/uploadTest";

describe("uploadTest", () => {
  beforeEach(() => {
    cy.visit("https://practice-automation.com/file-upload/");
  });

  it("tc-01", () => {
    cy.get('#file-upload').selectFile(dataUploadFile.file.text)
    cy.get("#upload-btn").click();
    uploadTest.verifySucessUpload()
  });
  it("tc-02", () => {
    cy.get('#file-upload').selectFile(dataUploadFile.file.pdf)
    cy.get("#upload-btn").click();
    uploadTest.verifySucessUpload()
  });
  it("tc-03", () => {
    cy.get('#file-upload').selectFile(dataUploadFile.file.docx)
    cy.get("#upload-btn").click();
    uploadTest.verifySucessUpload()
  });
  it("tc-04", () => {
    cy.get('#file-upload').selectFile(dataUploadFile.file.jpeg)
    cy.get("#upload-btn").click();
    uploadTest.verifySucessUpload()
  });
  it("tc-05", () => {
    cy.get('#file-upload').selectFile(dataUploadFile.file.jpg)
    cy.get("#upload-btn").click();
    uploadTest.verifySucessUpload()
  });
  it("tc-06", () => {
    cy.get('#file-upload').selectFile(dataUploadFile.file.png)
    cy.get("#upload-btn").click();
    uploadTest.verifySucessUpload()
  });
  it("tc-07", () => {
    cy.get('#file-upload').selectFile(dataUploadFile.file.gif)
    cy.get("#upload-btn").click();
    uploadTest.verifySucessUpload()
  });
  it("tc-08", () => {
    cy.get("#upload-btn").click()
    uploadTest.verifyError();
  });
  it("tc-09", () => {
    cy.get('#file-upload').selectFile(dataUploadFile.file.max)
    uploadTest.verifyTooBig();
  });
  it("tc-10", () => {
    cy.get('#file-upload').selectFile(dataUploadFile.file.other)
    cy.get("#upload-btn").click()
    uploadTest.verifyBlank();
    uploadTest.verifyError();
  });

});
