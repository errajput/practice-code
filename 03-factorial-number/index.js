function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
const n = 5;
console.log(`${n} factorial is`, factorial(n));
