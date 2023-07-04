type firstInputType = number | string | object | boolean;

function addNumberOrStringLesson19(a: firstInputType, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Parameters must be a string or number");
}

console.log(addNumberOrStringLesson19(123, "asdasdasd"));
