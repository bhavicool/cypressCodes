/// <reference types="Cypress" />

describe('My First Test Suite', function ()
 {
    it('Test Case on handling UI controls', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')

        //Selecting and Unselecting checkbox
        cy.get('#checkBoxOption3').check()
        cy.get('#checkBoxOption3').uncheck()
        
        //Validating checkbox value property of the element
        cy.get('#checkBoxOption2').check().should('have.value','option2')

        //Selecting static dropdown using value attribute
        cy.get('#dropdown-class-example').select('option2')

        //Selecting static dropdown using element text
        cy.get('#dropdown-class-example').select('Option3')

        //Selecting radio button which is similar to handling of checkboxes
        cy.get('[value="radio2"]').check().should('be.checked')

        //Checking if a webelement is visible/displayed(behaviour) using CHAI should assertion
        cy.get('#displayed-text').should('be.visible')
    })
})