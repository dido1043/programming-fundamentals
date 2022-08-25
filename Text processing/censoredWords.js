function words(text, word) {
    let tokens = text.split(word);
    console.log(tokens.join('*'.repeat(word.length)));
}
words('A small sentence with some words', 'small')