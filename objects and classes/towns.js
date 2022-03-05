function task(input) {
    let finalResult = {};
    for (let tokens of input) {
        let info = tokens.split(' | ');
        let town = info[0];
        let latitude = Number(info[1]).toFixed(2);
        let longtitude = Number(info[2]).toFixed(2);
        finalResult.town = town;
        finalResult.latitude = latitude;
        finalResult.longitude = longtitude;
        console.log(finalResult);
    }
}

task(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);