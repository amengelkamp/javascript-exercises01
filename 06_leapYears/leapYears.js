const leapYears = function(potentialleapyear) {

    //> Leap years are years divisible by four (like 1984 and 2004). 
    //However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
console.log(potentialleapyear);

let isDividablebyFour = potentialleapyear % 4 === 0;
console.log("is div 4", isDividablebyFour);

let isDividableByHundred = potentialleapyear % 100 === 0;
console.log("is ! div 100", isDividableByHundred);

let isDividablebyFourHundred = potentialleapyear % 400 === 0;
console.log("is div 400", isDividableByHundred);

    if (isDividablebyFourHundred) {
        return true;
}

    if (isDividableByHundred) { //false
        return false; 
}

    if (isDividablebyFour) {
        return true;
    }


    return false;

};

console.log("Testcase 1 " + leapYears(700));
//console.log("Testcase 2 " + leapYears(1600));

// Do not edit below this line
module.exports = leapYears;
