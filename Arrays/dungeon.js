function dungeon(arr) {
    let rooms = arr[0].split('|');
    let health = 100;
    let coins = 0;
    let isWin = true;
    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(' ')
        if (room[0] === 'potion') {
            let currentHealth = Number(room[1]);
            if (health <= 100) {
                if (health + currentHealth >= 100) {
                    currentHealth = 100 - health;
                    health = 100;
                } else {
                    health += currentHealth;
                }
                console.log(`You healed for ${currentHealth} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        } else if (room[0] === 'chest') {
            let currentCoins = Number(room[1]);
            console.log(`You found ${currentCoins} coins.`);
            coins += currentCoins;
        } else {
            let currentMonster = room[0];
            let damage = Number(room[1]);
            health -= damage;
            if (health > 0) {
                console.log(`You slayed ${currentMonster}.`);
            } else {
                console.log(`You died! Killed by ${currentMonster}.`);
                console.log(`Best room: ${i + 1}`);
                isWin = false;
                break;
            }
        }
    }
    if (isWin) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}
dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])