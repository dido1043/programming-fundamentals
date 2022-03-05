function occurrences(input) {
    let result = {};
    let intoArr = input.split(' ');
    for (let word of intoArr) {
        word = word.toLocaleLowerCase();
        if (result.hasOwnProperty(word)) {
            result[word]++;
        } else {
            result[word] = 1;
        }
    }
    let filtered = Object.entries(result).filter(([word, count]) => {
        if (count % 2 === 1) {
            return true;
        } else {
            return false;
        }
    });
    console.log(filtered.map(entry => entry[0]).join(' '));

}
occurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
console.log('========');
occurrences('Cake IS SWEET is Soft CAKE sweet Food')