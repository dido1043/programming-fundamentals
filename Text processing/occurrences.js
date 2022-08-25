function task(text, word) {
    let words = text.split(' ');
    let counter = 0;
    for (let line of words) {
        if (line == word) {
            counter++;
        }
    }
    console.log(counter);
}

task('This is a word and it also is a sentence', 'is');