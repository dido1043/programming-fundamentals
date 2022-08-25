function task(input) {
    let commands = {
        Move,
        Insert,
        ChangeAll
    }
    let word = input.shift();
    while (input[0] != 'Decode') {
        let line = input.shift();
        let tokens = line.split('|')
        let command = tokens[0];
        word = commands[command](word, tokens[1], tokens[2]);
    }
    console.log(`The decrypted message is: ${word}`);

    function Move(str, num) {
        let start = str.substring(0, num);
        let end = str.substring(num);
        return end + start;
    }

    function Insert(str, index, text) {
        let start = str.substring(0, index);
        let end = str.substring(index);
        return start + text + end
    }

    function ChangeAll(str, subStr, replacement) {
        let token = str.split(subStr);
        return token.join(replacement)
    }
}

task(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);
console.log('========');
task(['owyouh', 'Move|2', 'Move|3', 'Insert|3|are', 'Insert|9|?', 'Decode']);