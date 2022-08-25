function passwordReset(input) {
    let password = input.shift();
    let result = '';
    while (input[0] !== "Done") {
        let line = input.shift();
        let example = line.split(' ');
        let command = example[0];
        if (command == "TakeOdd") { //Ready
            for (let i = 0; i < password.length; i++) {
                if (i % 2 != 0) {
                    result += password[i]
                }
            }
            console.log(result);
            password = result;
        }
        let token1 = example[1];
        let token2 = example[2];

        if (command == "Cut") {
            if (token1 < password.length) {
                let endIndex = Number(token1) + Number(token2);
                result = password.slice(0, token1) + password.slice(endIndex);
            }
            console.log(result);
            password = result;
        } else if (command == "Substitute") {
            if (password.includes(token1)) {
                while (password.includes(token1)) {
                    password = password.replace(token1, token2)
                }
                console.log(password);
                result = password;
            } else {
                console.log("Nothing to replace!");
                continue
            }
        }
    }
    console.log(`Your password is: ${password}`);
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
])