/** Normal Functions */
function printMyName(name) {
  console.log(name);
}

printMyName("Monir Ahmed");

/** Arrow Functions */
const printYourName = (name) => {
  console.log(name);
}

printYourName("Arya Stark");

const multiply_v1 = (number) => {
  return number * 2;
}

console.log(multiply_v1(2))

const multiply_v2 = (number) => number * 2;

console.log(multiply_v2(2));

const multiply_v3 = number => number * 2;

console.log(multiply_v3(2));
