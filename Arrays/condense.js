function condense(arr) {
    let condensed = [];
    for (const i of arr) {
        condensed.push(i);
    }
    while (condensed.length > 1) {
        let temp = [];
        for (let k = 0; k < condensed.length - 1; k++) {
            temp.push(condensed[k] + condensed[k + 1]);
        }
        condensed = temp;
    }
    console.log(condensed[0]);
}
condense([2, 10, 3]);