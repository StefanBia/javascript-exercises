const reverseString = function(reverseString) {
    result = '';

    for(i = reverseString.length - 1; i >= 0; i--){
        result += reverseString.charAt(i);
    }

    return result;

};

// Do not edit below this line
module.exports = reverseString;
