const getTotal = (...numbers: number[]): number => {
  let total = 0;
  numbers.forEach((n) => (total += n));

  return total;
};

console.log(getTotal(11, 2, 3, 4435));

const multiply = (n: number, ...m: number[]) => {
  return m.map((x) => x * n);
};

console.log(multiply(11, 2, 3, 4435));

const greet = (greeting: string, ...names: string[]) => {
  return greeting + " " + names.join(", ") + "!";
};

console.log(greet("Hello", "Dao", "Van Dat"));
