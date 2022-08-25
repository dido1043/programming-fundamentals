function task(input) {
    let obj = {};
    let countOfPieces = +input.shift();

    for (let i = 0; i < countOfPieces; i++) {

        let [piece, composer, key] = input[i].split('|');
        obj[piece] = { composer, key }

    }
    for (let j = countOfPieces; j < input.length; j++) {
        if (input[j] == 'Stop') {
            break;
        }
        let [command, piece, composer, key] = input[j].split('|');
        if (command == 'Add') {
            if (obj.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                obj[piece] = {};
                obj[piece].composer = composer;
                obj[piece].key = key;
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (command == 'Remove') {
            if (!obj.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            } else {
                delete obj[piece];
                console.log(`Successfully removed ${piece}!`);
            }
        } else if (command == 'ChangeKey') {
            if (!obj.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            } else {
                obj[piece].key = composer;
                console.log(`Changed the key of ${piece} to ${composer}!`);
            }
        }
    }
    for (const item of Object.entries(obj)) {
        console.log(`${item[0]} -> Composer: ${item[1].composer}, Key: ${item[1].key}`);
    }
}

task([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);