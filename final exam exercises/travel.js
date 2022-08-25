function task(input) {
    let regex = /(=|\/)(?<location>[A-Z][A-Za-z]{2,})\1/g;
    let count = 0;
    let arr = [];
    if (regex.test(input)) {
        let match = input.match(regex);
        match.forEach((group) => {
            count += group.length - 2;
            arr.push(group.slice(1, (group.length - 1)))
        });
    }
    console.log(`Destinations: ${arr.join(', ')}\nTravel Points: ${count}`);
}

task("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");