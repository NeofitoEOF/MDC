function isPrimeNumber(num: number): boolean {
  if (num <= 1) return false;

  for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
}

function findFirstNPrimes(n: number): number[] {
  const primes: number[] = [];
  let num = 2;

  while (primes.length < n) {
    if (isPrimeNumber(num)) {
      primes.push(num);
    }
    num++;
  }
  return primes;
}

function printFirstNPrimes(n: number): void {
  const primes = findFirstNPrimes(n);
  console.log(`The first ${n} prime numbers are: ${primes.join(", ")}`);
}

printFirstNPrimes(10);
