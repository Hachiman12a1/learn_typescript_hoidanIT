function addNumberOrString(
  a: number | string | object | boolean,
  b: number | string
) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Parameters must be a string or number");
}

console.log(addNumberOrString(true, "asdasdasd"));
