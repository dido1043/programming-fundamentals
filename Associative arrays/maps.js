let myKey = 'edno';
let myAssocArray = {
    alpha: 1,
    beta: 2,
    gamma: 3,
    //[myKey]: 10
}

myAssocArray['delta'] = 4;

//let myKey = 'Edno'
for (const key in myAssocArray) {
    console.log(key);
}