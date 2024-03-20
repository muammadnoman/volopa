/// <reference types= "Cypress" />

import { SigninPage } from "../PageObject/PageAction/SigninPage"
import { walletPageActions } from "../PageObject/PageAction/walletPageAction"

const Signin = new SigninPage
const fund = new walletPageActions

describe('FUND WALLET',function(){
    before(()=>{
        cy.visit('/')
        Signin.Login()
    })
    it('verify user is able to fund the wallet',function(){
    
        fund.validateFundWallet()
    }) //it block
}) //describe block