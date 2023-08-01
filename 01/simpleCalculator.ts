function calculateOperations(num1: number, num2: number): void {
  const sum: number = num1 + num2;
  const difference: number = num1 - num2;
  const product: number = num1 * num2;
  const quotient: number = num1 / num2;

  console.log(`
    Sum in number is: ${sum}
    Min in number is: ${difference}
    Mult in number is: ${product}
    Divide in number is: ${quotient}
  `);
}

calculateOperations(2, 2);
