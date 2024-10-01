//การเขียนให้เป็น JAVA Class
class uploadTest {
  get resOutput() {
    return cy.get(".wpcf7-response-output");
  }

  //Action
  verifySucessUpload() {
    this.resOutput.should(
      "have.text",
      "Thank you for your message. It has been sent."
    );
  }
  //Action
  verifyError() {
    this.resOutput.should(
      "have.text",
      "One or more fields have an error. Please check and try again."
    );
  }

  get notValidTip() {
    return cy.get(".wpcf7-not-valid-tip");
  }
  //Action
  verifyTooBig() {
    this.notValidTip.should("have.text", "Uploaded file is too big.");
  }
  //Action
  verifyBlank() {
    this.notValidTip.should(
      "have.text",
      "You are not allowed to upload files of this type."
    );
  }

  get uploadFile() {
    return cy.get("#file-upload");
  }
  //Action
  selectFile(text) {
    this.uploadFile.selectFile(text);
  }
}
export default new uploadTest();
