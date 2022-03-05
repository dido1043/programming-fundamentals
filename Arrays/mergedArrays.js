function merge(arr1, arr2) {
    let arr3 = [];

    let sumEven = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 == 0) {
            sumEven = Number(arr1[i]) + Number(arr2[i]);
            arr3.push(sumEven)
        } else {
            arr3.push(`${arr1[i]}${arr2[i]}`)
        }
    }
    console.log(arr3.join(' - '));
}
merge(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])