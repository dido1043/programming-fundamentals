function orders(str, n) {
    const coffeePrice = 1.50;
    const waterPrice = 1.00;
    const cokePrice = 1.40;
    const snacksPrice = 2.00;

    let result = 0;
    switch (str) {
        case 'coffee':
            result = (n * coffeePrice).toFixed(2);
            return result;
        case 'water':
            result = (n * waterPrice).toFixed(2);
            return result;

        case 'coke':
            result = (n * cokePrice).toFixed(2);
            return result;

        case 'snacks':
            result = (n * snacksPrice).toFixed(2);
            return result;
    }

}
console.log(orders("water", 5));
console.log(orders("coffee", 2));