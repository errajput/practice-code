function isEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
const n = 8;
console.log(isEven(n) ? `${n} is Even` : `${n} is Odd`);

const isOdd = (n) => n % 2 != 0;
console.log(isOdd(n) ? `${n} is odd` : `${n} is even`);
