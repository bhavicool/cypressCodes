/// <reference types="Cypress" />

 

describe('My First Test Suite', function () {

    it('My First Test Case', () => {

        //To visit webpage(no need of ; at the end of line)

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

 

        //To get an element on the webpage

        cy.get('input.search-keyword').type('ca')

 

        //wait for 2 seconds

        cy.wait(2000)

 

        //To verify if 4 products are displayed after above command or not using assertions of chai

        //get in Cypress is same as findElement in selenium

        //should is used to assert on property of the element(below command will fail as we app returns 5 elements with 1 invisible)

       //cy.get('.product').should('have.length',4)

 

        //should is used to assert on property of the element(below command will pass as we app returns only visible elements)

        cy.get('.product:visible').should('have.length', 4)

 

        //parent child chaining concept

        cy.get('.products').find('.product').should('have.length', 4)

 

        //get 2nd product out of 4 products returned and click ADD TO CART on it

        //contains method will take 1 input as text and search for it

 

        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

 

        //get dynamic product out of 4 products returned and click ADD TO CART on it

        //contains method will take 1 input as text and search for it

 

        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

 

        //get text of a specific web element

        //each method is used to iterate through all the elements of an array

 

        cy.get('.products').find('.product').each(($e1, index, $list) => {

 

            const textVeg = $e1.find('h4.product-name').text()

            if (textVeg.includes('Cashews')) {

                //In below line click method got deprecated in latest version of Cypress

                $e1.find('button').click()

 

                //Below line will avoid deprecation cy.wrap($e1) returns elements with resolved promise

                cy.wrap($e1).find('button').click()

            }

        })

	})

})