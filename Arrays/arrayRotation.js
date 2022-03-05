function arrRotation(arr, rotation) {

    let last = ``;

    for (let i = 1; i <= rotation; i++) {
        let newArr = [];
        last = arr[0]
        for (let k = 0; k < arr.length - 1; k++) {

            newArr.push(arr[k + 1]);

        }
        newArr.push(last)
        arr = newArr;
    }
    console.log(arr.join(` `));
}
arrRotation([51, 47, 32, 61, 21], 2);
console.log('=======================');
arrRotation([32, 21, 61, 1], 4);
console.log('=======================');
arrRotation([2, 4, 15, 31], 5);