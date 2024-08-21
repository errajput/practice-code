const num = 1;
const num2 = 37;
const num3 = 8;
let largest;
if (num >= num2 && num >= num3) {
  largest = num;
} else if (num2 >= num && num2 >= num3) {
  largest = num2;
} else {
  largest = num3;
}
// largest = Math.max(num, num2,num3)
console.log("The largest number is " + largest);
