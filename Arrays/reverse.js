function reverse(n, array) {
    let element = '';
    let example = ' ';
    for (let i = n; i >= 1; i--) {
        element = array[i - 1];
        example += element + ' ';
    }
    console.log(example.trim());
}
reverse(3, [10, 20, 30, 40, 50])