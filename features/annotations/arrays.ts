const carMakers = ['ford', 'toyota', 'chevy'] // type inference
// const carMakers: string[] = ['ford', 'toyota', 'chevy']

const anyArray = [] // type inference
// const anyArray: any[] = []

const dates = [new Date(), new Date] // type inference
// const dates: Date[] = [new Date(), new Date]

// multidimensional array of strings, reads as: an array [] that will have an array of strings []
// read from right to left
const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

carMakers.map((car: string) => {
  return car
})

// Flexible typs type inference : (string | Date)[] array of string or date
const importantDates: (string | Date)[] = [new Date()]
importantDates.push('2030-10-10')
importantDates.push(new Date())
