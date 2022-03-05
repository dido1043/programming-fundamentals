function task(array) {
    let wagonsArr = array.shift().split(' ').map(Number);
    let maxCapacity = Number(array.shift());
    for (let element of array) {
        let currCommand = element.split(' ');
        if (currCommand[0] == 'Add') {
            wagonsArr.push(Number(currCommand[1]));
        } else {
            for (let i = 0; i < wagonsArr.length; i++) {
                if (wagonsArr[i] + Number(currCommand[0]) <= maxCapacity) {
                    wagonsArr[i] += Number(currCommand[0]);
                    break;
                }

            }
        }
    }
    console.log(wagonsArr.join(" "));
}
task(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);