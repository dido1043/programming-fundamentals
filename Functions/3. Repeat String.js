function rep(str, n) {
    let result = " ";
    for (let i = 0; i < n; i++) {
        result += str;

    }
    return result;
}
console.log(rep("abc", 3));