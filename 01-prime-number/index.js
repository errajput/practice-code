function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
const num = 18;
// console.log(`${num} is a prime number`, isPrime(num));
if (isPrime(num)) {
  console.log(`${num} is a prime number`);
} else {
  console.log(`${num} is not a prime number`);
}
