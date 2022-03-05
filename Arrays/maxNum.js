function maxNum(scoreByPattern) {
    let topInt = [];
    for (let i = 0; i < scoreByPattern.length; i++) {
        let currentElement = scoreByPattern[i];
        let isTop = true;
        for (let j = i + 1; j < scoreByPattern.length; j++) {
            let next = scoreByPattern[j];
            if (currentElement <= next) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            topInt.push(currentElement);
        }
    }
    console.log(topInt.join(' '));
}
maxNum([1, 4, 3, 2]);
maxNum([14, 24, 3, 19, 15, 17]);
maxNum([41, 41, 34, 20]);

maxNum([27, 19, 42, 2, 13, 45, 48]);