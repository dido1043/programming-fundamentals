function task(array) {
    //let nums = array.join(' ');

    function isPalindrome(num) {
        let reversed = Number(num.toString().split("").reverse().join(""));
        if (num == reversed) {
            return true;
        } else {
            return false;
        }
    }
    for (let i = 0; i < array.length; i++) {

        console.log(isPalindrome(array[i]));
    }
}

task([123, 323, 421, 121]);
console.log('================');
task([32, 2, 232, 1010]);