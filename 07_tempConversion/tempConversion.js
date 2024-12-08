const convertToCelsius = function(Fahrenheit) {

  console.log(Fahrenheit);
  let Celsius = (Fahrenheit - 32) * 5/9;
  return Math.round(Celsius * 10) / 10;
};


console.log("Celsius ist umgerechnet " + convertToCelsius(100));


const convertToFahrenheit = function(Celsius) {
  console.log(Celsius);
  let Fahrenheit = Celsius * 1.8 + 32;
  return Math.round(Fahrenheit * 10) / 10;
};

/*

*/
console.log("Fahrenheit ist umgerechnet " + convertToFahrenheit(0));



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
  };
