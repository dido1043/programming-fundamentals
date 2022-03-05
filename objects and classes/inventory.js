function inventory(arr) {
    let array = [];
    for (const line of arr) {
        let currentLine = line.split(" / ")
        let hero = currentLine[0];
        let level = Number(currentLine[1]);
        let items = currentLine[2];
        let obj = {
            hero,
            level,
            items
        };
        array.push(obj);
    }
    let sortedArr = array.sort((a, b) => a.level - b.level);
    for (const hero of sortedArr) {
        console.log(`Hero: ${hero.hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);
console.log('=======');
inventory(['Batman / 2 / Banana, Gun', 'Superman / 18 / Sword', 'Poppy / 28 / Sentinel, Antara']);