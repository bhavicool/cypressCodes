/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('My First Test Suite', function () {
    it('Test Case on handling advanced window options', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')

        //Cypress handles alerts/popups by auto accepting it(both OK and Confirm)
        //We won't be able to see the alert/popup during Cypress execution and it is auto approved 
        //We can see the alerts text in test runner script logs
        cy.get('#alertbtn').click()

        cy.get('#confirmbtn').click()

        //Verify the text present on the alert/popup using events()
        //Firing event in the browser and then cypress will capture the alert event(1st argument is alert and 2nd argument is output of alert)
        cy.on('window:alert', (str) => {
            //Mocha assertion
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //The only way to handle it is by asking application to load child window/tab in same page
        //We can do that using target attribute of the webelement(target=blank html)
        //At runtime we can use jQuery and remove target attribute at run time and invoke DOM again
        //removeAttr is an jquery function
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        //We will get cross domain origin issue if we try to click on any webelement on the new page
        //To handle it we need to use new origin or domain as below:
        cy.origin("https://www.qaclickacademy.com/", () => {
            cy.get('ul.navbar-nav a.active').click()

            cy.get('div.mt-50 h2').should('contain', 'QAClick Academy')

        }
        )

        //Scenario to check if price is 25 for a specific course dynamically by scanning entire webtable
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')

        //Finding specific course column
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

            const text = $e1.text()
            if (text.includes("Python")) {
                //next() is a method to find immediate sibling of current web element
                //text() is a jquery method and so we need to handle it's promise explictly and resolve it using then block
                cy.get('tr td:nth-child(2)').eq(index).next()
                    .then(function (price) {
                        const pythonCoursePrice = price.text()
                        console.log('Course Price is:' + pythonCoursePrice)
                        expect(pythonCoursePrice).to.equal('25')
                    })
            }
        })

        //Handling mouse hovering using jQuery as there is no Actions in Cypress
        //Find parent and then click child as show method of JQuery whic is applied on parent where child options are present
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')

        //We can click on hidden elements without mouse hovering in Cypress as below:
        //cy.get('cssLocatorOfHiddenElement').click({force:true})

        //Handling Frames
        cy.frameLoaded('#courses-iframe')

        //Telling Cypress to switch to iframe mode
        cy.iframe().find("a[href*='mentorship']").eq(0).click()

    })
})
})