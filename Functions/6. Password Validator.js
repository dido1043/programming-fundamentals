function task(stringPassword) {
    function isLengthEnough(stringPassword) {
        return stringPassword.length >= 6 && stringPassword.length <= 10;
    }

    function isLetterAndDigits(stringPassword) {
        for (let currentCharIndex of stringPassword) {
            let currentCharCode = currentCharIndex.charCodeAt(0);
            if (!(currentCharCode >= 65 && currentCharCode <= 90) &&
                !(currentCharCode >= 97 && currentCharCode <= 122) &&
                !(currentCharCode >= 48 && currentCharCode <= 57)
            ) {
                return false;
            }
        }
        return true;
    }
    // console.log(isLetterAndDigits('logIn'));

    function isHavingTwoNumbers(stringPassword) {
        let counter = 0;
        for (let currentCharIndex of stringPassword) {
            let currentCharCode = currentCharIndex.charCodeAt(0);
            if (currentCharCode >= 48 && currentCharCode <= 57) {
                counter++;
            }
        }
        return counter >= 2 ? true : false;
    }
    // console.log(isHavingTwoNumber('logIn'));

    let isLengthValid = isLengthEnough(stringPassword);
    let isLettersAndDigitsOnly = isLetterAndDigits(stringPassword);
    let isTwoNumbersAtLeast = isHavingTwoNumbers(stringPassword);

    if (isLengthValid && isLettersAndDigitsOnly && isTwoNumbersAtLeast) {
        console.log("Password is valid");
    }
    if (!isLengthValid) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!isLettersAndDigitsOnly) {
        console.log("Password must consist only of letters and digits");
    }
    if (!isTwoNumbersAtLeast) {
        console.log("Password must have at least 2 digits");
    }
}
task('logIn');
console.log('==========');
task('MyPass123');
console.log('==========');
task('Pa$s$s');