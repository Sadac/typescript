let apples = 5; // type inference automatically knows based on the definition which type is

let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// array of strings
let colors: string[] = ['red', 'green', 'blue'];

// array of numbers
let myNumbers: number[] = [1, 2, 3];

// arary of booleans
let truths: boolean[] = [true, false, true]

// Classes
class Car {

}
let car: Car = new Car()

// Object literal
let point: { x: number; y: number; } = {
  x: 10,
  y: 20
}

// Function: annotation << : (i: number) => void >> a function with a int param
// that returns nothing (void)
const logNumber: (i: number) => void
  = (i: number) => {
    console.log(i)
  }

/**
 * WHEN TO USE ANNOTATIONS
 */
// 1) Function that returns the 'any' type
const json = '{ "x": "10", "y": "20" }';
const coordinatesAny = JSON.parse(json); // set to any because a json is not predictable its inner data
// annotate if we previously know what type of data we are getting
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates)

// 2 When we declare a variable on one line
// and initialize it later
let words: string[] = ['red', 'green', 'blue']
let foundWord: boolean; // let foundWord = false; can work too

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true
  }
}

// 3 Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]

// if I want to assign the first number above zero if match, or false if not
// we will have a variable that has two possible values
let numberAboveZero: boolean | number = false; // so we could define two possible types to the variable
// boolean or numnber and initialize it on false

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}

