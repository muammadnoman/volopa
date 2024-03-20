///<reference types = "Cypress" />
import { ReuseableCode } from "../../support/ReuseableCode"
const reuseableCode = new ReuseableCode
export class SignupPage{

   signup_button(){
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > form:nth-child(1) > div:nth-child(5) > div:nth-child(1) > a:nth-child(1)')
    .click({force:true})
   }
    signup_Form1(){
        cy.get('[class="breadcrumb-border active highlighted"]').should('contain','User Account')// validation
        cy.get("div[class='col-sm-6'] h2").should('have.text','Set up user account')// validation
        cy.get("div[class='form-group field-signupbusinessapi-emailprimary required'] div[class='col-sm-4']")
        .should('contain','Business Email Address')
        const email = (reuseableCode.RandomString(7))+ ('@yopmail.com')
        cy.log(email)
        cy.get("#signupbusinessapi-emailprimary").type(email)
        cy.get("div[class='form-group field-signupbusinessapi-password required'] div[class='col-sm-4']")
        .should('contain','Password')
        cy.get('#signupbusinessapi-password').type('testTest1')
        cy.get("div[class='form-group field-signupbusinessapi-passwordconfirm required'] div[class='col-sm-4']")
        .should('have.text','Confirm Password')
        cy.get('#signupbusinessapi-passwordconfirm').type('testTest1')
        cy.get("div[class='form-group field-signupbusinessapi-securityquestion required'] div[class='col-sm-4']")
        .should('have.text','Security Question')
        cy.get('#signupbusinessapi-securityquestion').select(2).should('contain','What was the name of your first pet?')
        cy.get("div[class='form-group field-signupbusinessapi-securityanswer required'] div[class='col-sm-4']")
        .should('contain','Security Answer')
        cy.get('#signupbusinessapi-securityanswer').type('cat')
        cy.get("div[class='form-group field-signupbusinessapi-hearaboutusid required'] div[class='col-sm-4']")
        .should('have.text','How did you hear about us?')
        cy.get('#signupbusinessapi-hearaboutusid').select(1).should('contain','Search engine')
        cy.get("button[type='submit']").click({force:true})
    }
    Signup_Form2(){
            //Form 2
        cy.get('.breadcrumb-border.active.highlighted').should('contain','Personal Details')
        cy.get("div[class='col-sm-6'] h2").should('have.text','Personal Details')
        cy.get("div[class='form-group field-signupbusinessapi-title required'] div[class='col-sm-4']")
        .should('have.text','Title')
        cy.get('#signupbusinessapi-title').select(1).should('contain','Mr.')
        cy.get("div[class='form-group field-signupbusinessapi-firstname required'] div[class='col-sm-4']")
        .should('have.text','First Name')
        const FirstName = reuseableCode.getRandomFirstName()
        cy.log(FirstName)
        cy.get('#signupbusinessapi-firstname').type(FirstName)
        cy.get("div[class='form-group field-signupbusinessapi-lastname required'] div[class='col-sm-4']")
        .should('have.text','Last Name')
        const LastName = reuseableCode.getRandomLastName()
        cy.log(LastName)
        cy.get("#signupbusinessapi-lastname").type(LastName)
       cy.get('#signupbusinessapi-dob').type('2002-12-23')
        cy.get("div[class='form-group field-signupbusinessapi-telephonemobile required'] div[class='col-sm-4']")
        .should('have.text','Mobile Number')
        const PhoneNo = reuseableCode.getRandomPhoneNumber()
        const PhoneNumber= "+92345"+PhoneNo
        cy.log(PhoneNumber)
        cy.get("#signupbusinessapi-telephonemobile").type(PhoneNumber)
        cy.get("button[type='submit']").click({foece:true})
    }
    signup_Form3(){
        //Form-3
        cy.get('.breadcrumb-border.active.highlighted').should('contain','Company Details')
        cy.get("div[class='row'] h2").should('have.text','Tell us about your business')
        cy.get("div[class='form-group field-signupbusinessapi-companytype required'] div[class='col-sm-4']")
        .should('have.text','Company Type')
        cy.get('#signupbusinessapi-companytype').select(1).should('contain','PLC')
        cy.get("div[class='form-group field-signupbusinessapi-companyname required'] div[class='row text-align-center-flex']")
        .should('have.text','Company Name')
        cy.get('#signupbusinessapi-companyname').type('ABC')
        cy.get("div[class='form-group field-signupbusinessapi-position'] div[class='col-sm-4']")
        .should('have.text','Your Position')
        cy.get('#signupbusinessapi-position').type('Tester')
        cy.get("div[class='form-group field-signupbusinessapi-companyregistrationcountry'] div[class='col-sm-4']")
        .should('contain','Country of Company Registration')
        cy.get('#signupbusinessapi-companyregistrationcountry').select(1).should('contain','United Kingdom')
        cy.get("div[class='form-group field-signupbusinessapi-companynumber'] div[class='col-sm-4']")
        .should('contain','Company Registration Number')
        cy.get('#signupbusinessapi-companynumber').type('NB2314')
        cy.get("div[class='form-group field-signupbusinessapi-companyindustrytype required'] div[class='col-sm-4']")
        .should('contain','Business Category/Industry')
        cy.get('#signupbusinessapi-companyindustrytype').select(1).should('contain','Aerospace')
        cy.get("div[class='form-group field-signupbusinessapi-companydescription required'] div[class='col-sm-4']")
        .should('contain','Company Description')
        cy.get('#signupbusinessapi-companydescription').type('testing automation ')
        cy.get("body > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(10) > div:nth-child(1) > h2:nth-child(1)")
        .should('contain','Registered Address')
        cy.get("div[class='form-group field-signupbusinessapi-companyaddress required'] div[class='row text-align-center-flex']")
        .should('contain','Address')
        cy.get("#signupbusinessapi-companyaddress").type('London')
        cy.get("div[class='form-group field-signupbusinessapi-companycity required'] div[class='col-sm-4']")
        .should('contain','City')
        cy.get('#signupbusinessapi-companycity').type('London Uk')
        cy.get("div[class='form-group field-signupbusinessapi-companypostcode required'] div[class='col-sm-4']")
        .should('contain','Postcode')
        cy.get('#signupbusinessapi-companypostcode').type('Po1')
        cy.get("div[class='form-group field-signupbusinessapi-companycountry required'] div[class='col-sm-4']")
        .should('have.text','Country')
        cy.get('#signupbusinessapi-companycountry').select(1).should('contain','United Kingdom')
        cy.get("body > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(16) > div:nth-child(1) > h2:nth-child(1)")
        .should('have.text','Trading Address')
        cy.get('input[type="checkbox"]').should('be.checked')
        cy.get("button[type='submit']").click({force:true})
    }
    signuo_Form4(){
        //Form-4
        cy.get("div[class='col-md-6 gray-bg padding right-side'] img[alt='question-mark']").click({force:true})
        cy.get("button[type='submit']").click({force:true})
    }
    signup_Form5(){
        //Form-5
        cy.get('.breadcrumb-border.active.highlighted').should('contain','Expected Usage')
        cy.get('body > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)')
        .should('contain','How many cards will you need in the first 12 months?')
        cy.get('#signupbusinessapi-estimatedcardamount').type('2')
        cy.get('body > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)')
        .should('contain','What do you think will be the average monthly value of non-ATM transactions per card?')
        cy.get('#signupbusinessapi-estimatedmonthlycardnonatmamount').type('150000')
        cy.get('body > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)')
        .should('contain','What do you think will be the average monthly value of ATM withdrawals per card?')
        cy.get('#signupbusinessapi-estimatedmonthlycardatmamount').type('300000')
        cy.get("body > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)")
        .should('contain','What do you think will be the average monthly value loaded on to each card?')
        cy.get('#signupbusinessapi-estimatedmonthlycardloadamount').type('200000')
        cy.get("button[type='submit']").click({force:true})

        //Form-6
        cy.get("button[type='submit']").click({force:true})


    }
    Form1_VAlidation(){
        this.signup_button()
        cy.get("div[class='col-sm-6'] h2").should('have.text','Set up user account')
        cy.scrollTo("bottom")
        cy.get("button[type='submit']").click({force:true})
        cy.get("div[class='form-group field-signupbusinessapi-emailprimary required has-error'] div[class='help-block']")
        .should('have.text','Email Primary cannot be blank.')
        cy.get("div[class='form-group field-signupbusinessapi-password required has-error'] div[class='help-block']")
        .should('have.text','Password cannot be blank.')
        cy.get("div[class='form-group field-signupbusinessapi-securityquestion required has-error'] div[class='help-block']")
        .should('have.text','Security Question cannot be blank.')
        cy.get("div[class='form-group field-signupbusinessapi-securityanswer required has-error'] div[class='help-block']")
        .should('have.text','Security Answer cannot be blank.')
        cy.get("div[class='form-group field-signupbusinessapi-hearaboutusid required has-error'] div[class='help-block']")
        .should('have.text','Hear About Us Id cannot be blank.')
        cy.reload()
        this.signup_Form1()
    }

