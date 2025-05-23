// 2 6 12 20 30 42 56 72 90 110

let num = 0;
let add = 0;
let n = 6;

for (let i = 0; i < n; i++) {
  add += 2;
  num += add;
  process.stdout.write(num + " ");
}

console.log();

for (let i = 1; i <= n; i++) {
  let sum = i * (i + 1);
  process.stdout.write(sum + " ");
}
