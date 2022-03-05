function task(a, b, c) {
    function add(n1, n2) {
        return n1 + n2;
    }
    let substract = (addNum, num3) => addNum - num3;

    let res1 = add(a, b);
    let res2 = substract(res1, c)
    console.log(res2);
}

task(23, 6, 10);