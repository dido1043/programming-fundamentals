function task(input) {
    let collection = {};
    for (let line of input) {
        line = line.split(" ");
        let command = line[0];
        let heroName = line[1];
        if (command == "Enroll") {
            if (!collection.hasOwnProperty(heroName)) {
                collection[heroName] = [];
            } else {
                console.log(`${heroName} is already enrolled.`);
            }
        }
        if (command == "Learn") {
            let spell = line[2];
            if (!collection.hasOwnProperty(heroName)) {
                console.log(`${heroName} doesn't exist.`);
                continue;
            } else if (
                collection[heroName].length > 0 &&
                collection[heroName].includes(spell)
            ) {
                console.log(`${heroName} has already learnt ${spell}.`);
            } else {
                collection[heroName].push(spell);
            }
        }
        if (command == "Unlearn") {
            let spell = line[2];
            if (!collection.hasOwnProperty(heroName)) {
                console.log(`${heroName} doesn't exist.`);
                continue;
            } else if (
                collection[heroName].length > 0 &&
                !collection[heroName].includes(spell)
            ) {
                console.log(`${heroName} doesn't know ${spell}.`);
            } else {
                let index = collection[heroName].indexOf(spell);
                collection[heroName].splice(index, 1);
            }
        }
        if (command == "End") {
            console.log("Heroes:");
            for (let key in collection) {
                console.log(`== ${key}: ${collection[key].join(", ")}`);
            }
        }
    }
}