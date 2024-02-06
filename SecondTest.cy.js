/// <reference types="Cypress" />

 

describe('My First Test Suite', function () {

    it('Test Case on promise handling', () => {

	cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

	//text() is not a cypress command and so we need to handle it's promise explictly as below:

    cy.get('.brand').then(function (element) {

    cy.log(element.text())

        })

	//In assertion every promise is automatically handled
	//In below line text is not a cypress command but since it is used inside an assertion so there is no need to handle it's promise

    cy.get('.brand').should('have.text', 'GREENKART')

	//To make console.log in sync mode, we should handle promise explictly like below:

    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().

            then(function () { console.log('Log here') })

    })

 
	it('Test Case to navigate to Place Order page', function () {

	cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

	cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

	cy.get('a.cart-icon').click()

	cy.get('div.cart-preview.active > div.action-block > button').click()

	cy.get('div.products > div > button').click()

	})

})