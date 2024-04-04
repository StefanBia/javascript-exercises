const fibonacci = function(a) {
  
    if (typeof a === 'string') {
        a = parseInt(a);
    }
    
    if (a === 1 || a === 0) {
        return a;
    }

    if (a < 0) {
        return "OOPS";
    }


    let last = 1;
    let secToLast = 0;
    let result = 1;

    for (let i = 2; i <= a; i++) {
        result = last + secToLast;
        secToLast = last;
        last = result;
    }

    return result;
};

// Do not edit below this line
module.exports = fibonacci;
