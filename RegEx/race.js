function task(input) {
    let racers = {};
    let names = input.shift().split(', ');
    for (let line of input) {
        if (line !== "end of race") {
            let racerName = line.match(/[A-Z]+/gi).join('');
            let distanceInDigits = line.match(/\d/g);
            let dist = 0;
            for (let meter of distanceInDigits) {
                dist += +meter;
            }
            if (names.includes(racerName)) {
                if (racers.hasOwnProperty(racerName)) {
                    racers[racerName] += dist;
                } else {
                    racers[racerName] = dist;
                }
            }
        }
    }
    let sortedArr = Object.keys(racers).sort((a, b) => racers[b] - racers[a]);
    console.log(`1st place: ${sortedArr[0]}\n2nd place: ${sortedArr[1]}\n3rd place: ${sortedArr[2]}`);
}
task(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);