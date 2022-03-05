function task(number) {
    function findDivisors(num) {
        let divisors = [];
        for (let i = 1; i < num; i++) {
            if (num % [i] == 0) {
                divisors.push(i);
            }
        }
        return divisors;
    }
    let arrOf = findDivisors(number);

    function sum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    function isPerfect(num) { // Проверяваме дали числото е перфектно
        if (sum(arrOf) === num) {
            return `We have a perfect number!`
        } else {
            return `It's not so perfect.`
        }
    }
    console.log(isPerfect(number))
}

task(1236498);