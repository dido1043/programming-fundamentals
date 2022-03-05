function evenSum(array) {
    let num = 0;
    let element = ""
    for (let i = 0; i < array.length; i++) {
        element = Number(array[i]);
        if (element % 2 == 0) {
            num += Number(array[i]);
        }
    }
    console.log(num);
}
evenSum(['1', '2', '3', '4', '5', '6']);
console.log('------------------');
evenSum(['2', '4', '6', '8', '10']);
console.log('------------------');
evenSum(['3', '5', '7', '9']);