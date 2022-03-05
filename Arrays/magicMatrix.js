function matrix(input) {
    let arr1 = input[0];
    let arr2 = input[1];
    let arr3 = input[2];

    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            sum2 += arr2[j];
            for (let k = 0; k < arr3.length; k++) {
                sum3 += arr3[k];

            }
        }
    }
    if (sum1 == sum2 && sum1 == sum3 ||
        sum2 == sum3 && sum2 == sum1 ||
        sum3 == sum2 && sum3 == sum1) {
        console.log(`false`);
    } else {
        console.log(`true`);
    }

}
matrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
console.log('==========');
matrix([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
])
console.log('============');
matrix([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
])