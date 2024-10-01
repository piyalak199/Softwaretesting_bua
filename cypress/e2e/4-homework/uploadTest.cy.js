const dataUploadFile = require("../../fixtures/uploadTest.json");
import uploadTest from "../../support/page_object/uploadTest";

describe("uploadTest", () => {
  beforeEach(() => {
    cy.visit("https://practice-automation.com/file-upload/");
  });

  it("tc-01", () => {
    uploadTest.selectFile(dataUploadFile.file.text)
    cy.get("#upload-btn").click();
    uploadTest.verifySucessUpload()
  });
  it("tc-02", () => {
    uploadTest.selectFile(dataUploadFile.file.pdf)
    cy.get("#upload-btn").click();
    uploadTest.verifySucessUpload()
  });
  it("tc-03", () => {
    uploadTest.selectFile(dataUploadFile.file.docx)
    cy.get("#upload-btn").click();
    uploadTest.verifySucessUpload()
  });
  it("tc-04", () => {
    uploadTest.selectFile(dataUploadFile.file.jpeg)
    cy.get("#upload-btn").click();
    uploadTest.verifySucessUpload()
  });
  it("tc-05", () => {
    uploadTest.selectFile(dataUploadFile.file.jpg)
    cy.get("#upload-btn").click();
    uploadTest.verifySucessUpload()
  });
  it("tc-06", () => {
    uploadTest.selectFile(dataUploadFile.file.png)
    cy.get("#upload-btn").click();
    uploadTest.verifySucessUpload()
  });
  it("tc-07", () => {
    uploadTest.selectFile(dataUploadFile.file.gif)
    cy.get("#upload-btn").click();
    uploadTest.verifySucessUpload()
  });
  it("tc-08", () => {
    cy.get("#upload-btn").click()
    uploadTest.verifyError();
  });
  it("tc-09", () => {
    uploadTest.selectFile(dataUploadFile.file.max)
    uploadTest.verifyTooBig();
  });
  it("tc-10", () => {
    uploadTest.selectFile(dataUploadFile.file.other)
    cy.get("#upload-btn").click()
    uploadTest.verifyBlank();
    uploadTest.verifyError();
  });

});
