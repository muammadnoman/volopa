/// <reference types= "Cypress" />

import {  walletPageActions } from "../PageObject/PageAction/walletPageAction"
import{  SigninPage } from "../PageObject/PageAction/SigninPage"

const Signin = new SigninPage
const wallet = new walletPageActions

describe('wallet',function(){
    it('validate convert balances with recent activity on wallet page',function(){
        //Login
        cy.visit('/')
        Signin.Login()
        wallet.validateConvertBalances()
    }) //it block
}) //describe block