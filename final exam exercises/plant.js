function plants(input) {

    let plants = input.shift()
    let list = {};

    for (let i = 0; i < plants; i++) {
        let [plant, rarity] = input[i].split('<->')
        if (!list.hasOwnProperty(plant)) {
            list[plant] = {
                'rarity': +rarity,
                'rating': [],
                'counter': 0,
            }
        } else {
            list[plant]['rarity'] = +rarity
        }
    }

    for (let i = plants; i < input.length; i++) {
        if (input[i] === 'Exhibition') break;
        let [command, token] = input[i].split(': ')
        let [plant, rating] = token.split(' - ')
        if (!list.hasOwnProperty(plant)) {
            console.log('error')
            continue;
        }
        if (command === 'Rate') {

            let ratingToAdd = Number(rating);

            if (list.hasOwnProperty(plant)) {
                list[plant].rating.push(ratingToAdd);
            }

        } else if (command === 'Update') {
            list[plant]['rarity'] = +rating

        } else if (command === 'Reset') {
            list[plant]['rating'] = [];
        }
    }
    console.log(`Plants for the exhibition:`)

    for (const el in list) {
        if (list[el].rating.length === 0) {
            list[el]['avgRating'] = 0.00;
        } else {
            list[el]['avgRating'] = list[el].rating.reduce((a, b) => a + b) / list[el].rating.length;
        }

        console.log(`- ${el}; Rarity: ${list[el].rarity}; Rating: ${list[el].avgRating.toFixed(2)}`);
    }
}

plants(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]);