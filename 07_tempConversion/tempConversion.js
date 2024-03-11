const convertToCelsius = function(fahr) {
  let cel = ((fahr - 32) * 5) / 9;
  if(cel === Math.floor(cel))
    return cel;
  else
    return parseFloat(cel.toFixed(1));
};

const convertToFahrenheit = function(cel) {

  let fahr = ((cel * 9)/5) + 32;
  if(fahr === Math.floor(fahr))
    return fahr;
  else
    return parseFloat(fahr.toFixed(1));

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
