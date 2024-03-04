export class GreenKartChooseCountryPage {

  chooseCountry() {
    cy.get('.products > .wrapperTwo > div > select').select('Denmark')
  }

  agreeTerms() {
    cy.get('.products > .wrapperTwo > input').click()


  }

  clickProceed() {
    cy.get('button').contains('Proceed').click()
  }

  validateSuccessMsg(expectedMsg) {
    let actualMsg
    cy.get('[style="color:green;font-size:25px"]').then(function (element) {
      actualMsg = element.text()
      assert.equal(element.text(), expectedMsg)
      console.log('Message is:' + actualMsg)
    })

  }

  validateTermsErrorMsg(expectedErrorMsg) {
    let actualMsg
    cy.get('.errorAlert>b').then(function (element) {
      actualMsg = element.text()
      assert.equal(element.text(), expectedErrorMsg)
      console.log('Error Message is:' + actualMsg)
    })

  }

}