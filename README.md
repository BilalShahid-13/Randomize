# Randomizer Pro JS

A JavaScript package to generate random colors and numbers.

## Installation

You can install `randomizer-pro-js` via npm:

```bash
npm install randomizer-pro-js
```

# Functions
### getRandomNumber(min, max)
Generates a random integer between min (inclusive) and max (inclusive).

Parameters:
* min (number): The minimum value.
* max (number): The maximum value.

Returns:
* number: A random integer between min and max.

### getRandomFloat(min, max)

Generates a random float between min (inclusive) and max (inclusive)

Parameters:

* min (number): The minimum value.
* max (number): The maximum value.

Returns:

* number: A random float between min and max.


### getRandomColor()

Generates a random color in hexadecimal format.

Returns:

* string: A random color in hexadecimal format (e.g: #ff5733).

### getRandomHSL()

Generates a random color in HSL (Hue, Saturation, Lightness) format.

Returns:

* string: A random color in HSL format (e.g., hsl(120, 100%, 50%)).


## Usage
Importing the Package

First, import the package into your project:

```
const { getRandomNumber, getRandomFloat, getRandomColor, getRandomHSL } = require('randomizer-pro-js');
```


### Examples

#### Generating Random Numbers

To generate random numbers, use the `getRandomNumber` function. Specify the minimum and maximum values as parameters.


```
const randomInt = getRandomNumber(1, 100);
console.log(randomInt);
```

#### Generating Random Floating-Point Numbers

To generate random floating-point numbers, use the `getRandomFloat` function. Specify the minimum and maximum values as parameters.

```
const randomFloat = getRandomFloat(1, 100);
console.log(randomFloat); // e.g., 42.567
```

#### Generating Random Colors

To generate random colors, use the `getRandomColor` function. This function returns a random color in hexadecimal format.

```
const color = getRandomColor();
console.log(color); // e.g., #ff5733
```

#### Generating Random HSL Colors

To generate random HSL colors, use the `getRandomHSL` function. This function returns a random color in HSL format.

```
const hslColor = getRandomHSL();
console.log(hslColor); // e.g., hsl(120, 100%, 50%)
```


# Contributing

If you would like to contribute, please fork the repository and submit a pull request.

# License

This project is licensed under the MIT License.

# Author

Bilal Shahid


