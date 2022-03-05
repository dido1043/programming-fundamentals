function n(array) {
    let range = Number(array.pop());
    let string = " ";

    for (let i = 0; i < array.length; i += range) {
        string += array[i] + ' ';
    }
    console.log(string);
}
n(['5', '20', '31', '4', '20', '2']);
console.log('=====================');
n(['dsa', 'asd', 'test', 'test', '2']);
console.log('=====================');
n(['1', '2', '3', '4', '5', '6']);
console.log('=====================');