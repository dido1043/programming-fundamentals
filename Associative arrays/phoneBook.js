function phoneBook(input) {
    let result = {};
    for (const line of input) {
        let [name, phone] = line.split(' ');

        result[name] = phone;
    }

    for (const name in result) {
        console.log(`${name} -> ${result[name]}`);
    }

}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
])