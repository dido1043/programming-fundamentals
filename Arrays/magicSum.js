function max(arr, n) {
    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == n) {
                console.log(`${arr[i]} ${arr[j]}`);

            }

        }
    }
}
max([1, 7, 6, 2, 19, 23], 8)
console.log('==================');
max([14, 20, 60, 13, 7, 19, 8], 27)
console.log('==================');
max([1, 2, 3, 4, 5, 6], 6)
console.log('==================');