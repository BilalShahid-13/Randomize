#randomizer-pro-js

# Randomize

A JavaScript package to generate random colors and numbers.

## Installation

You can install `randgen-js` via npm:

```bash
npm install randgen-js


getRandomNumber(min, max)

Generates a random integer between min (inclusive) and max (inclusive).

Parameters:

    min (number): The minimum value.
    max (number): The maximum value.

Returns:

    number: A random integer between min and max.


getRandomFloat(min, max)

Generates a random float between min (inclusive) and max (inclusive).

Parameters:

    min (number): The minimum value.
    max (number): The maximum value.

Returns:

    number: A random float between min and max.


getRandomColor()

Generates a random color in hexadecimal format.

Returns:

    string: A random color in hexadecimal format (e.g., #ff5733).

getRandomHSL()

Generates a random color in HSL (Hue, Saturation, Lightness) format.

Returns:

    string: A random color in HSL format (e.g., hsl(120, 100%, 50%)).


Usage

Importing the Package

First, import the package into your project:

const { getRandomNumber, getRandomFloat, getRandomColor, getRandomHSL } = require('randomizer-pro-js');

Examples
Generating Random Numbers

To generate random numbers, use the getRandomNumber function. Specify the minimum and maximum values as parameters.

const randomNumber = getRandomNumber(1, 10);
console.log(randomNumber);
```
