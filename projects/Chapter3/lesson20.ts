let name123: string = "";

if (name123) {
  console.log("YES");
} else {
  console.log("NO");
}

let discount: number;

let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
  discount = 5;
} else if (itemCount > 5 && itemCount <= 10) {
  discount = 10;
} else if (itemCount > 10 && itemCount <= 15) {
  discount = 15;
} else {
  discount = 20;
}

console.log(discount);
