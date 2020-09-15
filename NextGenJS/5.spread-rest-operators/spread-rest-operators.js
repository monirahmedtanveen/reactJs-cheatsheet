/** Spread Operator */
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);

const person = {
  name: 'max'
}

const newPerson = {
  ...person,
  age: 28
}

console.log(newPerson)

/** Rest Operator */
const filter = (...args) => {
  return args.filter(el => el === 2)
}

console.log(filter(1, 2, 3, 4));
