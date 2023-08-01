function displayMultiplicationTable(number: number): void {
  console.log(`Multiplication Table for ${number}:`);
  for (let multiplier = 1; multiplier <= 10; multiplier++) {
    const result = number * multiplier;
    console.log(`${number} x ${multiplier} = ${result}`);
  }
}

function main(): void {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Enter a number to display its multiplication table: ",
    (input) => {
      const number = parseInt(input, 10);

      if (isNaN(number)) {
        console.log("Invalid input. Please enter a valid number.");
      } else {
        displayMultiplicationTable(number);
      }

      readline.close();
    }
  );
}

main();
