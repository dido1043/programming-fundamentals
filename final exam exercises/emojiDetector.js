function detector(input) {
    let pattern1 = /([:|*]{2})(?<words>[A-Z][a-z]{2,})\1/gm
    let pattern2 = /\d/gm
    let string = input.shift();
    let coolWords = [];

    let match1 = pattern1.exec(string);
    let match2 = pattern2.exec(string);
    let threshold = 1;
    while (match2 !== null) {

        threshold *= Number(match2[0]);
        match2 = pattern2.exec(string);
    }
    let count = 0;
    while (match1 !== null) {
        let word = match1[2];
        let sum = 0;
        for (let letter of word) {
            sum += letter.charCodeAt();
        }
        if (sum > threshold) {
            coolWords.push(match1[0]);
        }
        count++;
        match1 = pattern1.exec(string);
    }
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${count} emojis found in the text. The cool ones are:`);
    for (let coolWord of coolWords) {
        console.log(coolWord);
    }
}
detector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])