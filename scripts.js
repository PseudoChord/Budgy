document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('budget-form');
    const tableBody = document.getElementById('budget-table').querySelector('tbody');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const date = document.getElementById('date').value;
        const description = document.getElementById('description').value;
        const amount = document.getElementById('amount').value;

        addEntryToTable(date, description, amount);

        form.reset();
    });

    function addEntryToTable(date, description, amount) {
        const row = document.createElement('tr');

        const dateCell = document.createElement('td');
        dateCell.textContent = date;
        row.appendChild(dateCell);

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = description;
        row.appendChild(descriptionCell);

        const amountCell = document.createElement('td');
        amountCell.textContent = amount;
        row.appendChild(amountCell);

        tableBody.appendChild(row);
    }
});
