document.getElementById("borrowForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const itemName = document.getElementById("itemName").value;
    const borrowerName = document.getElementById("borrowerName").value;
    const borrowDate = document.getElementById("borrowDate").value;

    const table = document.getElementById("borrowedItemsTable").getElementsByTagName('tbody')[0];

    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${itemName}</td>
        <td>${borrowerName}</td>
        <td>${borrowDate}</td>
        <td>ยืม</td>
    `;
    
    // ล้างฟอร์มหลังจากการยืม
    document.getElementById("borrowForm").reset();
});

document.getElementById("returnForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const returnItemName = document.getElementById("returnItemName").value;
    const returnerName = document.getElementById("returnerName").value;
    const returnDate = document.getElementById("returnDate").value;

    const table = document.getElementById("borrowedItemsTable").getElementsByTagName('tbody')[0];

    for (let row of table.rows) {
        if (row.cells[0].textContent === returnItemName && row.cells[3].textContent === "ยืม") {
            row.cells[3].textContent = "คืน";
            break;
        }
    }

    // ล้างฟอร์มหลังจากการคืน
    document.getElementById("returnForm").reset();
});
