function book(input) {
    let result = {};
    for (let line of input) {
        let [name, addres] = line.split(':');
        result[name] = addres;
    }
    let sorted = Object.keys(result);
    sorted.sort((a, b) => a.localeCompare(b));
    for (let el of sorted) {
        console.log(`${el} -> ${result[el]}`);
    }

}

book(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'
]);