    Form2_Validation() {
        this.signup_button()
        this.signup_Form1()
        cy.get("div[class='col-sm-6'] h2").should('have.text','Personal Details')
        cy.get("button[type='submit']").click({force:true})
        cy.get("div[class='form-group field-signupbusinessapi-title required has-error'] div[class='help-block']")
        .should('have.text','Title cannot be blank.')
        cy.get("div[class='form-group field-signupbusinessapi-firstname required has-error'] div[class='help-block']")
        .should('have.text','First Name cannot be blank.')
        cy.get("div[class='form-group field-signupbusinessapi-lastname required has-error'] div[class='help-block']")
        .should('have.text','Last Name cannot be blank.')
        cy.get("div[class='form-group field-signupbusinessapi-dob required has-error'] div[class='help-block']")
        .should;('have.text','Dob cannot be blank.')
        cy.get("div[class='form-group field-signupbusinessapi-telephonemobile required has-error'] div[class='help-block']")
        .should('have.text','Telephone Mobile cannot be blank.')
        cy.reload()
        this.Signup_Form2()
    }
    Form3_VAlidation(){
        this.signup_button()
        this.signup_Form1()
        this.Signup_Form2()
        cy.wait(2000)
        cy.scrollTo("bottom")
        cy.get("button[type='submit']").click({force:true})
        cy.get("div[class='row'] h2").should('have.text','Tell us about your business')
        cy.get("div[class='form-group field-signupbusinessapi-companytype required has-error'] div[class='help-block']")
        .should('contain','Company Type cannot be blank.')
        cy.get("div[class='form-group field-signupbusinessapi-companyname required has-error'] div[class='help-block']")
        .should('contain','Company Name cannot be blank.')
        cy.get("div[class='form-group field-signupbusinessapi-position has-error'] div[class='help-block']")
        .should('contain','Please enter a value for Position.')
        cy.get("div[class='form-group field-signupbusinessapi-companyregistrationcountry has-error'] div[class='help-block']")
        .should('have.text','Please enter a value for Company Registration Country.')
        cy.get("div[class='form-group field-signupbusinessapi-companynumber has-error'] div[class='help-block']")
        .should('have.text','Please enter a value for Company Number.')
        cy.get("div[class='form-group field-signupbusinessapi-companyindustrytype required has-error'] div[class='help-block']")
        .should('have.text','Company Industry Type cannot be blank.')
        cy.get("div[class='form-group field-signupbusinessapi-companydescription required has-error'] div[class='help-block']")
        .should('have.text','Company Description cannot be blank.')
        cy.get("body > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(10) > div:nth-child(1) > h2:nth-child(1)")
        .should('have.text','Registered Address')
        cy.get("div[class='form-group field-signupbusinessapi-companyaddress required has-error'] div[class='help-block']")
        .should('have.text','Company Address cannot be blank.')
        cy.get("div[class='form-group field-signupbusinessapi-companycity required has-error'] div[class='help-block']")
        .should('have.text','Company City cannot be blank.')
        cy.get("div[class='form-group field-signupbusinessapi-companypostcode required has-error'] div[class='help-block']")
        .should('have.text','Company Postcode cannot be blank.')
        cy.get("div[class='form-group field-signupbusinessapi-companycountry required has-error'] div[class='help-block']")
        .should('have.text','Company Country cannot be blank.')
        cy.reload()
        this.signup_Form3()
    }
    form4_validation(){
        this.signup_button()
        this.signup_Form1()
        this.Signup_Form2()
        this.signup_Form3()
        cy.get("button[type='submit']").should('be.visible').click()
        cy.get('[class="text-center service-title"]').eq(0).should('have.text','International Payments')
        cy.get('[class="text-center service-title"]').eq(1).should('have.text','Prepaid Cards')
        cy.reload()
        this.signuo_Form4()
    }
    form5_validation(){
        this.signup_button()
        this.signup_Form1()
        this.Signup_Form2()
        this.signup_Form3()
        this.signuo_Form4()
        cy.get("body > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)")
        .should('contain','Tell us a bit about how you expect to use the service')
        cy.scrollTo('bottom')
        cy.get('[type="submit"]').should('be.visible').click({force:true})
        cy.wait(2000)
        cy.get('.has-error [class="help-block"]').eq(0)
        .should;('have.text','Estimated Card Amount cannot be blank.')
        cy.get('.has-error [class="help-block"]').eq(1)
        .should('have.text','Estimated Monthly Card Non Atm Amount cannot be blank.')
        cy.get('.has-error [class="help-block"]').eq(2).should('have.text','Estimated Monthly Card Atm Amount cannot be blank.')
        cy.get('.has-error [class="help-block"]').eq(3).should('have.text','Estimated Monthly Card Load Amount cannot be blank.')
        cy.reload()
       // this.signup_Form5()
    }
    form6_validation(){
        this.signup_button()
        this.signup_Form1()
        this.Signup_Form2()
        this.signup_Form3()
        this.signuo_Form4()
        this.signup_Form5()
        cy.get('#submitBusinessForm div:nth-child(4) div:nth-child(2)').invoke('text').then(text=>{
            cy.wrap(text).as('companyEmail') //alias as companyEmail
        })
        cy.get('#submitBusinessForm div:nth-child(6) div:nth-child(2)').invoke('text').then(text=>{
            cy.wrap(text).as('SecurityAnswer')
        })
        
        cy.get('#submitBusinessForm div:nth-child(3) div:nth-child(2) a').should('contain.text','EDIT').click()
        cy.get('@companyEmail').then(companyEmail=>{
            cy.get('#signupbusinessapi-emailprimary').invoke('val').then(businessEmail=>{
                //const businessEmail = ele.text()
                cy.wrap(companyEmail).should('contain', businessEmail)
               
            })
        })
        cy.get('@SecurityAnswer').then(SecurityAnswer=>{
            cy.get('#signupbusinessapi-securityanswer').invoke('val').then(securityans=>{
                cy.wrap(SecurityAnswer).should('contain',securityans)
            })
        })
        cy.go('back')
        //Personal details varification
        cy.get('#submitBusinessForm div:nth-child(9) div:first-child').should('contain','Personal details')
        cy.get('div:nth-child(11) div:nth-child(2)').invoke('text').then(text=>{
            cy.wrap(text).as('FirstName')
        })
        //LastName Alias
        cy.get('div:nth-child(12) div:nth-child(2)').invoke('text').then(LastName=>{
            cy.wrap(LastName).as("LastName")
        })
        //PhoneNo alias
        cy.get('div:nth-child(14) div:nth-child(2)').invoke('text').then(PhoneNo=>{
            cy.wrap(PhoneNo).as("PhoneNo")
        })
        cy.get('#submitBusinessForm div:nth-child(9) div:nth-child(2) a').should('contain.text','EDIT').click()
        cy.get('@FirstName').then(FirstName=>{
            cy.get('#signupbusinessapi-firstname').invoke('val').then(Fname=>{
                cy.wrap(FirstName).should('contain',Fname)
            })
         })
         cy.get('@LastName').then(LastName=>{
                cy.get('#signupbusinessapi-lastname').invoke('val').then(Lname=>{
                    cy.wrap(LastName).should('contain',Lname)
                })
        })
        cy.get('@PhoneNo').then(PhoneNo=>{
            cy.get('#signupbusinessapi-telephonemobile').invoke('val').then(phonenumber=>{
                cy.wrap(PhoneNo).should('contain',phonenumber)
            })
        })
        cy.go('back')
        cy.get("button[type='submit']").click({force:true})
    }
    signup_passwordValidation(){
        this.signup_button()
        cy.get("div[class='form-group field-signupbusinessapi-emailprimary required'] div[class='col-sm-4']")
        .should('contain','Business Email Address')
        cy.get("#signupbusinessapi-emailprimary").type('Qatest')
        cy.get("div[class='form-group field-signupbusinessapi-password required'] div[class='col-sm-4']")
        .should('contain','Password')
        cy.get('#signupbusinessapi-password').type('testest12')
        cy.get("div[class='form-group field-signupbusinessapi-passwordconfirm required'] div[class='col-sm-4']")
        .should('have.text','Confirm Password')
        cy.get('#signupbusinessapi-passwordconfirm').type('testTest1')
        cy.get("button[type='submit']").click({force:true})
        cy.get("div[class='form-group field-signupbusinessapi-emailprimary required has-error'] div[class='help-block']")
        .should('contain','Email Primary is not a valid email address.')
        cy.get("div[class='form-group field-signupbusinessapi-password required has-error'] div[class='help-block']")
        .should('contain','Password must have at least 1 capital letter')
        cy.get("div[class='form-group field-signupbusinessapi-passwordconfirm required has-error'] div[class='help-block']")
        .should('contain','Passwords do not match')
           }


}