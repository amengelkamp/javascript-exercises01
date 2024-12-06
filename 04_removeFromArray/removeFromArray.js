const removeFromArray = function(numbers, ...args) {
    const newArray = []
    numbers.forEach(items => {
        //wenn args nicht zahlen aus array enthält
        if (!args.includes(items)) {
            newArray.push(items)
        }
    } 
)
    
        return newArray;
    };


//test case 1
//console.log("Testcase 1 - removes a single value: Das fertige Array lautet: " + removeFromArray([1, 2, 3, 4], 3));

//test case 2
//console.log("Testcase 2 - removes multiple values: Das fertige Array lautet: " + removeFromArray([1, 2, 3, 4], 3, 2));

//test case 3
//console.log("Testcase 3 - removes multiple of the same value: Das fertige Array lautet: " + removeFromArray([1, 2, 2, 3], 2));

//test case 4
//console.log("Testcase 4 - ignores non present values: Das fertige Array lautet: " + removeFromArray([1, 2, 3, 4], 7, "tacos"));

//test case 5
//console.log("Testcase 5 - ignores non present values, but still works: Das fertige Array lautet: " + removeFromArray([1, 2, 3, 4], 7, 2));

//test case 6
//console.log("Testcase 6 - can remove all values: Das fertige Array lautet: " + removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));

//test case 7
//console.log("Testcase 7 - works with strings: Das fertige Array lautet: " + removeFromArray(["hey", 2, 3, "ho"], "hey", 3));

//test case 8
//console.log("Testcase 8 - only removes same type: Das fertige Array lautet: " + removeFromArray([1, 2, 3], "1", 3));



// Do not edit below this line
module.exports = removeFromArray;
