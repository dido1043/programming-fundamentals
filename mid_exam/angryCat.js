function task(arr, num, type) {
    let numPoint = arr[num];
    let left = 0;
    let right = 0;

    for (let i = 0; i < num; i++) { //left
        if (type === 'cheap') {
            if (arr[i] < numPoint) {
                left += arr[i];
            }
        } else if (type === 'expensive') {
            if (arr[i] >= numPoint) {
                left += arr[i];
            }
        }
    }
    for (let j = 0; j < num; j++) {
        if (type === 'cheap') {
            if (arr[j] < numPoint) {
                right += arr[j];
            }
        } else if (type === 'expensive') {
            if (arr[j] >= numPoint) {
                right += arr[j];
            }
        }
    }
    if (right < left) return `Left - ${left}`;
    else if (right === left) return `Left - ${right}`
    else return `Right - ${right}`
}

console.log(task([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    "expensive"));