function printPrimeNumbers(largestnum, highnum) {
  // const largestnum = 2;
  // const highnum = 10;

  console.log(`The prime number between ${largestnum} and ${highnum} are :`);
  largestnum = parseFloat(largestnum);
  highnum = parseFloat(highnum);
  const primeNumbers = [];
  for (let i = largestnum; i <= highnum; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (i > 1 && flag == 0) {
      console.log(i);
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
}

printPrimeNumbers(2, 10);
