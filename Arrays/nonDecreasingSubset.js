function task(arr) {
    let max = arr[0];
    let result = arr.filter(element => {
        if (element >= max) {
            max = element;
        }
        return element >= max;
    })
    console.log(result.join(' '));
}
task([1, 3, 8, 4, 10, 12, 3, 2, 24]);
console.log('==================');
task([1, 2, 3, 4]);
console.log('==================');
task([20, 3, 2, 15, 6, 1]);