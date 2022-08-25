function task(input) {
    let neededExp = input.shift();
    let countOfBattles = input.shift();
    let sumOfBattles = 0;
    let count = 1;
    for (let i = 0; i < input.length; i++) {
        let currentBattle = input[i];
        if (count % 3 == 0) {
            currentBattle = currentBattle + (currentBattle * 0.15);
        }
        if (count % 5 == 0) {
            currentBattle = currentBattle - (currentBattle * 0.10);
        }
        if (count % 15 == 0) {
            currentBattle = currentBattle + (currentBattle * 0.05);
        }
        count++;
        sumOfBattles += currentBattle;
        if (sumOfBattles >= neededExp) {
            return `Player successfully collected his needed experience for ${count - 1} battles.`
        }
    }
    if (neededExp > sumOfBattles) {
        return `Player was not able to collect the needed experience, ${(neededExp - sumOfBattles).toFixed(2)} more needed.`
    }
}
console.log(task([500, 5, 50, 100, 200, 100, 30]));
console.log('====');
console.log(task([500, 5, 50, 100, 200, 100, 20]));
console.log('====');
console.log(task([400, 5, 50, 100, 200, 100, 20]));