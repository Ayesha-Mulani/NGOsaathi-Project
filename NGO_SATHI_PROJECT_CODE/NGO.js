app.get('/inventory', (req, res) => {
    const query = 'SELECT item_type, item_name, quantity, expiry_date FROM inventory';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error fetching inventory data' });
        } else {
            res.json(results);
        }
    });
});


fetch('http://localhost:3000/inventory')
    .then(response => response.json())
    .then(data => {
        const inventoryTable = document.getElementById('inventoryData');
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.item_type}</td>
                <td>${item.item_name}</td>
                <td>${item.quantity}</td>
                <td>${item.expiry_date || 'N/A'}</td>
            `;
            inventoryTable.appendChild(row);
        });
    });