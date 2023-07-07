// overloading
function addNew(a: number, b: number): number;
function addNew(a: string, b: string): string;

function addNew(a: any, b: any) {
  return a + b;
}

console.log(addNew(1, 2), addNew("Dao", " Van Dat"));
