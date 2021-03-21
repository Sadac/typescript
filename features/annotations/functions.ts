// Define a function with params typed as number
// and a function typed as returning a number as well
const add = (a: number, b: number): number => {
  return a + b
}

function divide(a: number, b: number): number {
  return a / b
}

const multiply = function (a: number, b: number): number {
  return a * b
}

// A function that does not return anything or undefined with a string param
const logger = (message: string): void => {
  console.log(message)
}

// Means we will never get to the end of the function, because we're throwing an error
const throwError = (message: string): never => {
  throw new Error(message);
}
// another approach more clean would be:
const throwError2 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message
}

// Destructuring with annotations
const forecast = {
  date: new Date(),
  weather: 'sunny'
}
// Not using destructuring params
const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
}
// Using destructuring params
const logWeatherDestructured = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
}
logWeatherDestructured(forecast)
