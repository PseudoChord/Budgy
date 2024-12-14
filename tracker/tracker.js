let totalIncome = 0;
let totalExpenses = 0;

document.getElementById('addIncome').addEventListener('click', () => {
  const incomeAmount = parseFloat(document.getElementById('incomeAmount').value);
  if (!isNaN(incomeAmount) && incomeAmount > 0) {
    totalIncome += incomeAmount;
    document.getElementById('totalIncome').innerText = totalIncome;
    document.getElementById('incomeAmount').value = '';
  }
});

document.getElementById('addExpense').addEventListener('click', () => {
  const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);
  const expenseCategory = document.getElementById('expenseCategory').value;
  if (!isNaN(expenseAmount) && expenseAmount > 0 && expenseCategory !== '') {
    totalExpenses += expenseAmount;
    document.getElementById('totalExpenses').innerText = totalExpenses;

    const listItem = document.createElement('li');
    listItem.textContent = `${expenseCategory}: $${expenseAmount}`;
    document.getElementById('expenseList').appendChild(listItem);

    document.getElementById('expenseAmount').value = '';
  }
});

document.getElementById('showIncome').addEventListener('click', () => {
  document.getElementById('incomeSection').classList.remove('d-none');
  document.getElementById('expenseSection').classList.add('d-none');
});

document.getElementById('showExpense').addEventListener('click', () => {
  document.getElementById('incomeSection').classList.add('d-none');
  document.getElementById('expenseSection').classList.remove('d-none');
});
