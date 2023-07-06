class Person2 {
  private age: number;
  constructor(age2: number) {
    this.age = age2;
  }

  get _age() {
    return this.age;
  }
  set _age(value: number) {
    if (value < 0 || value > 100) {
      throw new Error("Invalid age");
    }
    this.age = value;
  }
}

let person2 = new Person2(23);

let checkAge = person2._age;

console.log(checkAge);

person2._age = 30;

console.log(person2);
