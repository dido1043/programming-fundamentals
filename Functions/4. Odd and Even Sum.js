function task(n) {
    let even = 0;
    let odd = 0;
    let numAsString = String(n);

    function stringToNum(string) {
        let newArr = [];
        for (let i = 0; i < string.length; i++) {
            newArr.push(Number(numAsString[i]));
        }
        return newArr;
    }
    let arr = stringToNum(numAsString);

    function sum(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0) {
                even += array[i];
            } else {
                odd += array[i];
            }
        }
        return [even, odd];
    }
    let newArr = sum(arr);
    let evenSum = newArr[0];
    let oddSum = newArr[1];

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

task(3495892137259234);
task(1000435);