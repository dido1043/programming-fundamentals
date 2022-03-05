// function task(firstElement, divider) {
//     let sum = 1;
//     let divided = 0;
//     console.log(`${(division(firstElement) / divider).toFixed(2)}`);

//     function division(num) {
//         for (let i = num; i >= 1; i--) {
//             sum *= i;
//         }

//         return sum;
//     }
// }
// function task(firstElement, divider) {
//     let sum = 1;
//     let divided = 0;
//     let division = (num) => {
//         for (let i = num; i >= 1; i--) {
//             sum *= i;
//         }
//         divided = sum / divider;
//         return divided;
//     }
//     console.log(division(firstElement, divider).toFixed(2));
// }
// function task(firstElement, divider) {
//     let sum = 1;
//     for (let i = firstElement; i >= 1; i--) {
//         sum *= i;
//     }
//     console.log(`${(sum / divider).toFixed(2)}`);
// }
function task(num, devider) {
    let sum = 1;

    console.log(`${(facDivision(num)/facDivision(devider)).toFixed(2)}`);

    function facDivision(number) {
        let sum = 1;
        for (i = number; i >= 1; i--) {
            sum *= i;
        }
        return sum;
    }
}
task(5, 2);
console.log('===========');
task(6, 2)