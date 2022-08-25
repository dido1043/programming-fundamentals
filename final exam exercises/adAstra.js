function adAstra(input) {
    let regex = /(#|\|)(?<product>[A-Z a-z]+)\1(?<date>\d{1,}\/\d{1,}\/\d{1,})\1(?<calories>\d+)\1/g;
    let match = regex.exec(input);
    let result = [];
    let days = 0;
    let totalCalories = 0
    while (match != null) {
        totalCalories += +match.groups.calories
        result.push(`Item: ${match.groups.product}, Best before: ${match.groups.date}, Nutrition: ${match.groups.calories}`)
        match = regex.exec(input);
    }
    while (totalCalories > 0) {
        totalCalories -= 2000;
        if (totalCalories < 0) {
            break;
        }
        days++
    }
    if (days < 0) {
        console.log(`You have food to last you for: 0 days!`);
    } else {
        console.log(`You have food to last you for: ${days} days!`);
    }
    for (const item of result) {
        console.log(item);
    }
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
console.log('----');
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])
console.log('----');
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@'])