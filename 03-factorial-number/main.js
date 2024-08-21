const num = 5;
if (num < 0) {
  console.log("negative value donot have factorial");
} else if (num === 0) {
  console.log(`${num} has factorial 1`);
} else {
  let fact = 1;
  for (i = 1; i <= num; i++) {
    fact *= i;
  }
  console.log(`${num} has factorial ${fact}`);
}
