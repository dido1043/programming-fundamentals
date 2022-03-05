function add(array) {

    let empty = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'add') {

            empty.push(i + 1);

        } else if (array[i] === 'remove') {
            empty.pop();
        }

    }

    if (empty.length === 0) {
        console.log('Empty');
    } else {
        console.log(empty.join(' '));
    }

}
add(['add', 'add', 'add', 'add']);
console.log('-------');
add(['add', 'add', 'remove', 'add', 'add']);
console.log('-------');
add(['remove', 'remove', 'remove']);