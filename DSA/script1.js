// let n = 5;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

function col(num) {
  if (num === 0) {
    console.log();
    return;
  }
  process.stdout.write("* ");
  col(num - 1);
}

function row(num) {
  if (num === 0) {
    return;
  }
  col(num);
  row(num - 1);
}

row(5);
