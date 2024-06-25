const add = function(x, y) {
	return (x + y);
};

const subtract = function(x, y) {
	return (x - y);
};

const sum = function(arr) {
  if (arr.length != 0){
	  return arr.reduce((total, curr) => total + curr)
  } else {
    return 0;
  }
};

const multiply = function(arr) {
  return arr.reduce((total, curr) => total * curr)
};

const power = function(a, n) {
	return Math.pow(a, n);
};

const factorial = function factorial(x) {
	if(x > 1){
    return (x * factorial(x-1));
  } else {
    return 1;
  }
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
