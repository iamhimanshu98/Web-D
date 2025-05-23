let num = 97;
let flag = true;

if (num <= 1) flag = false;

for (let i = 2; i < Math.floor(Math.sqrt(num)); i++) {
  if (num % i === 0) {
    flag = false;
    break;
  }
}

console.log(flag ? "prime" : "not prime");
