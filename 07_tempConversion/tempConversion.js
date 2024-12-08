const convertToCelsius = function(Fahrenheit) {

  //Umrechnung Fahrenheit in Celsius: °C = (°F - 32) * 5/9 
  console.log(Fahrenheit);
  let Celsius = (Fahrenheit - 32) * 5/9;

  return Celsius;
};


console.log("Celsius ist umgerechnet " + convertToCelsius(32));


//Fahrenheit to Celsius 
//x °C ≘ (x × ⁠9/5⁠ + 32) °F 


const convertToFahrenheit = function(Celsius) {
};

//Celsius to Fahrenheit
//x °F ≘ (x − 32) × ⁠5/9⁠ °C

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
  };
