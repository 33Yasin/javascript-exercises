const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((acc, val) => acc * val, 1);

};

const power = function(number1, number2) {
	return number1 ** number2;
};

const factorial = function(number) {
  let result = number;
	if(number === 0) {
    return 1;
  }
  while(number > 1) {
    result *= (number - 1);
    number--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
