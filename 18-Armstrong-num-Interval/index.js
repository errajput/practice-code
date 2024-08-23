const minNum = 1;
const maxNum = 500;
console.log("Armstrong number");
for (let i = minNum; i <= maxNum; i++) {
  let numOfDigit = i.toString().length;
  let sum = 0;
  let temp = i;
  while (temp > 0) {
    let reminder = temp % 10;
    sum += reminder ** numOfDigit;
    temp = parseInt(temp / 10);
  }
  if (sum == i) {
    console.log(i);
  }
}
