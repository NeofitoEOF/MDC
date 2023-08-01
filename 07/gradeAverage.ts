function calculateAverage(grades: number[]): number {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  return total / grades.length;
}

function main(): void {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const grades: number[] = [];

  function promptForGrade(subject: string): void {
    readline.question(`Enter the grade for ${subject}: `, (input) => {
      const grade = parseFloat(input);

      if (isNaN(grade)) {
        console.log("Invalid input. Please enter a valid number.");
        promptForGrade(subject);
      } else {
        grades.push(grade);

        if (grades.length < 3) {
          promptForGrade(
            grades.length === 1 ? "second subject" : "third subject"
          );
        } else {
          const average = calculateAverage(grades);
          console.log(`The average grade is: ${average.toFixed(2)}`);
          readline.close();
        }
      }
    });
  }

  promptForGrade("first subject");
}

main();
