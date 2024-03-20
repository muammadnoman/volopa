const variable1= require('../PageElements/wallet.json')
const variable = require('../PageElements/ConvertBalance.json')
export class walletPageActions{

validateDashboard(){
  let value=0
cy.get(variable1.walletPageLocators.walletDashboard).should('have.text','Wallet Dashboard')
cy.get(variable1.walletPageLocators.TotalBAlance).should('have.text','Total Company Balance')
//getting and validate amount 
// cy.get('div[class="ant-col"] [class="ant-typography  bold fs-28px"]').eq('0').invoke('text').as('Totalamount')
// cy.get('@Totalamount').then((text)=>{
//   cy.log('Text of the element:', text);
// })
// cy.get('div[class="ant-col"] [class="ant-typography  bold fs-28px"]').eq(1).invoke('text').then(()=>{
//   const wbalance= text;
//   value+=wbalance;
// })
// cy.get('div[class="ant-col"] [class="ant-typography  bold fs-28px pointer"]').invoke('text').then(()=>{
//   const cbalance=text;
//   value += text;
// })
cy.get(variable1.walletPageLocators.W_Balance).should('have.text','Wallet Balance')
cy.get(variable1.walletPageLocators.C_Balance).should('have.text','Cards Balance')
cy.get(variable1.walletPageLocators.walletBreakDown).should('contain','Wallet Breakdown')
cy.get(variable1.walletPageLocators.istCurrency).should('be.visible')
cy.get(variable1.walletPageLocators.recentActivity).should('contain','Recent Activity')
cy.get(variable1.walletPageLocators.recentFundingHistory).should('contain','Recent Funding History')
cy.get(variable1.walletPageLocators.istRecentHistory).should('be.visible')
cy.get(variable1.walletPageLocators.viewAll_History).click({force:true})
cy.url().should('include','funding-history')
cy.go('back')
cy.get(variable1.walletPageLocators.rateChecker).should('contain','Rate Checker')
cy.get(variable1.walletPageLocators.convert_balance).should('be.visible')
cy.get(variable1.walletPageLocators.fundCard).should('be.visible')
cy.get(variable1.walletPageLocators.fundWallet).should('be.visible')
}    
Validate_total_Balance(){
 // getting and validate amount 
 cy.wait(3000)
cy.get('div[class="ant-col"] [class="ant-typography  bold fs-28px"]').eq(0).then($element=>{
cy.wrap($element).as('Totalamount')
})
let value
let wbalance
let cbalance
cy.wait(3000)
cy.get('div[class="ant-col"] [class="ant-typography  bold fs-28px"]').eq(1).then((ele)=>{
  wbalance= ele.text().trim()
  cy.log(ele)
  cy.pause()
  wbalance = wbalance.replace(/,/g, '');
  cy.log(wbalance)
  if (!isNaN(wbalance)) {
    // Add floatValue to totalValue
    value += wbalance;

    // Log the total value
    cy.log('Total value:', value);
  } else {
    // Handle the case where floatValue is not a valid number
    cy.log('Invalid floating-point value:', wbalance);
  }

  cy.log(value)
cy.wait(2000)
cy.get('div[class="ant-col"] [class="ant-typography  bold fs-28px pointer').then((ele1)=>{
  cy.log(ele1)
  cbalance=ele1.text().trim()
  cbalance = cbalance.replace(/,/g, '');
  cy.log(cbalance)
  if (!isNaN(cbalance)) {
    // Add floatValue to totalValue
    value += cbalance;

    // Log the total value
    cy.log('Total value:', value);
  } else {
    // Handle the case where floatValue is not a valid number
    cy.log('Invalid floating-point value:', cbalance);
  }
  
  cy.log(value)
  cy.get('@Totalamount').then(Totalamount=>
    {
  //expect(cy.wrap(value).to.be.eq(Totalamount))
  //expect(value).to.eq(Totalamount)
  cy.wrap(value).should('eq', Totalamount);
    })
})
})
}
validate_RateChecker_Calculator(){
  cy.get(variable1.walletPageLocators.rateChecker).should('contain','Rate Checker')
  cy.get(variable1.walletPageLocators.convertTo).type('HKD{enter}')
  cy.get(variable1.walletPageLocators.convertFrom).type('GBP{enter}')
  cy.get(variable1.walletPageLocators.convertFromValue).type(2)
  cy.get(variable1.walletPageLocators.convertBtn).should('be.visible').click()
  cy.url().should('include','convert-balances')
  cy.get("button[type='submit'] span").should('be.visible').click()
  cy.wait(3000)
  this.VerifyConvertionComleted()
}
//check total wallet balnace from convert balance from wallet dash board 
Total_Wallet_Balance(){
  cy.get(variable1.walletPageLocators.convert_balance).click()
 // cy.get(variable.CompanyWalletBalance.Viewallcurrencies).click()
  let sum = 0;
        cy.wait(5000)
        // Get all elements matching the locator and iterate over them
        cy.get(variable.CompanyWalletBalance.Viewallcurrencies).click()
        cy.get('.ant-table-row td:nth-child(4)').each(($el) => {
            // Extract the text value from each element and convert it to a number
            const value = parseFloat($el.text());
            // Check if the extracted value is a valid number
            if (!isNaN(value)) {
                // Add the value to the sum
                sum += value;
            }
        }).then(() => {
            // Log the sum
            cy.log('Sum of values:', sum);
            // Assert the sum value or use it for further processing
            cy.get(variable.CompanyWalletBalance.TotalEURvalue).should('contain',sum)
        });
}
validateConvertBalances(){
    //click on convert balance on wallet dashboard
    cy.get(variable1.walletPageLocators.convert_balance).click()
    //to check the user is on convert balances page
    cy.url().should('include','convert-balances')
    cy.get(variable1.walletPageLocators.convert_balance_page).should('have.text','Convert Balances')
    //enter details
    cy.get(variable1.walletPageLocators.convertTo).type('GBP{enter}')
    cy.get(variable1.walletPageLocators.convertFrom).type('EUR{enter}')
    cy.get(variable1.walletPageLocators.convertFromValue).type(2)
    //to check convert button is enabled 
    cy.get(variable1.walletPageLocators.convertBtn).should('be.enabled')
    cy.get(variable1.walletPageLocators.convertBtn).click()
    cy.wait(10000)
    //after converting check whether the conversion is completed or not
    cy.get(variable1.walletPageLocators.assertion1).should('have.text',"Conversion Complete")
    cy.wait(4000)
    //assertion to check the amount on conversion complete popup and recent activity are same
    let c1;
    let c2;
    cy.get(variable1.walletPageLocators.value1).invoke('val').then((text1)=>{
         c1=text1.trim()
        cy.log('Value1:',c1);
    })

    cy.get(variable1.walletPageLocators.value2).invoke('val').then((text2)=>{
         c2=text2.trim()
        cy.log('Value2:',c2);
     }).then(()=>{
        cy.wait(5000)
    cy.get(variable1.walletPageLocators.dashboard).click()
    cy.wait(5000)
    cy.get(variable1.walletPageLocators.istrecent).click()
    cy.get(variable1.walletPageLocators.Valuee1).invoke('text').should('contain',c1)
    cy.get(variable1.walletPageLocators.Valuee2).invoke('text').should('contain',c2)
      
})
}
VerifyConvertionComleted(){
  cy.get(variable1.walletPageLocators.assertion1).should('have.text',"Conversion Complete")
    cy.wait(4000)
    //assertion to check the amount on conversion complete popup and recent activity are same
    let c1;
    let c2;
    cy.get(variable1.walletPageLocators.value1).invoke('val').then((text1)=>{
         c1=text1.trim()
        cy.log('Value1:',c1);
    })

    cy.get(variable1.walletPageLocators.value2).invoke('val').then((text2)=>{
         c2=text2.trim()
        cy.log('Value2:',c2);
     }).then(()=>{
        cy.wait(5000)
    cy.get(variable1.walletPageLocators.dashboard).click()
    cy.wait(5000)
    cy.get(variable1.walletPageLocators.istrecent).click()
    cy.get(variable1.walletPageLocators.Valuee1).invoke('text').should('contain',c1)
    cy.get(variable1.walletPageLocators.Valuee2).invoke('text').should('contain',c2)
})
}
//from wallet dashboard convert balance in any other curancy and validate insificent balance 
validate_Insificent_balance (){
  //click on convert balance on wallet dashboard
  cy.get(variable1.walletPageLocators.convert_balance).click()
  //to check the user is on convert balances page
  cy.url().should('include','convert-balances')
  cy.get(variable1.walletPageLocators.convert_balance_page).should('have.text','Convert Balances')
  //enter details
  cy.get(variable1.walletPageLocators.convertTo).type('GBP{enter}')
  cy.get(variable1.walletPageLocators.convertFrom).type('EUR{enter}')
  cy.get(variable1.walletPageLocators.convertFromValue).type(1000)
  //to check convert button is enabled 
  cy.get(variable1.walletPageLocators.convertBtn).should('be.enabled')
  cy.get(variable1.walletPageLocators.convertBtn).click()
  cy.wait(10000)
  //after converting check whether the conversion is completed or not
  cy.get(variable1.walletPageLocators.assertion1).should('have.text',"Insufficient funds, please check your balance.")
  cy.wait(4000)
  //assertion to check the amount on conversion complete popup and recent activity are same
  let c1;
  let c2;
  cy.get(variable1.walletPageLocators.value1).invoke('val').then((text1)=>{
       c1=text1.trim()
      cy.log('Value1:',c1);
  })

  cy.get(variable1.walletPageLocators.value2).invoke('val').then((text2)=>{
       c2=text2.trim()
      cy.log('Value2:',c2);
   }).then(()=>{
      cy.wait(5000)
  cy.get(variable1.walletPageLocators.dashboard).click()
    
})
}
validateFundWallet(){
    cy.get(variable1.walletPageLocators.fundWallet).click()
    cy.get(variable1.walletPageLocators.fundWalletPage).should('have.text','Fund Your Company Wallet')
    cy.get(variable1.walletPageLocators.currency1).type('GBP{enter}')
    cy.get(variable1.walletPageLocators.amount1).type(100)
    cy.get(variable1.walletPageLocators.description1).type('script testing')
    cy.get(variable1.walletPageLocators.confirmButton1).should('be.visible')
    cy.get(variable1.walletPageLocators.confirmButton1).click()
    cy.wait(5000)
    cy.get(variable1.walletPageLocators.passwordField).type('testTest1')
}
unhappySearch(){
    cy.get(variable1.walletPageLocators.fundingHistory).click()
    cy.get(variable1.walletPageLocators.fundingHistory1).click()
    cy.get(variable1.walletPageLocators.fundingHistoryPage).should('have.text','Your Transaction History')
    cy.get(variable1.walletPageLocators.searchButton).click()
    cy.log('Enter input to search something')
}
happySearch(){
    cy.get(variable1.walletPageLocators.fundingHistory).click()
    cy.get(variable1.walletPageLocators.fundingHistory1).click()
    cy.get(variable1.walletPageLocators.fundingHistoryPage).should('have.text','Your Transaction History')
    //assertion to check the admin colum text contains inputted text

    const search= 'alex';
    cy.get(variable1.walletPageLocators.searchInput).type(search)
    cy.get(variable1.walletPageLocators.searchButton).click()
    cy.wait(5000)
    //Iterate over each row based on the data-row-key attribute
    //if want to remove assertion use cy.get(variable1.walletPageLocators.transactionRow).should('exist')
    cy.get(variable1.walletPageLocators.transactionRow).each((transactionRow) => {
        const rowKey = transactionRow.attr('data-row-key');
        // Construct the selector for the admin column in the current row
        const adminColumnSelector = `[data-row-key="${rowKey}"]${variable1.walletPageLocators.adminColumn}`;
        cy.get(adminColumnSelector).then((adminColumn) => {
        const adminColumnText = adminColumn.text().trim();  
        // Assert that the admin name in each row contains the search term
        expect(adminColumnText).to.include(search);    
        });
        
    });
    // cy.get(variable1.walletPageLocators.nextPageButton).then(($nextPageButton) => {
    //   if ($nextPageButton.is(':visible')) {
    //     cy.log('Navigating to the next page');
    //     cy.get(variable1.walletPageLocators.pageSelector).click();
    //     this.happySearch();
    //   } else {
    //     cy.log('No more pages to validate');
    //   }
    // });
}
validatePagination(){
    cy.get(variable1.walletPageLocators.fundingHistory).click()
    cy.get(variable1.walletPageLocators.fundingHistory1).click()
    cy.get(variable1.walletPageLocators.fundingHistoryPage).should('have.text','Your Transaction History')

  // Start iterating from page number1
  function checkPagination(pageNumber) {
    cy.get(variable1.walletPageLocators.transactionRow).should('exist');

    // Navigate to the next page if it exists
    cy.get(variable1.walletPageLocators.nextPageButton).then((nextPageButton) => {
      if (nextPageButton.is(':enabled')) {
        // Click on the next page button
        cy.get(variable1.walletPageLocators.nextPageButton).click();
        cy.wait(4000)
        checkPagination(pageNumber + 1);
      }
    });
  }
  checkPagination(1);
}
validateAmountSorting() {
    cy.get(variable1.walletPageLocators.fundingHistory).click()
    cy.get(variable1.walletPageLocators.fundingHistory1).click()
    cy.get(variable1.walletPageLocators.fundingHistoryPage).should('have.text','Your Transaction History')
    cy.get(variable1.walletPageLocators.amountButton).click()
    cy.wait(5000)
    cy.get(variable1.walletPageLocators.transactionRow).then(($transactionRows) => {
    const totalRows = $transactionRows.length;
    // Previous amount for comparison
    let previousAmount;
    // Loop through each transaction row
    for (let i = 0; i < totalRows; i++) {
      // Construct the current amount selector
      const currentAmountSelector = variable1.walletPageLocators.amountColumn.replace('{rowNumber}', i);
      //cy.log(currentAmountSelector)//to see what exactly the locator is
      // Get the current amount and parse it
      cy.get(currentAmountSelector).invoke('text').then((currentAmountString) => {
        const currentAmount = parseFloat(currentAmountString.replace(/[^\d.]/g, ''));
        // Check if it's the first row or not
        if (i === 0) {
          // First row, no previous amount to compare
          previousAmount = currentAmount;
        } else {
          // Compare current amount with previous amount
          expect(currentAmount).to.be.gte(previousAmount);
          // Update previous amount for next iteration
          previousAmount = currentAmount;
        }
      });
    }
  });

  // Check for the next page button if exist go to next page and repeat
  cy.get(variable1.walletPageLocators.nextPageButton).then(($nextPageButton) => {
    if ($nextPageButton.is(':visible')) {
      cy.log('Navigating to the next page');
      cy.get(variable1.walletPageLocators.pageSelector).click();
      this.validateAmountSorting();
    } else {
      cy.log('No more pages to validate');
    }
  });
}}//class end