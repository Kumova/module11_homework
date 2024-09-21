

function isPrime(a) {
  if (!Number.isInteger(a) || a < 2 || a > 1000) return "Данные неверны";

  let x = Math.sqrt(a);
  for (let i = 2; i <= x; i++)
      if (a % i === 0) return "Число не является простым";

  return "Простое число";
}

isPrime();

console.log(isPrime(456));


