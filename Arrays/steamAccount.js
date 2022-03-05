function account(input) {
    let games = input[0].split(' ');
    for (let i = 0; i < input.length; i++) {
        let current = input[i].split(' ');
        let op = current[0];
        let currentGame = current[1];
        if (op == 'Play!') {
            break;
        } else if (op == 'Install' && games.includes(currentGame) == false) {
            games.push(currentGame);
        } else if (op == 'Uninstall' && games.includes(currentGame)) {
            let index = games.indexOf(currentGame);
            games.splice(index, 1)
        } else if (op == 'Expansion') {
            let expansion = currentGame.split('-');
            let game = expansion[0];
            if (games.includes(game)) {
                let expandedGame = expansion.join(':');
                let index = games.indexOf(currentGame);
                games.splice(index + 1, 0, expandedGame);
            }
        }
    }
    console.log(games.join(' '));
}
account(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
console.log('===============');
account(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!'])