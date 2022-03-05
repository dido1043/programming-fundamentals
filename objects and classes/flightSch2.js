function flight(input) {
    let obj = {};
    input[0].forEach(element => {
        let [numberFly, destination] = element.split(' ');
        obj[numberFly] = {
            Destination: destination,
            Status: 'Ready to fly'
        }
    });
    input[1].forEach(element => {
        let [numberFly, status] = element.split(' ');
        if (obj.hasOwnProperty(numberFly)) {
            obj[numberFly].Status = status
        }
    });
    for (let fly in obj) {
        if (obj[fly].Status === String(input[2])) {
            console.log(obj[fly]);
        }
    }
}
flight([
    ['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'
    ],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'
    ],
    ['Cancelled']
])