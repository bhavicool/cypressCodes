/// <reference types="Cypress" />

import { GreenKartSelectOrdersPage } from "./pages/GreenKartSelectOrders"
import { GreenKartPlaceOrderPage } from "./pages/GreenKartPlaceOrder"
import { GreenKartChooseCountryPage } from "./pages/GreenKartChooseCountry"


const greenKartSelectOrdersPage = new GreenKartSelectOrdersPage()
const greenKartPlaceOrderPage = new GreenKartPlaceOrderPage()
const greenKartChooseCountryPage = new GreenKartChooseCountryPage()

describe('Green Kart E2E Test', function () {

  let inputData;
  before(function () {
    cy.fixture('example').then((data) => {
      inputData = data
    })
  })

  it('verify empty cart error message', function () {

    cy.visit(inputData.greenKartURL)

    greenKartSelectOrdersPage.selectCartIcon()
    greenKartSelectOrdersPage.validateEmptyCartError(inputData.expectedEmptyCartErrorMsg)
    cy.reload()
    
  })

  it('verify successful order message',  function () {

    cy.visit(inputData.greenKartURL)
    greenKartSelectOrdersPage.selectVegetable(inputData.firstVegetable)
    greenKartSelectOrdersPage.selectVegetable(inputData.secondVegetable)
    greenKartSelectOrdersPage.selectCartIcon()
    greenKartSelectOrdersPage.selectCheckoutButton()

    greenKartPlaceOrderPage.validateTotalOrderAmt(inputData.totalOrderAmt)
    greenKartPlaceOrderPage.selectPlaceOrder()

    greenKartChooseCountryPage.chooseCountry()
    greenKartChooseCountryPage.agreeTerms()
    greenKartChooseCountryPage.clickProceed()
    greenKartChooseCountryPage.validateSuccessMsg(inputData.expectedMsg)

  })

  it('verify promo code error message', function () {

    cy.visit(inputData.greenKartURL)
    greenKartSelectOrdersPage.selectVegetable(inputData.firstVegetable)
    greenKartSelectOrdersPage.selectVegetable(inputData.secondVegetable)
    greenKartSelectOrdersPage.selectCartIcon()
    greenKartSelectOrdersPage.selectCheckoutButton()

    greenKartPlaceOrderPage.applyPromo()
    greenKartPlaceOrderPage.validatePromoError(inputData.expectedPromoCodeErrorMsg)


  })

  it('verify terms and conditions error message', function () {

    cy.visit(inputData.greenKartURL)
    greenKartSelectOrdersPage.selectVegetable(inputData.firstVegetable)
    greenKartSelectOrdersPage.selectVegetable(inputData.secondVegetable)
    greenKartSelectOrdersPage.selectCartIcon()
    greenKartSelectOrdersPage.selectCheckoutButton()

    greenKartPlaceOrderPage.validateTotalOrderAmt(inputData.totalOrderAmt)
    greenKartPlaceOrderPage.selectPlaceOrder()

    greenKartChooseCountryPage.chooseCountry()
    greenKartChooseCountryPage.clickProceed()
    greenKartChooseCountryPage.validateTermsErrorMsg(inputData.expectedTermsErrorMsg)

  })
})