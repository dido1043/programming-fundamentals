function pirates(input) {
    let collection = {}
    while (input[0] != "Sail") {
        let tokens = input.shift()
        let edited = tokens.split('||');
        let city = edited[0];
        let population = Number(edited[1]);
        let gold = Number(edited[2]);
        if (!collection.hasOwnProperty(city)) {
            collection[city] = { population, gold };
        } else {
            collection[city].population += population;
            collection[city].gold += gold;
        }
    }
    input.shift();

    while (input[0] != 'End') {
        let tokens = input.shift().split('=>');
        let op = tokens[0];
        let city = tokens[1];
        let el1 = +tokens[2];
        let el2 = +tokens[3];
        let example = collection[city]
        if (op == 'Plunder') {
            example.population -= el1;
            example.gold -= el2;
            console.log(`${city} plundered! ${el2} gold stolen, ${el1} citizens killed.`);
            if (example.population <= 0 || example.gold <= 0) {
                delete collection[city];
                console.log(`${city} has been wiped off the map!`);
            }
        } else if (op == 'Prosper') {
            if (el1 > 0) {
                example.gold += el1;
                console.log(`${el1} gold added to the city treasury. ${city} now has ${example.gold} gold.`);
            } else {
                //delete collection[city]
                console.log("Gold added cannot be a negative number!");
                continue;
            }
        }
    }
    let count = 0
    let arr = []
    for (const city in collection) {
        let n = collection[city]
        arr.push(`${city} -> Population: ${n.population} citizens, Gold: ${n.gold} kg`);
        count++
    }
    console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);
    console.log(arr.join('\n'));
}
// pirates(["Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"
// ]);
console.log('-----');
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
]);