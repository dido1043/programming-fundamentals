function task(firstName, lastName, hairColor) {
    let info = {
        firstName: firstName,
        lastName: lastName,
        hairColor: hairColor
    };
    console.log(JSON.stringify(info));
}

task('George', 'Jones', 'Brown');
console.log('===============');
task('Peter', 'Smith', 'Blond')