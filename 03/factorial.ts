function factorial(n: number): number {
  if (n < 0) {
    throw new Error("The factorial of a negative number is not defined.");
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function main() {
  const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter a number: ", (input) => {
    const number = parseInt(input, 10);
    const factorialOfNumber = factorial(number);
    console.log(`The factorial of ${number} is ${factorialOfNumber}.`);
    rl.close();
  });
}

if (require.main === module) {
  main();
}
