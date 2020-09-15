/** Premitive Types */
let number = 1;
let newNumber = number;
number = 2;
console.log(newNumber);

/** References */
const person = {
  name: "max"
}

const newPerson = person;
person.name = "Menu";
console.log(newPerson);

/** If I want to actually copy the object to another object instead of assigning the reference, then 'spread' can be used */
const personCopy = {
  ...person
}
person.name = "Maisie"
console.log(personCopy);
console.log(newPerson);

const nums = [1, 2, 3, 4, 5];
const doubleNums = nums.map((num) => {
  return num * 2;
});

console.log(nums);
console.log(doubleNums);
