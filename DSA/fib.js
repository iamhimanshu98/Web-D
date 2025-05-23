// 0 1 1 2 3 5 8 13 

function fib(n) {
  if (n <= 1) return n;
  else return fib(n - 1) + fib(n - 2);
}

let n = 8;
for (let i = 0; i < n; i++) process.stdout.write(fib(i) + " ");
