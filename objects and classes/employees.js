function task(array) {
    let listOfEmployees = {};
    for (let employee of array) {
        //console.log(employee);
        listOfEmployees.name = employee;
        //console.log(listOfEmployees);
        listOfEmployees.num = employee.length;
        console.log(`Name: ${listOfEmployees.name} -- Personal Number: ${listOfEmployees.num}`);
    }
}

task(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
console.log(' --- ');
task(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']);