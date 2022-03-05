function days(day) {

    if (day < 1 || day > 7) {
        console.log('Invalid day!');
    } else {
        let days = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ]
        let index = day - 1;
        console.log(days[index]);
    }
}
days(1)