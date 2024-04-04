const add = function(a, b) {

  return a + b;
	
};

const subtract = function(a, b) {

  return a - b;
	
};

const sum = function(arr) {

  return arr.reduce((sum, current) => sum + current, 0);
	
};

const multiply = function(arr) {

  return arr.reduce((prod, current) => prod * current, 1);

};

const power = function(a, b) {

    let pow = 1;

    for(let i = 0; i < b; i++)
      pow *= a;

    return pow;
	
};

const factorial = function(a) {

  let fact = 1;
    
    for(let i = 1; i <= a; i++){
       fact = fact * i;
    }
     

    return fact;
	
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
