function displayMultiplicationTable(number: number): void {
  console.log(`Multiplication Table for ${number}:`);
  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
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
