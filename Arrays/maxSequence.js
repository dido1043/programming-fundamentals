function maxSequence(arr) {
    let newArr = [];
    let currentArr = [];

    for (let i = 0; i < arr.length; i++) {
        currentArr = [];
        for (let j = i; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                currentArr.push(arr[j]);
            } else {
                break;
            }
            if (currentArr.length > newArr.length) {
                newArr = currentArr;
            }
        }
    }
    console.log(newArr.join(' '));
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])