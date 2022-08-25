function keys(input) {
    let word = input.shift()

    while (input[0] != "Generate") {
        let [name, command, i1, i2] = input.shift().split('>>>');
        i1 = +i1;
        i2 = +i2;
        let result;
        if (name === 'Contains') {
            if (word.includes(command)) {
                console.log(`${word} contains ${command}`);
            } else {
                console.log("Substring not found!");
            }
        } else if (name === 'Flip') {
            if (command === 'Upper') {
                let start = word.substring(0, i1);
                let mid = word.substring(i1, i2).toUpperCase();
                let end = word.substring(i2);
                result = start + mid + end;
            } else if (command === 'Lower') {
                let start = word.substring(0, i1);
                let mid = word.substring(i1, i2).toLowerCase();
                let end = word.substring(i2);
                result = start + mid + end;

            }
            //console.log(result);
            word = result;
            console.log(result);
        } else if (name === 'Slice') {
            let start = word.substring(0, command);
            let end = word.substring(i1);
            result = start + end;
            console.log(result);
            word = result;
        }

    }
    console.log(`Your activation key is: ${word}`);
}

keys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
]);