function calculateFactorial(n: number): number {
  if (n < 0) {
    throw new Error("The factorial of a negative number is not defined.");
  } else if (n === 0) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
}

function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Enter a number: ", (input) => {
    const number = parseInt(input, 10);

    if (isNaN(number)) {
      console.log("Invalid Input. please enter a valid number.");
    } else {
      const factorialOfNumber = calculateFactorial(number);
      console.log(`The factorial of ${number} is ${factorialOfNumber}.`);
    }
    readline.close();
  });
}

if (require.main === module) {
  main();
}
