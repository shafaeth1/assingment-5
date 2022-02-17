function updateIncome(isIncresing) {
    // food
    const foodInput = document.getElementById('food-input')
    const foodText = foodInput.value
    const foodTextAmount = parseFloat(foodText)
    foodInput.value = ''
    // rent
    const rentInput = document.getElementById('rent-input')
    const rentText = rentInput.value
    const rentAmount = parseFloat(rentText)
    rentInput.value = ''
    // clothes
    const clothesInput = document.getElementById('clothes-input')
    const clothesText = clothesInput.value
    const clothesAmount = parseFloat(clothesText)
    clothesInput.value = ''
    // expensesTotal
    const expensesTotal = document.getElementById('expenses-total')
    const expensesTotalText = expensesTotal.innerText
    const previousExpensesTotalText = parseFloat(expensesTotalText)
    const newnewDepositTotal = previousExpensesTotalText + foodTextAmount + rentAmount + clothesAmount
    expensesTotal.innerHTML = newnewDepositTotal

    // income
    const incomeInput = document.getElementById('income-input')
    const newincomeInputtext = incomeInput.value
    const newIncome = parseFloat(newincomeInputtext)
    // Balance
    const BalanceTotal = document.getElementById('balance-total')
    const priviousBalanceText = BalanceTotal.innerText
    const priviousBalanceAmount = parseFloat(priviousBalanceText)

    const newBalanceTotalAmount = newIncome - newnewDepositTotal - priviousBalanceAmount
    // error
    if (isNaN(newBalanceTotalAmount) || newBalanceTotalAmount < 0) {
        return alert('pleses input error valid')
    }
    BalanceTotal.innerText = newBalanceTotalAmount
    // incomeInput.value = ''
}
// calculate button
document.getElementById('calculate-btn').addEventListener(
    'click', function () {
        updateIncome()
    }
)

// save button
document.getElementById('save-btn').addEventListener(
    'click', function () {
        // total save
        const saveInput = document.getElementById('save-input')
        const saveText = saveInput.value
        const saveTextAmount = parseFloat(saveText)
        saveInput.value = ''

        const incomeInput = document.getElementById('income-input')
        const newincomeInputtext = incomeInput.value
        const newIncome = parseFloat(newincomeInputtext)

        const savingTotal = document.getElementById('saving-total')
        const savingTotalText = savingTotal.innerText
        const savingTotalAmount = parseFloat(savingTotalText)


        const save = (newIncome * saveTextAmount) / 100
        // error
        if (isNaN(save) || save < 0) {
            return alert('pleses input error valid')
        }
        savingTotal.innerText = save
        savingTotalAmount.value = ''

        // remaningBalance
        const BalanceTotal = document.getElementById('balance-total')
        const priviousBalanceText = BalanceTotal.innerText
        const priviousBalanceAmount = parseFloat(priviousBalanceText)

        const remaningBalanceTotal = document.getElementById('remaning-balance-total')
        const remaningBalanceTotalText = remaningBalanceTotal.innerText
        const remaningBalanceTotalTextAmount = parseFloat(remaningBalanceTotalText)
        remaningBalanceTotalTextAmount.value = ''
        const remaningBalance = priviousBalanceAmount - save
        // error
        if (isNaN(remaningBalance) || remaningBalance < 0) {
            return alert('pleses input error valid')
        }
        remaningBalanceTotal.innerText = remaningBalance

    }
)
