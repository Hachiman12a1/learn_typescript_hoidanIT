let sumLesson30 = (x: number, y: number, z = false) => {
  if (!z) {
    return x + y;
  }
  if (z) {
    return x - y;
  }
};

let sumResultLesson30 = sumLesson30(1, 2);
let sumResultLesson30V1 = sumLesson30(1, 2, true);

console.log(sumResultLesson30, sumResultLesson30V1);
