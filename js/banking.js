function inputValueStringToFloat(inputId) {
    const inputValue = document.getElementById(inputId);
    const inputAmountText = inputValue.value;
    const inputAmount = parseFloat(inputAmountText);

    // clear input value
    inputValue.value = '';

    return inputAmount;
}

function currentAmountStringToFloat(textId, totalAmount) {
    const Total = document.getElementById(textId);
    const TotalText = Total.innerText;
    const TotalAmount = parseFloat(TotalText);
    Total.innerText = totalAmount + TotalAmount;
}

function currentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalace(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');

    const previousBalanceTotal = currentBalance();

    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

document.getElementById('diposit-btn').addEventListener('click', function () {
    const dipositAmount = inputValueStringToFloat('diposit-input');
    if (dipositAmount > 0) {
        //get current diposit
        currentAmountStringToFloat('diposit-total', dipositAmount);

        // balance total
        updateBalace(dipositAmount, true);
    }
    else{
        alert('Please! Enter a valied amount.');
    }
});

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmount = inputValueStringToFloat('withdraw-input');
    const currentBalanceAmount = currentBalance();
    if(withdrawAmount > 0 && currentBalanceAmount > withdrawAmount){
        //get current Withdraw
    currentAmountStringToFloat('withdraw-total', withdrawAmount);

    // balance total
    updateBalace(withdrawAmount, false);
    }
    else{
        alert('Please! Enter a valied amount.');
    }
});

