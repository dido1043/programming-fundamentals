function task(arr) {
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = arr[j];
            if (element == nextEl) {
                arr.splice(j, 1);
                j -= 1;
            }

        }
    }
    console.log(arr.join(' '));
}

task([1, 2, 3, 4]);
task([7, 8, 9, 7, 2, 3, 4, 1, 2]);
task([20, 8, 12, 13, 4, 4, 8, 5]);