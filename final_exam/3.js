function recruitment(input) {
    let collection = {};
    while (input[0] != "End") {
        let [command, heroName, spell] = input.shift().split(' ');

        if (command == 'Enroll') {
            if (!collection.hasOwnProperty(heroName)) {
                collection[heroName] = { spell };
            } else {
                console.log(`${heroName} is already enrolled.`);
            }
        } else if (command == 'Learn') {
            if (!collection.hasOwnProperty(heroName)) {

                console.log(`${heroName} doesn't exist.`);
                continue;
            } else if (collection[heroName].length > 0 &&
                collection[heroName].includes(spell)) {
                console.log(`${heroName} has already learnt ${spell}.`);
            } else {
                collection[heroName].spell = spell;
            }
        } else if (command == 'Unlearn') {
            if (collection.hasOwnProperty(heroName)) {
                collection[heroName].spell = undefined;
            } else {
                console.log(`${heroName} doesn't exist.`);
            }
        }
    }
    console.log("Heroes:");
    for (let item of Object.entries(collection)) {

        let name = item[0];
        let spells = item[1];
        if (spells.spell == undefined) {
            console.log(`== ${name}: `);
        } else {
            console.log(`== ${name}: ${spells.spell}`);
        }

    }
}

recruitment(["Enroll Stefan",
    "Enroll Peter",
    "Enroll John",
    "Learn Stefan Spell",
    "Learn Peter Dispel",
    "End"
])

console.log('=====');
recruitment(["Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn Stefan ItShouldWork",
    "Unlearn Stefan NotFound",
    "End"
])