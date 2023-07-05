class Person {
  age: number;
  firstName: string;
  lastName: string;

  constructor(age: number, firstName: string, lastName: string) {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}

let student = new Person(12, "Dao", "Van Dat");

console.log(student.getFullName());
