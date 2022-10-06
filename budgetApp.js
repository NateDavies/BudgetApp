var incomeCatTextbox = document.getElementById('incomeCategory');
var expenseCatTextbox = document.getElementById('expenseCategory');
var incomeAdder = document.getElementById('incomeAdder');
var expenseAdder = document.getElementById('expenseAdder');
var incomeCats = document.getElementById('incomeCategories');
var expenseCats = document.getElementById('expenseCategories');
var incomeList = document.getElementById('incomeList');
var expenseList = document.getElementById('expenseList');
var money = document.getElementById('money');
let incomeAmount;
let expenseAmount;
let totalMoney = 0;

incomeAdder.addEventListener('click', addIncomeCategory);
expenseAdder.addEventListener('click', addExpenseCategory);
incomeCats.addEventListener('click', deleteCategory);
expenseCats.addEventListener('click', deleteCategory);
incomeCats.addEventListener('click', incomeUpdate);
expenseCats.addEventListener('click', expenseUpdate);
incomeList.addEventListener('click', deleteIncomeItem);
expenseList.addEventListener('click', deleteExpenseItem);

function addIncomeCategory(e) {

    e.preventDefault();
        
    //Get input value
    var incomeCategoryName = document.getElementById('incomeCategory').value   
    e.target.previousSibling.value = "";      
    
    // Create New li Element
    var incomeLi = document.createElement('li');
    incomeLi.className = 'incomeLi';
    
    // Create new form element
    var incomeCategory = document.createElement('form');
    incomeCategory.className = 'incomeCategory'
    incomeLi.appendChild(incomeCategory)
    
    // Create new label element for the form
    var incomeLabel = document.createElement('label');
    
    // Add user input as label
    incomeLabel.textContent = incomeCategoryName;
    incomeLabel.classList = 'text'; 
    incomeCategory.appendChild(incomeLabel);
    
    // Create new input elements for the form
    var incomeText = document.createElement('input');
    incomeText.type = 'text';
    incomeText.classList.add('incomeTextbox');
    incomeText.id = `${incomeCategoryName}Category`
    incomeCategory.appendChild(incomeText);
    
    var incomeSubmit = document.createElement('input');
    incomeSubmit.type = 'submit';
    incomeSubmit.value = 'Update';
    incomeSubmit.className = 'incomeCatUpdate'; 
    incomeSubmit.id = `${incomeCategoryName}Update`;
    incomeCategory.appendChild(incomeSubmit);
    
    //Create delete button element
    var deleteIncomeCat = document.createElement('button');
    deleteIncomeCat.className = 'incomeCatDelete';
    deleteIncomeCat.innerText = 'Delete';
    deleteIncomeCat.id = `${incomeCategoryName}Delete`;
    
    //Append delete button to li
    incomeCategory.appendChild(deleteIncomeCat);
    
    //Append the new li to the existing ul
    incomeCats.appendChild(incomeLi);

    incomeCatTextbox.setAttribute('placeholder', "");

    e.target.previousElementSibling.value = "";

    e.target.previousElementSibling.focus();
};

function addExpenseCategory(e){
    
    e.preventDefault();

    var expenseCategoryName = document.getElementById('expenseCategory').value;
    
    var expenseLi = document.createElement('li');
    expenseLi.className = 'expenseLi';
    
    var expenseCategory = document.createElement('form');
    expenseCategory.className = 'expenseCategory'
    expenseLi.appendChild(expenseCategory)
    
    var expenseLabel = document.createElement('label');
    expenseLabel.textContent = expenseCategoryName;
    expenseLabel.classList = 'text';
    expenseCategory.appendChild(expenseLabel);
    
    var expenseText = document.createElement('input');
    expenseText.type = 'text';
    expenseText.classList.add('expenseTextbox');
    expenseText.id = `${expenseCategoryName}Category`
    expenseCategory.appendChild(expenseText);
    
    var expenseSubmit = document.createElement('input');
    expenseSubmit.type = 'submit';
    expenseSubmit.value = 'Update';
    expenseSubmit.className = 'expenseCatUpdate'; 
    expenseSubmit.id = `${expenseCategoryName}Update`;
    expenseCategory.appendChild(expenseSubmit);
    
    var deleteExpenseCat = document.createElement('button');
    deleteExpenseCat.className = 'expenseCatDelete';
    deleteExpenseCat.innerText = 'Delete';
    deleteExpenseCat.id = `${expenseCategoryName}Delete`;
    expenseCategory.appendChild(deleteExpenseCat);
    
    expenseCats.appendChild(expenseLi);

    expenseCatTextbox.setAttribute('placeholder', "");

    e.target.previousElementSibling.value = "";

    e.target.previousElementSibling.focus();
};

