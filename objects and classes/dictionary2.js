function dictionary(arr) {
    let intoJSON = arr.map((a) => JSON.parse(a));
    let alphabeticalSort = ((a, b) => {
        let firstWord = Object.keys(a).shift()
        let secondWord = Object.keys(b).shift()
        let letter1 = firstWord.split('').shift()
        let letter2 = secondWord.split('').shift()

        if (letter1 < letter2) {
            return -1
        } else if (letter1 > letter2) {
            return 1
        } else {
            return firstWord.localeCompare(secondWord)
        }
    })
    let sorted = intoJSON.sort(alphabeticalSort);
    let result;
    for (let item of sorted) {
        for (let [key, value] of Object.entries(item)) {
            result = `Term: ${key} => Definition: ${value}`;
            console.log(result);
        }
    }


}
dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);