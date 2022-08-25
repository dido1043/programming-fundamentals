function task(input) {
    let n = +input.shift();
    let obj = {};
    while (n > 0) {
        let [piece, composer, key] = input.shift().split('|');
        obj[piece] = { composer, key };
        n--;
    }
    let arr = []
    while (input[0] != 'Stop') {
        let [command, piece, composer, key] = input.shift().split('|');
        if (command == 'Add') {
            if (!obj.hasOwnProperty(piece)) {
                obj[piece] = {};
                obj[piece].composer = composer;
                obj[piece].key = key;
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        } else if (command == 'Remove') {
            if (obj.hasOwnProperty(piece)) {
                delete obj[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command == 'ChangeKey') {
            if (obj.hasOwnProperty(piece)) {
                obj[piece].key = composer;
                console.log(`Changed the key of ${piece} to ${composer}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }
    for (const element of Object.entries(obj)) {
        let name = element[0];
        let thing = element[1];
        console.log(`${name} -> Composer: ${thing.composer}, Key: ${thing.key}`);
    }
}

task(['3',
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
console.log('====');
task(['4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);