let counter2 = 0;

do {
  console.log("counter: ", counter2);
  if (counter2 % 2 === 1) break;
  counter2++;
} while (counter2 < 5);
