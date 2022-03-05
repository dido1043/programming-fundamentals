function task(firsName, lastName, age) {
    let personalInfo = {
        firstName: firsName,
        lastName: lastName,
        age: age
    };
    return personalInfo;
}

console.log(task("Peter", "Pan", 20));