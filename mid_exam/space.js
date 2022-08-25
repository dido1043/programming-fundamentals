function task(input) {
    let tokens = input.shift().split('||');
    let fuel = Number(input[0]);
    let ammo = Number(input[1]);
    let isFail = false;
    for (let i = 0; i < tokens.length; i++) {
        let cmd = tokens[i].split(' ');

        if (cmd[0] === 'Titan') {
            break;
        }

        if (cmd[0] === 'Travel') {
            if (fuel >= cmd[1]) {
                fuel -= cmd[1];
                console.log(`The spaceship travelled ${cmd[1]} light-years.`);
            } else {
                isFail = true;
                console.log("Mission failed.");
            }
        } else if (cmd[0] === 'Enemy') {
            if (ammo >= cmd[1]) {
                ammo -= cmd[1];
                console.log(`An enemy with ${cmd[1]} armour is defeated.`);
            } else {
                if (fuel >= cmd[1]) {
                    fuel -= cmd[1];
                    console.log(`An enemy with ${cmd[1]} armour is outmaneuvered.`);
                } else {
                    isFail = true;
                    console.log("Mission failed.");
                }
            }
        } else if (cmd[0] === 'Repair') {
            fuel += Number(cmd[1]);
            ammo -= 2 * Number(cmd[1]);
            console.log(`Ammunitions added: ${cmd[1] * 2}.`)
            console.log(`Fuel added: ${cmd[1]}.`)
        }

    }
    if (isFail == false) {
        console.log("You have reached Titan, all passengers are safe.");
    }
}
task(['Travel 10||Enemy 30||Repair 15||Titan', '50', '80']);
console.log(`======`);
task(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', '60', '100']);