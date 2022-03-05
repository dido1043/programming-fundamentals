function arr(num) {
    let firstPosition = Number(num.shift());
    let lastPosition = Number(num.pop());
    console.log(firstPosition + lastPosition);
}
arr([20, 30, 40]);
arr([10, 17, 22, 33]);
arr([11, 58, 69]);