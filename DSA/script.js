document.getElementById("factor").addEventListener("click", () => {
  let num = Number(prompt("enter a number"));

  let i = 0;

  while (i < num / 2) {
    if (num % i == 0) console.log(`${i} * ${num / i} = ${num}`);
    i++;
  }
});