function deleteCategory(e) {
    if (e.target.className === 'incomeCatDelete' || e.target.className ===  'expenseCatDelete') {
        var li = e.target.parentElement;
        li.remove();
    };
};

function incomeUpdate(e) {
    if (e.target.className === 'incomeCatUpdate') {
        e.preventDefault();
        
        // Create a new income line item
        var incomeType = e.target.parentElement.firstElementChild.textContent;
        incomeAmount = e.target.previousElementSibling.value;
        incomeAmount = incomeAmount.replace(",", "");
        incomeAmount = incomeAmount.replace("$", "");
        incomeAmount = Number(incomeAmount);

        if (!isNaN(incomeAmount)) {

            var newIncome = document.createElement('li');
            newIncome.classList.add('income');
            newIncome.classList.add('text');
            newIncome.id = `${incomeType}Income`;
            newIncome.textContent = `${incomeType} $${incomeAmount} `;
    
            var incomeDelete = document.createElement('button');
            incomeDelete.className = 'incomeDelete';
            incomeDelete.innerText = 'X';
            incomeDelete.id = `${incomeType}IncomeDelete`
    
            newIncome.appendChild(incomeDelete);
    
            incomeList.appendChild(newIncome);
    
            // Update the money total
            totalMoney += incomeAmount;
            money.textContent = `Money Remaining: $${totalMoney}`;
            if (!money.classList.contains('updatedMoney')) {
                money.classList.add('updatedMoney');
            }

        } else {

            alert("Input must be a number.");
        };

        // Clear the field
        e.target.previousElementSibling.value = "";
    }
};

function expenseUpdate(e) {
    if (e.target.className === 'expenseCatUpdate') {
        e.preventDefault();
        
        var expenseType = e.target.parentElement.firstElementChild.textContent;
        expenseAmount = e.target.previousElementSibling.value;
        expenseAmount = expenseAmount.replace(",", "");
        expenseAmount = expenseAmount.replace("$", "");
        expenseAmount = Number(expenseAmount);

        if (!isNaN(expenseAmount)) {

            var newExpense = document.createElement('li');
            newExpense.classList.add('expense');
            newExpense.classList.add('text');
            newExpense.id = `${expenseType}Expense`;
            newExpense.textContent = `${expenseType} $${expenseAmount} `;
    
            var expenseDelete = document.createElement('button');
            expenseDelete.className = 'expenseDelete';
            expenseDelete.innerText = 'X';
            expenseDelete.id = `${expenseType}ExpenseDelete`;
    
            newExpense.appendChild(expenseDelete);
    
            expenseList.appendChild(newExpense);
    
            totalMoney -= expenseAmount;
            money.textContent = `Money Remaining: $${totalMoney}`;
            if (!money.classList.contains('updatedMoney')) {
                money.classList.add('updatedMoney');
            }

        } else {

            alert("Input must be a number.");
        };

        e.target.previousElementSibling.value = "";
    }
};

function deleteIncomeItem(e) {
    if (e.target.className === 'incomeDelete') {

        // Remove the line item
        var income = e.target.parentElement;
        income.remove();

        //Extract numerical value from line item string
        incomeAmount = e.target.parentElement.textContent;
        var position = incomeAmount.indexOf('$');
        incomeAmount = incomeAmount.slice(position + 1);
        incomeAmount = incomeAmount.replace('X', '');
        incomeAmount = incomeAmount.replace(" ", "");
        incomeAmount = Number(incomeAmount);
        
        //Update the total
        totalMoney -= incomeAmount;
        money.textContent = `Money Remaining: $${totalMoney}`;
        if (!money.classList.contains('updatedMoney')) {
            money.classList.add('updatedMoney');
        }
     }
};

function deleteExpenseItem(e) {
    if (e.target.className === 'expenseDelete') {

        var expense = e.target.parentElement;
        expense.remove();

        expenseAmount = e.target.parentElement.textContent;
        var position = expenseAmount.indexOf('$');
        expenseAmount = expenseAmount.slice(position + 1);
        expenseAmount = expenseAmount.replace('X', '');
        expenseAmount = expenseAmount.replace(" ", "");
        expenseAmount = Number(expenseAmount);
        
        totalMoney += expenseAmount;
        money.textContent = `Money Remaining: $${totalMoney}`;
        if (!money.classList.contains('updatedMoney')) {
            money.classList.add('updatedMoney');
        }
    }
};





















// function removeItem(e) {
//     if(e.target.classList.contains('xButton')){
//         if(confirm('Are you sure?')){
//             var li = e.target.parentElement;  //the list item is the parent of the x button
//             itemList.removeChild(li); 
//         }
//     }
// }
    

