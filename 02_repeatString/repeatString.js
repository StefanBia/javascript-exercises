const repeatString = function(stringToRepeat, numberOfTimes) {
    let result = "";
    for(i = 0; i < numberOfTimes; i++){
        result += stringToRepeat;
    }
    if(numberOfTimes < 0)
        return 'ERROR';
    return result;
};

// Do not edit below this line
module.exports = repeatString;
