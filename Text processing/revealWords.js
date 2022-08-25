function revealWords(word, sentence) {
    let splited = word.split(', ');
    for (let el of splited) {
        let template = '*'.repeat(el.length);
        sentence = sentence.replace(template, el)
    }
    console.log(sentence);
}
revealWords('great', 'softuni is ***** place for learning new programming languages');
console.log('=====');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');