const sumAll = function(number1, number2) {
    let total = 0;
    let smallNumber;
    let bigNumber; 

    if(number1<0 || number2<0 || !Number.isInteger(number1) || !Number.isInteger(number2)){
        return "ERROR";
    }

    if(number1 < number2) {
        smallNumber = number1;
        bigNumber = number2;
    } else {
        smallNumber = number2;
        bigNumber = number1;
    }

    for(let i = smallNumber; i <= bigNumber; i++) {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
