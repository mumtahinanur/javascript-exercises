const convertToCelsius = function(num) {
  const cel = ((num - 32) * (5/9));
  return +cel.toFixed(1);
};

const convertToFahrenheit = function(num) {
  const far = ((num * 9) / 5) + 32;
  return +far.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
