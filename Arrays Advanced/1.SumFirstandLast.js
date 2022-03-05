function task(arr) {
    let firstEl = arr.shift();
    let lastEl = arr.pop();
    console.log(Number(firstEl) + Number(lastEl));
}

task(['20', '30', '40']);