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


### getRandomHexaColor()

Generates a random color in hexadecimal format.

Returns:

* string: A random color in hexadecimal format (e.g: #ff5733).

### getRandomHSL()

Generates a random color in HSL (Hue, Saturation, Lightness) format.

Returns:

* string: A random color in HSL format (e.g., hsl(120, 100%, 50%)).


### getRandomRgbColor()

Generates a random color in RGB (Red, Green, Blue) format.

Returns:

* string: A random color in RGB format (e.g., rgb(120, 100, 50)).


### getRandomRgbaColor()

Generates a random color in RGB with alpha (Red, Green, Blue) format.
You can change opacity of your colors.

Returns:

* string: A random color in RGBa format (e.g., rgb(120, 100, 50,1)).

## Usage
Importing the Package

First, import the package into your project:

```
const { getRandomNumber, getRandomFloat, getRandomRgbaColor, getRandomHSL,getRandomHexaColor , getRandomRgbColor } = require('randomizer-pro-js');
```

#### OR

```
import {getRandomNumber, getRandomFloat, getRandomRgbaColor, getRandomHSL,getRandomHexaColor , getRandomRgbColor} from 'randomizer-pro-js'
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

#### Generating RGB Colors

To generate random rgb colors, use the `getRandomRgbColor` function. This function returns a random color in hexadecimal format.

```
const color = getRandomRgbColor();
console.log(color); // e.g., #ff5733
```

#### Generating Random HSL Colors

To generate random HSL colors, use the `getRandomHSL` function. This function returns a random color in HSL format.

```
const hslColor = getRandomHSL();
console.log(hslColor); // e.g., hsl(120, 100%, 50%)
```

#### Generating RGBa Colors

To generate random rgba colors, use the `getRandomRgbaColor` function. This function returns a random color in hexadecimal format.

```
const color = getRandomRgbaColor(1);
console.log(color); // e.g., #ff5733
```


# Contributing

If you would like to contribute, please fork the repository and submit a pull request.

# License

This project is licensed under the MIT License.

# Author

Bilal Shahid


