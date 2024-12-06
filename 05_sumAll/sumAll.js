const sumAll = function(beginningnumber, endingnumber) {

    let sumbetween = 0;
    console.log("Die beginningnumber ist " +  beginningnumber);
    console.log("Die endingnumber ist " + endingnumber);
    for (let i = beginningnumber; i <= endingnumber; i++) { 
        sumbetween = beginningnumber + 1;
        console.log("Die sumbetween ist " + sumbetween);
        console.log("i ist gleich " + (i));
    }

    const newSum = beginningnumber + sumbetween + endingnumber;

    

   


    return newSum;

    //sumAll(1, 4) returns the sum of 1 + 2 + 3 + 4 which is 10
    //beginningnumber + beginningnumber+1 while <endingnumber + endingnumber

    //sumAll(5,12) returns the sum of 5+6+7+8+9+10+11+12 = 68



};

console.log("Testcase 1 - sums numbers within the range: Die finale Summe lautet " + sumAll(1, 4));


// Do not edit below this line
//module.exports = sumAll;
