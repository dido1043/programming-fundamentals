function evenAndOddSum(arr) {
    let even = 0;
    let odd = 0;
    let element = 0;
    for (let i = 0; i < arr.length; i++) {
        element = Number(arr[i]);
        if (element % 2 == 0) {
            even += Number(arr[i]);
        } else {
            odd += Number(arr[i]);
        }
    }
    console.log(even - odd);
}
evenAndOddSum([1, 2, 3, 4, 5, 6]);
console.log('-------------------------');
evenAndOddSum([3, 5, 7, 9]);
console.log('-------------------------');
evenAndOddSum([2, 4, 6, 8, 10]);