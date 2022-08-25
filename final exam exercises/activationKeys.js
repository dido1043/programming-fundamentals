function keys(input) {
    let commands = {
        Contains,
        Flip,
        Slice
    };
    let word = input.shift(0);
    while (input[0] != "Generate") {
        let [name, command, i1, i2] = input.shift(0).split('>>>');
        let cmds = commands[name]
        word = cmds(word, command, i1, i2);
    }
    console.log(`Your activation key is: ${word}`);

    function Contains(str, substring) {
        if (str.includes(substring)) {
            console.log(`${str} contains ${substring}`);
        } else {
            console.log("Substring not found!");
        }
    }

    function Flip(str, command, start, end) {
        if (command == 'Upper') {
            let startIndex = str.substring(0, start);
            let middle = str.substring(start, end).toUpperCase();
            let endIndex = str.substring(end);
            console.log(startIndex + middle + endIndex);
            return startIndex + middle + endIndex;
        } else if (command == 'Lower') {
            let startIndex = str.substring(0, start);
            let middle = str.substring(start, end).toLowerCase();
            let endIndex = str.substring(end);
            console.log(startIndex + middle + endIndex);
            return startIndex + middle + endIndex;
        }
    }

    function Slice(str, start, end) {
        let startIndex = str.substring(0, start);
        let endIndex = str.substring(end);
        console.log(startIndex + endIndex);
        return startIndex + endIndex;
    }
}

keys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
]);