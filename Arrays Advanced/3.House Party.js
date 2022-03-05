function task(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let currentEl = element.split(' ');
        let name = currentEl[0];
        if (!currentEl.includes('not')) {
            if (!newArr.includes(name)) {
                newArr.push(name)
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (!newArr.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                newArr.splice(newArr.indexOf(name), 1);
            }
        }
    }
    console.log(`${newArr.join('\n')}`);
}

task(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
console.log('===============');
task(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!'])