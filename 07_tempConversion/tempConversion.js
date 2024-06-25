const convertToCelsius = function(degF) {
  degC = (degF - 32) / (9/5);
  if(  Math.abs(degC - Math.round(degC)) > 0){
    return parseFloat(Number.parseFloat(degC).toFixed(1))
  }
  return degC;
};

const convertToFahrenheit = function(degC) {
  degF = (degC * (9/5)) + 32;
  if(  Math.abs(degF - Math.round(degF)) > 0){
    return parseFloat(Number.parseFloat(degF).toFixed(1))
  }
  return degF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
