function calculateFinalValue(
  initialCapital: number,
  interestRate: number,
  months: number
): number {
  const interestRateDecimal = interestRate / 100;

  const finalValue =
    initialCapital * Math.pow(1 + interestRateDecimal / 12, 12 * months);

  return finalValue;
}

function main(): void {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Enter the initial capital: ", (initialCapitalInput) => {
    const initialCapital = parseFloat(initialCapitalInput);

    if (isNaN(initialCapital) || initialCapital < 0) {
      console.log(
        "Invalid input for initial capital. Please enter a non-negative number."
      );
      readline.close();
      return;
    }

    readline.question(
      "Enter the interest rate (as a percentage): ",
      (interestRateInput) => {
        const interestRate = parseFloat(interestRateInput);

        if (isNaN(interestRate) || interestRate < 0) {
          console.log(
            "Invalid input for interest rate. Please enter a non-negative number."
          );
          readline.close();
          return;
        }

        readline.question(
          "Enter the investment time (in months): ",
          (monthsInput) => {
            const months = parseInt(monthsInput, 10);

            if (isNaN(months) || months < 0) {
              console.log(
                "Invalid input for investment time. Please enter a non-negative integer."
              );
              readline.close();
              return;
            }

            const finalValue = calculateFinalValue(
              initialCapital,
              interestRate,
              months
            );
            console.log(
              `The final value of the investment is: ${finalValue.toFixed(2)}`
            );
            readline.close();
          }
        );
      }
    );
  });
}

main();
