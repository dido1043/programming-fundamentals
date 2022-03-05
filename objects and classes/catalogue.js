function catalogue(arr) {
    let list = [];
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i].split(' : ')
        let product = {
            name: el[0],
            price: parseFloat(el[1])
        }
        list.push(product)
    }

    list.sort((a, b) => a.name.localeCompare(b.name));
    let firstLetter = "";
    for (let element of list) {
        if (element.name.charAt(0) === firstLetter) {
            console.log(` ${element.name}: ${element.price}`);
        } else {
            firstLetter = element.name.charAt(0);
            console.log(firstLetter);
            console.log(` ${element.name}: ${element.price}`);
        }
    }
    //console.log(firstLetter);
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10', 'Boiler : 300',
    'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'
]);