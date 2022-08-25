function task(input) {
    let password = input.shift();

    let commandParser = {
        'TakeOdd': (password) => {
            return [...password].filter((symbol, index) => index % 2 != 0).join('');
        },
        'Cut': (password, index, length) => {
            index = Number(index);
            length = Number(length);

            const substring = password.substr(index, length);
            return password.replace(substring, '');
        },
        'Substitute': (password, string, substitude) => {
            if (password.includes(string)) {
                return password.replace(new RegExp(string, 'g'), substitude)
            }
            console.log('Nothing to replace!');
            return password
        }
    };
    input.forEach(line => {
        if (line != 'Done') {
            let [command, ...tokens] = line.split(' ');
            let oldPass = password;
            password = commandParser[command](password, ...tokens);
            //console.log(password);
            if (oldPass !== password) {
                console.log(password);
            }
        }
    });
    console.log(`Your password is: ${password}`);
}

task(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
]);