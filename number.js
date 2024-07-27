// src/number.js

function getRandomNumber(min = 0, max = 100) {
  const validatemsg = validateNumbers(min, max);
  return validatemsg
    ? validatemsg
    : Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min = 0, max = 1) {
  const validatemsg = validateNumbers(min, max);

  return validatemsg ? validatemsg : Math.random() * (max - min) + min;
}

function validateNumbers(min, max) {
  if (typeof min !== "number" || typeof max !== "number") {
    return "Both min and max must be numbers";
  }
  if (min > max) {
    return "Min cannot be greater than max";
  }
  return null;
}

module.exports = { getRandomNumber, getRandomFloat };
