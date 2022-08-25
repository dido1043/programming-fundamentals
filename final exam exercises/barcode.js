function task(input) {
    let count = +input.shift();
    while (count > 0) {
        let line = input.shift();
        let regex = /@#+(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/g;
        let match = regex.exec(line);
        if (match != null) {
            let productGroup = '';
            let product = match.groups.product;
            for (const ch of product) {
                let isNum = +ch;
                if (isNum * 1 == isNum) {
                    productGroup += ch;
                }
            }
            if (productGroup == '') {
                productGroup = '00';
            }
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log("Invalid barcode");
        }
        count--;
    }
}

task(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"
]);

console.log('====');
task(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
]);