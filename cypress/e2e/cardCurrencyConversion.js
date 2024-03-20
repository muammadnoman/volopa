/// <reference types= "Cypress" />

import { cardPageAction} from "../PageObject/PageAction/cardPageAction"
import { SigninPage} from "../PageObject/PageAction/SigninPage"

const Signinpage = new SigninPage
const card = new cardPageAction

describe('cardDashboard',function(){
    it('currency conversion',function(){
        //Login
        cy.visit('/')
        Signinpage.Login()
        card.card_currency_conversion()
    }) //it block
}) //describe block