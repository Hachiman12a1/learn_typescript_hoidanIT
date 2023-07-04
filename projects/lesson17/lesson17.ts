function handleException(errorMessage: string): never {
  throw Error(errorMessage);
}

let a = handleException("just a test error");
console.log(a);
