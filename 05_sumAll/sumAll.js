const sumAll = function(smallNumber, largeNumber) {

    if(typeof smallNumber !== 'number' || typeof largeNumber !== 'number')
        return 'ERROR';

    if(smallNumber > largeNumber){
        let aux = largeNumber;
        largeNumber = smallNumber;
        smallNumber = aux;
    }

    if(smallNumber < 0)
        return 'ERROR';
   

    let result = 0;

    for(i = smallNumber; i <= largeNumber; i++)
        result += i;
    return result;

};

// Do not edit below this line
module.exports = sumAll;
