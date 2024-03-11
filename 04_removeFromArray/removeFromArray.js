const removeFromArray = function(arr, ...numbersToRemove) {
    for (let numberToRemove of numbersToRemove) {
        let indexesToRemove = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === numberToRemove) {
                indexesToRemove.push(i);
            }
        }

        for (let i = indexesToRemove.length - 1; i >= 0; i--) {
            arr.splice(indexesToRemove[i], 1);
        }
    }

    return arr;
};



// Do not edit below this line
module.exports = removeFromArray;
