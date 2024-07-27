const {
  getRandomHexaColor,
  getRandomRgbColor,
  getRandomHslColor,
} = require("./color");
const { getRandomNumber, getRandomFloat } = require("./number");

// colors
console.log(getRandomHexaColor());
console.log(getRandomRgbColor());
console.log(getRandomHslColor());

// numbers
console.log(getRandomFloat(0,100));
console.log(getRandomNumber(0, 100));

module.exports = {
  getRandomFloat,
  getRandomNumber,
  getRandomHexaColor,
  getRandomRgbColor,
};
