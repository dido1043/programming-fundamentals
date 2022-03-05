function task(availableStock, deliveredStock) {
    let storeProds = {};
    for (let i = 0; i < availableStock.length; i += 2) {
        let current = availableStock[i];
        storeProds[current] = Number(availableStock[i + 1]);
        //console.log(storeProds);
    }
    for (let i = 0; i < deliveredStock.length; i += 2) {
        let current = deliveredStock[i];
        if (!storeProds.hasOwnProperty(current)) {
            storeProds[current] = 0;
        }
        storeProds[current] += Number(deliveredStock[i + 1]);
    }
    for (let product of Object.keys(storeProds)) {
        console.log(`${product} -> ${storeProds[product]}`);
    }
}
task([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);