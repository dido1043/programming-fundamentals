function task(input) {
    let word = input.shift();

    while (input[0] != "Travel") {
        let line = input.shift();
        let [command, index, token] = line.split(':')
        let end;
        let result = '';

        let subStr = 0
        if (index < 0) {
            return;
        }
        switch (command) {
            case 'Add Stop':
                if (index <= word.length - 1) {
                    subStr = word.substring(0, index);
                    end = word.substring(index)
                    result = subStr + token + end;
                }
                console.log(result);
                word = result;
                break;
            case 'Remove Stop':
                let intoNum1 = Number(index);
                let intoNum2 = Number(token);
                if (intoNum1 < word.length && intoNum1 >= 0 &&
                    intoNum2 < word.length && intoNum2 >= 0) {
                    result = word.slice(0, intoNum1) + word.slice(intoNum2 + 1)
                }
                console.log(result);
                word = result;
                break;
            case 'Switch':
                if (index !== token) {
                    result = word.replace(index, token)
                    console.log(result);
                    word = result;
                }
                break;
        }

    }
    console.log(`Ready for world tour! Planned stops: ${word}`);
}

task(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
])
