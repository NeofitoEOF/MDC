function countVowels(sentence: string): number {
  const vowels = /[aeiou]/gi;
  const matches = sentence.match(vowels);
  return matches ? matches.length : 0;
}

function main(): void {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Enter a sentence to count the number of vowels: ",
    (input) => {
      const sentence = input.trim();

      if (sentence.length === 0) {
        console.log("Invalid input. Please enter a non-empty sentence.");
      } else {
        const vowelCount = countVowels(sentence);
        console.log(`The sentence "${sentence}" has ${vowelCount} vowel(s).`);
      }

      readline.close();
    }
  );
}

main();
