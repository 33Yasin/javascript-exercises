const reverseString = function(obj) {
    let arr = obj.toString().split('');
    let reversedArr = arr.reverse();
    return reversedArr.join('');
};


// Do not edit below this line
module.exports = reverseString;
