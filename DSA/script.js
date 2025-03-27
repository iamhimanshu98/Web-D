document.getElementById("factor").addEventListener("click", () => {
  let num = Number(prompt("enter a number"));
  let i = 0;
  while (i < num / 2) {
    if (num % i === 0) console.log(`${i} * ${num / i} = ${num}`);
    i++;
  }
});

let primeChecker = (num) => {
  let isPrime = true;
  if (num <= 1) return false;
  if (num === 2 || num === 3) return isPrime;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let count = 0;
  for (let i = 5; i <= Math.floor(Math.sqrt(num)); i += 2) {
    count++;
    if (num % i === 0) return !isPrime;
  }

  return isPrime;
};

document.getElementById("prime").addEventListener("click", () => {
  let num = Number(prompt("enter a number"));
  if (isNaN(num)) console.log("Invalid input");
  else if (primeChecker(num)) console.log("Prime number");
  else num >= 2 ? console.log("Composite number") : console.log("Not Prime");
});

function sum() {
  let num1 = Number(prompt("enter num1"));
  let num2 = Number(prompt("enter num2"));

  console.log(num1 + num2);
}

document.getElementById("sum").addEventListener("click", () => {
  sum();
});
