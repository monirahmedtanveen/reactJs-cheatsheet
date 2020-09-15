class Human {
  age = 25;
  
  printMyAge = () => {
    console.log(this.age);
  }
}

class Person extends Human {
  name = "Monir Ahmed";
  age = 28;

  printMyName = () => {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printMyAge();
