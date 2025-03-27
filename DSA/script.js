document.getElementById("factor").addEventListener("click", () => {
  let num = Number(prompt("enter a number"));

  let i = 0;

  while (i < num / 2) {
    if (num % i == 0) console.log(`${i} * ${num / i} = ${num}`);
    i++;
  }
});

let primeChecker = () => {
  let num = Number(prompt("enter a number"));
  let isPrime = true;
  if(isNaN(num)){
//   console.log("not a number.");
  return num
} else{
    if(num <= 1) return false
    if(num == 2) return isPrime
    if (num % 2 == 0) return false;
    for (let i = 3; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i == 0) return !isPrime;
    }
    
    return isPrime;
}
};

document.getElementById("prime").addEventListener("click", () => {
    let ans = primeChecker()
    if(isNaN(ans)) console.log("not a number.");
    else if (ans) console.log("Prime");
    else console.log("Not Prime");
});
