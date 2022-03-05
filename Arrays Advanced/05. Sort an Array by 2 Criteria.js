function task(array) {
    let sortedAlphabeticaly = array.sort();
    let sortedByLength = sortedAlphabeticaly.sort((a, b) => a.length - b.length)
    console.log(sortedByLength.join(`\n`));
}

task(['alpha', 'beta', 'gamma']);
console.log('======');
task(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);