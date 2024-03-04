export class GreenKartSelectOrdersPage {

     selectVegetable(vegetable) {
        var productQuantuty = vegetable.split(":")[1]
        if (productQuantuty == 1) {
             cy.get('.product-name').contains(vegetable.split(":")[0]).parent()
                .children('.product-action').children('button')
                .click()
        }
        else {
             cy.get('.product-name').contains(vegetable.split(":")[0]).parent()
                .children('.stepper-input').children('.increment').click()

             cy.get('.product-name').contains(vegetable.split(":")[0]).parent()
                .children('.product-action').children('button')
                .click()
        }
    }

     selectCartIcon() {
         cy.get('.cart > .cart-icon').click()
    }

     selectCheckoutButton() {
         cy.get('.cart-preview> .action-block > button').click()
    }

    validateEmptyCartError(expectedEmptyCartError)
   {
    cy.get('.cart-preview .empty-cart>h2').then(function (element) {
        assert.equal(element.text(),expectedEmptyCartError)
    })
   }
}