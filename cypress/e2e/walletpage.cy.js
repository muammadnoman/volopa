///<reference types = 'Cypress'/>

import { SigninPage } from "../PageObject/PageAction/SigninPage";
import { walletPageActions } from "../PageObject/PageAction/walletPageAction";

const wallet = new walletPageActions
const Signin = new SigninPage

describe('Wallet Section ',function(){
    beforeEach(()=>{
        cy.visit('/')
        Signin.Login()
    })
    it('TC_WD-001  Validate Wallet Dashboard Content',()=>{
        wallet.validateDashboard()
    })
    it('TC_WD_002Validate "Total Companay Balance" on dashboard',()=>{
        wallet.Validate_total_Balance()
    })
    it('TC_WD_003 Validate  "wallet balance" from Wallet Dashboard',()=>{
        wallet.Total_Wallet_Balance()
    })
    it('TC_WD-005  Validate "Convert balance"  tab from wallet dashboard ',()=>{
        wallet.validateConvertBalances()
    })
    it('TC_WD -006 Validate "Convert balance"  tab from wallet dashboard  when user have insificent balance ',()=>{
        wallet.validate_Insificent_balance()
    })
    it('TC_WD-007 Validate "Rate Checker"  fromm Wallet dashboard ',()=>{
        wallet.validate_RateChecker_Calculator()
    })
})