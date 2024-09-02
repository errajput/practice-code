function checkNumber(num) {
  // const num = -19;
  if (num >= 0) {
    if (num == 0) {
      console.log("the number is zero");
    } else {
      console.log("the number is positive");
    }
  } else {
    console.log("the number is negative");
  }
}

checkNumber(-19);
