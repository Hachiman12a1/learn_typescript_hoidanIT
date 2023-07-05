const sumLesson29 = (x: number, y?: number, z?: number) => {
  if (y && z) return x + y + z;
  if (!y && z) return x + z;
  if (y && !z) return x + y;

  return x;
};

let sumResult = sumLesson29(1, undefined, 4);

console.log(sumResult);
