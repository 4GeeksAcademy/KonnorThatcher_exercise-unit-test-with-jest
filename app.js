// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const euroToYen = (valueInEuro) => {
    let valueInYen = valueInEuro * 127.9;
    return valueInYen;
}

const euroToPound = (valueInEuro) => {
    let valueInPound = valueInEuro * .8;
    return valueInPound;
}

const sum = (a,b) => {
    return a + b;
}

console.log(sum(7,3));

module.exports = { sum, fromEuroToDollar, euroToYen, euroToPound };