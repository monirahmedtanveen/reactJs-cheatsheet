class Human {
  constructor() {
    this.gender = "Male";
    this.age = 25;
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Monir Ahmed";
    this.age = 28;
  }

  printMyName() {
    console.log(this.name);
  }

  printAge() {
    console.log(this.age);
  }
}

const person = new Person();
person.printMyName();
person.printAge();
