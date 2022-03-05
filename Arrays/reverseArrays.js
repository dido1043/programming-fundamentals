function reversedArrays(array) {
    for (let index = 0; index < array.length / 2; index++) {
        let k = array.length - 1 - index;
        let temp = array[index];
        array[index] = array[k];
        array[k] = temp;

    }
    console.log(array.join(' '));
}
reversedArrays(['a', 'b', 'c', 'd', 'e']);