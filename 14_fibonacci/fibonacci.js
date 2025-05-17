const fibonacci = function (number) {
    // string ise sayıya çevir
    if (typeof number === 'string') {
        number = parseInt(number);
    }

    // negatifse "OOPS" döndür
    if (number < 0) {
        return "OOPS";
    }

    // fibonacci dizisi için temel durumlar
    if (number === 0) return 0;
    if (number === 1) return 1;

    let firstNum = 0;
    let secondNum = 1;
    let result = 0;

    for (let i = 2; i <= number; i++) {
        result = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = result;
    }

    return result;
};

// 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597
// Do not edit below this line
module.exports = fibonacci;
