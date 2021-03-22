/**
 * Tuples are Array-like structures where each element represents
 * some property of a record, they are not frequently used
 */

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}
// Tuple representation of drink. With typescript we make shure the types of data
// for each position in the array, so 1 is a string, 2nd is a boolean...
const pepsi: [string, boolean, number] = ['brown', true, 40]

// We can create a Type like so
type Drink = [string, boolean, number]
const sprite: Drink = ['clear', true, 10]
const tea: Drink = ['brown', false, 0]

// This is a bad case of use of tuples, we dont know what the number means
const carSpecs: [number, number] = [400, 3354]

// Object format is more efficient
const carStats = {
  horsePower: 400,
  weight: 3354
}
