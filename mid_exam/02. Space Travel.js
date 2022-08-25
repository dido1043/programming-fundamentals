function task(input) {
    let tokens = input.shift().split('||');
    let fuel = Number(input[0]);
    let ammo = Number(input[1]);
    let command;
    let fail = false;
    while (tokens != 'Titan') {
        command = tokens.shift().split(` `);
        if (fail == false) {
            switch (command[0]) {
                case 'Travel':
                    if (fuel >= command[1]) {
                        console.log(`The spaceship travelled ${command[1]} light-years.`)
                        fuel -= command[1];
                    } else {
                        console.log(`Mission failed.`)
                        fail = true;
                    }
                    break;
                case 'Enemy':
                    if (ammo >= command[1]) {
                        console.log(`An enemy with ${command[1]} armour is defeated.`)
                        ammo -= command[1];
                    } else {
                        if (fuel >= command[1]) {
                            console.log(`An enemy with ${command[1]} armour is outmaneuvered.`)
                            fuel -= command[1];
                        } else {
                            console.log(`Mission failed.`)
                            fail = true;
                        }
                    }
                    break;
                case `Repair`:
                    fuel += Number(command[1]);
                    ammo -= Number(command[1]) * 2;
                    console.log(`Ammunitions added: ${command[1] * 2}.`)
                    console.log(`Fuel added: ${command[1]}.`)
                    break;

            }
        }
    }
    if (tokens == `Titan` && fail == false) {
        console.log(`You have reached Titan, all passengers are safe.`)
    }
}

task(['Travel 10||Enemy 30||Repair 15||Titan', '50', '80']);
console.log(`======`);
task(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', '60', '100'])