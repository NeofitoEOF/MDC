const REGEX_NON_ALPHANUMERIC = /[^a-z0-9]/g;

function isPalindrome(word: string): boolean {
  const cleanWord = word.toLowerCase().replace(REGEX_NON_ALPHANUMERIC, "");
  const reversedWord = cleanWord.split("").reverse().join("");
  return cleanWord === reversedWord;
}

function main(): void {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Enter a word to check if it's a palindrome: ", (input) => {
    const word = input.trim();

    if (word.length === 0) {
      console.log("Invalid input. Please enter a non-empty word.");
    } else {
      const isPalindromic = isPalindrome(word);

      if (isPalindromic) {
        console.log(`"${word}" is a palindrome.`);
      } else {
        console.log(`"${word}" is not a palindrome.`);
      }
    }

    readline.close();
  });
}

main();
