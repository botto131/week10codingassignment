// Event listener for the form
document.getElementById('grocery-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get the values that are input in the form fields
    let itemName = document.getElementById('item-name').value.trim();
    let itemQuantity = document.getElementById('item-quantity').value.trim();

    // Ensure both fields have values
    if (itemName !== "" && itemQuantity !== "") {
        // Add the new item to the table
        addGroceryItem(itemName, itemQuantity);

        // Clear the form fields after submission-- so that the user can type in more items to add to the list
        document.getElementById('item-name').value = '';
        document.getElementById('item-quantity').value = '';
    } else {
        alert("Please enter both item name and quantity.");
    }
});

// Function to add a new row to the grocery list
function addGroceryItem(name, quantity) {
    // Get the table body where the items will be added
    let table = document.getElementById('grocery-list');

    // Create a new row
    let row = table.insertRow();

    // Insert cells for the item name, quantity, and actions
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    // Set the text content of the cells
    cell1.textContent = name;
    cell2.textContent = quantity;

    // Create a delete button
    let deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.textContent = 'Delete';

    // Add an event listener to the delete button to remove the row
    deleteButton.addEventListener('click', function() {
        table.deleteRow(row.rowIndex - 1);
    });

    // Append the delete button to the actions cell
    cell3.appendChild(deleteButton);
}