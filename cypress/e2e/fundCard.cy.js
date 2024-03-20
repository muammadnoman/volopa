/// <reference types= "Cypress" />

import{ cardPageActions} from "../PageObject/PageAction/cardPageAction"
import{ SigninPage } from "../PageObject/PageAction/SigninPage"
const card = new cardPageActions
const Signin = new SigninPage

describe('cardDashboard',function(){
    it('currency conversion',function(){
        //Login
        cy.visit('/')
        Signin.Login()
        //card Currency Conversion
        card.fundCard()
        


    }) //it block


}) //describe block