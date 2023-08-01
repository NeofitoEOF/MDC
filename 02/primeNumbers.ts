function isPrime(num: number): boolean {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function findFirstNPrimes(n: number): number[] {
  const primes: number[] = [];
  let num = 2;

  while (primes.length < n) {
    if (isPrime(num)) {
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
