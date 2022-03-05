function task(arr, bombNums) {
    let bombNum = bombNums[0];
    let range = bombNums[1];

    let indexOfBomb = arr.indexOf(bombNum);
    while (indexOfBomb !== -1) {
        let startIndex = Math.max(0, indexOfBomb - range);
        let explosionLength = range * 2 + 1;
        arr.splice(startIndex, explosionLength);
        indexOfBomb = arr.indexOf(bombNum);
    }
    let sum = arr.reduce((a, b) => a + b, 0);
    console.log(sum);
}

task([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);