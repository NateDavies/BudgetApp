// npm install selenium-webdriver
// npm install geckodriver
// https://github.com/mozilla/geckodriver/releases/
// node sel.js; code below





    
    const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

    const driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();
    driver.get('file:///C:/Users/Nathan/Desktop/Projects/BudgetApp/index.html');


    clickButton('incomeCategory')
    driver.findElement(webdriver.By.id('incomeCategory')).sendKeys('Work\n')
    driver.wait(until.elementLocated(By.id('incomeCategory')), 5000).then(el => {
      el.getAttribute('value').then( text => {
      if (text === 'Work') {
        console.log("Test Passed")
      } else {
        console.log(`Error: ${text}`)
      }
    });
  });
    clickButton("incomeAdder");
    driver.wait(until.elementLocated(By.id('WorkCategory')), 5000).then(el => {
      el.sendKeys('7000');
    })
    driver.wait(until.elementLocated(By.id('WorkCategory')), 5000).then(el => {
      el.getAttribute('value').then(value => {
        if (value == "7000") {
        console.log("Test Passed")
      } else {
        console.log(`Error: ${value}`)
      }
    });
    });
    driver.wait(until.elementLocated(By.id('WorkUpdate')), 10000).then(el => {
      el.click()
    })
     .then(driver.wait(until.elementLocated(By.id('WorkIncome')), 10000).then(el => {
       el.getText().then(text => {
        if (text === 'Work $7000 X') {
          console.log('Test Passed')
        } else {
          console.log(`Error: ${text}`)
        }
      })}
      ));

   clickButton('expenseCategory')
   driver.findElement(webdriver.By.id('expenseCategory')).sendKeys('Mortgage\n')
   driver.wait(until.elementLocated(By.id('expenseCategory')), 5000).then(el => {
     el.getAttribute('value').then( text => {
     if (text === 'Mortgage') {
       console.log("Test Passed")
     } else {
       console.log(`Error: ${text}`)
     }
   });
 });
   clickButton("expenseAdder");
   driver.wait(until.elementLocated(By.id('MortgageCategory')), 10000).then(el => {
     el.sendKeys('1200');
   });
   driver.wait(until.elementLocated(By.id('MortgageCategory')), 10000).then(el => {
     el.getAttribute('value').then(value => {
       if (value === '1200') {
       console.log("Test Passed")
    } else {
       console.log(`Error: ${value}`)
       }
     });
   })
   driver.wait(until.elementLocated(By.id('MortgageUpdate')), 10000).then(el => {
     el.click()
  })
    .then(driver.wait(until.elementLocated(By.id('MortgageExpense')), 10000).then(el => {
      el.getText().then(text => {
       if (text === 'Mortgage $1200 X') {
         console.log('Test Passed')
       } else {
         console.log(`Error: ${text}`)
       }
    })}
  ))
  .then(driver.wait(until.elementLocated(By.className('updatedMoney')), 12000).then( el => {
    el.getText().then( text => {
      if (text === "Money Remaining: $5800") {
        console.log('Test Passed');
      } else {
        console.log(`Error: ${text}`);
      }
  })}
  ));
  driver.wait(until.elementLocated(By.id('MortgageExpenseDelete')), 10000).then(el => {
    el.click()
  })
  .then(driver.wait(until.elementLocated(By.className('updatedMoney')), 12000).then( el => {
    el.getText().then( text => {
      if (text === "Money Remaining: $7000") {
        console.log('Test Passed');
      } else {
        console.log(`Error: ${text}`);
      }
  })}
  ));
  driver.wait(until.elementLocated(By.id('WorkIncomeDelete')), 10000).then(el => {
    el.click()
  })
  .then(driver.wait(until.elementLocated(By.className('updatedMoney')), 12000).then( el => {
    el.getText().then( text => {
      if (text === "Money Remaining: $0") {
        console.log('Test Passed');
      } else {
        console.log(`Error: ${text}`);
      }
  })}
  ));
  driver.wait(until.elementLocated(By.id('WorkDelete')), 10000).then(el => {
    el.click()
  });
  driver.wait(until.elementLocated(By.id('MortgageDelete')), 10000).then(el => {
    el.click()
  });









    function clickButton(button) {
            driver.findElement(webdriver.By.id((button))).click()
          }



  

    // driver.quit();

  