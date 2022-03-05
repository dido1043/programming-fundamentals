function task(n) {
    let result = [];
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < n; j++) {
            result += (n + ' ')
        }
        console.log(result);
        result = '';
    }
}
task(3);
task(7);