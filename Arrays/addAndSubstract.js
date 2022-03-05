function add(array) {
    let myArray = array;
    let sumOfOriginalArr = 0;
    let modifiedArr = 0;
    for (let i = 0; i < myArray.length; i++) {
        sumOfOriginalArr += myArray[i];
        if (myArray[i] % 2 == 0) {
            myArray[i] += i;
        } else {
            myArray[i] -= i;
        }
        modifiedArr += myArray[i];
    }
    console.log(myArray);
    console.log(sumOfOriginalArr);
    console.log(modifiedArr);

}
add([5, 15, 23, 56, 35])