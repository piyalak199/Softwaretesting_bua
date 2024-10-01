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

  verifyError() {
    this.resOutput.should(
      "have.text",
      "One or more fields have an error. Please check and try again."
    );
  }

  get notValidTip() {
    return cy.get(".wpcf7-not-valid-tip");
  }

  verifyTooBig() {
    this.notValidTip.should("have.text", "Uploaded file is too big.");
  }

  verifyBlank(){
    this.notValidTip.should("have.text", "You are not allowed to upload files of this type.");
  }

}
export default new uploadTest();
