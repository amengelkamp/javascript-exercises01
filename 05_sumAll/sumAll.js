const sumAll = function(beginningnumber, endingnumber) {

    //console.log("Die beginningnumber ist " +  beginningnumber);
    //console.log("Die endingnumber ist " + endingnumber);
    //beginningnumber + beginningnumber+1 while <endingnumber + endingnumber
    newSum = (0);
    
    if (beginningnumber > endingnumber) {
        [beginningnumber, endingnumber] = [endingnumber, beginningnumber]; 
    }
    for (let i = beginningnumber; i <= endingnumber; i++) { 
        newSum += i;

  
    }

     return newSum;

};

console.log("Testcase 1 - sums numbers within the range: Die finale Summe lautet " + sumAll(123, 1));


// Do not edit below this line
module.exports = sumAll;
