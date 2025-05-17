const palindromes = function (str) {
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;

};

// Do not edit below this line
module.exports = palindromes;
