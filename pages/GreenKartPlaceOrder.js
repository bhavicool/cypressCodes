export class GreenKartPlaceOrderPage {

     validateTotalOrderAmt(totalOrderAmt) {
         cy.get('.products>div>.discountAmt').then(function (element) {
            assert.equal(element.text(),totalOrderAmt)
        })
    }

     selectPlaceOrder() {
         cy.get('.products>div>button').click()
    }

    applyPromo() {
        cy.get('.promoBtn').click()
   }

   validatePromoError(expectedPromoError)
   {
    cy.get('.promoInfo').then(function (element) {
        assert.equal(element.text(),expectedPromoError)
    })
   }
}