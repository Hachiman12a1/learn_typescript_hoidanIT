enum apiStatus {
  PENDING,
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
}

let a1 = apiStatus.PENDING;
let a2 = apiStatus.FULFILLED;
let a3 = apiStatus.REJECTED;

console.log(a1, a2, a3);
