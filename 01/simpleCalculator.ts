function calculator(num1: number, num2: number): void {
  const sum: number = num1 + num2;
  const min: number = num1 - num2;
  const mult: number = num1 * num2;
  const divid: number = num1 / num2;

  console.log(`
    Sum in number is: ${sum}
    Min in number is: ${min}
    Mult in number is: ${mult}
    Divide in number is: ${divid}
  `);
}

calculator(2, 2);
