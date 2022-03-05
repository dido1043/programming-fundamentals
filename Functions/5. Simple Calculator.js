function task(n1, n2, operator) {
    switch (operator) {
        case 'multiply':
            return n1 * n2;
        case 'divide':
            return n1 / n2;
        case 'add':
            return n1 + n2
        case 'subtract':
            return n1 - n2;
    }
}

console.log(task(5, 5, 'multiply'));
console.log('=================');
console.log(task(40, 8, 'divide'));
console.log('=================');
console.log(task(12, 19, 'add'));
console.log('=================');
console.log(task(50, 13, 'subtract'));