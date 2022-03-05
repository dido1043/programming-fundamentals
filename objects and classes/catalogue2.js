function catalogue(arr) {
    let sorted = arr.sort();
    let firstLetter = sorted[0][0];
    let result = firstLetter + `\n`;
    for (let element of sorted) {
        let token = element.split(' : ')
        let joined = token.join(': ')
        if (joined[0] == firstLetter) {
            result += ' ' + joined + `\n`
        } else {
            firstLetter = joined[0]
            result += firstLetter + `\n`;
            result += ' ' + joined + `\n`
        }
    }
    console.log(result);
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);