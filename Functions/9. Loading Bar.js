function loadingBar(number) {
    let result = '';
    let dots = '';

    for (let i = 1; i <= 100; i += 10) {
        if (i < number) {
            result += `%`;
        } else {
            dots += '.';
        }
    }
    if (number == 100) {
        console.log(`${number}% Complete!`);
        console.log(`[${result}${dots}]`);
    } else {
        console.log(`${number}% [${result}${dots}]`);
        console.log('Still loading...');
    }
}
loadingBar(30);
console.log('=====');
loadingBar(50);
console.log('=====');
loadingBar(100);