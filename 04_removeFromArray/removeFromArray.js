const removeFromArray = function() {
    let numbers = [1, 2, 3, 4];
    numbers = numbers.filter(number => number !== 3);

    return numbers; // Outputs: [1, 2, 4, 5]
 
};

// Do not edit below this line
module.exports = removeFromArray;
