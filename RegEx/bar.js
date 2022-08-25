function task(input) {
    let totalSum = 0;

    while (input[0] != 'end of shift') {
        let regex = /%([A-Z][a-z]*)%.*?<(\w+)>.*?\|(\d+)\|.*?(-?\d+(?:\.\d+)?)\$/;
        let line = input.shift();
        let match = regex.exec(line);

        if (match != null) {
            let [_, name, product, quantity, price] = match;
            quantity = +quantity;
            price = +price;
            totalSum += quantity * price;
            console.log(`${name}: ${product} - ${(quantity * price).toFixed(2)}`);
        }
    }
    console.log("Total income: " + totalSum.toFixed(2));
}

task(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);
console.log('=====');
task(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
])