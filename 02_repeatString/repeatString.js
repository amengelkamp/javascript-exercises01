let greeting = "hey";
let threegreetings = "";
const repeatString = function() {

let i = 0;

for (i = 0; i < 3; i++) { 
  threegreetings = threegreetings + greeting;
}
return threegreetings;
};

// Do not edit below this line
module.exports = repeatString;
