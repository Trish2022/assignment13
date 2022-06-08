function bankAccount(ownerName) {
    let nameButton = document.getElementById('nameBtn');   
    let ownerNm = nameButton.addEventListener('click', function() { 
     prompt('Enter your name as it appears on your account');
     return
});
console.log(ownerNm);

    let depositButton = document.getElementById('depositBtn');
    let depositAmt = depositButton.addEventListener('click', function() {
      parseInt(prompt('How much money would you like to deposit?'));
      return
})
console.log(depositAmt);

    let withdrawalButton = document.getElementById('withdrawalBtn');
    let withdraw = withdrawalButton.addEventListener('click', function() {
        parseInt(prompt('How much money would you like to withdraw?'));
        return;
})
console.log(withdraw);

let balance = 0;
function innerBankAction(action, sum) {
        if (action == 'deposit') {
            balance += sum;
        }
        if (action == 'withdrawal') {
            balance -= sum;
        }
        return 'Your balance is $' + balance;
    }
    return innerBankAction
}
    let bankAction = bankAccount();
    // let divCont = window.document.getElementById('account');

bankAction('deposit', depositAmt);
bankAction('withdrawal', withdraw);

//     let owner = ownerName;
//     function withdrawal(withdrawalAmount){
//         balance -= withdrawalAmount;
//     }
//     function deposit(depositAmount) {
//         balance +=depositAmount;
//     }
    
//     return bankAccount();
// }

// => {
//     document.getElementById('Name').onclick = createClickCounter();
//     document.getElementById('button2').onclick = createClickCounter();
// });

// 1.	Create a function called bankAccount that accepts a single parameter: ownerName.
// 2.	Add local variables balance and owner. Owner should be set by the incoming parameter.
// 3.	Return an object with methods for withdrawal that accepts a parameter (withdrawalAmount), deposit that accepts a parameter (depositAmount), getBalance(), and getOwnerName().
// 4.	Add validation to ensure only appropriate withdrawals and deposits are allowed.
// 5.	The balance and ownerName methods will return the values of the private variables.
// 6.	The withdrawal function will withdrawal money from the owner’s bank account and the balance should be reflected.
// 7.	The deposit function should add money to the owner’s bank account and the balance should be reflected.
