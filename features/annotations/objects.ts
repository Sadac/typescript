export { };
// to solve error https://medium.com/@muravitskiy.mail/cannot-redeclare-block-scoped-variable-varname-how-to-fix-b1c3d9cc8206

const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age
  }
}

// destructuring age from profile
const { age, name }: { age: number; name: string } = profile
console.log(age, name);

// destructuring coords lat, lng
const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile

