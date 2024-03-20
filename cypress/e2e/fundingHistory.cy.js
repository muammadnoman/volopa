/// <reference types= "Cypress" />

import { SigninPage } from "../PageObject/PageAction/SigninPage"
import { walletPageActions } from "../PageObject/PageAction/walletPageAction"


const fund = new walletPageActions
const Signin = new SigninPage

describe('FUNDING HISTORY',function(){
    beforeEach(()=>{
        cy.visit('/')
        Signin.Login()
    })
    it('verify user should not be able to search without inputing',function(){
        fund.unhappySearch()
    }) //it block
    it('verify user should  be able to search when enters input',function(){
       
        fund.happySearch()
    }) //it block
    it('verify all pages has funding histories',function(){
       
        fund.validatePagination()
    }) //it block
    // it('verify ascending sorting on Amount',function(){
    //     //Login 
    //     cy.visit('https://uiredevelopment.volopa.com/login')
    //     Login_Element.validateLogin()
    //     fund.validateAmountSorting()
    // }) //it block
}) //describe block