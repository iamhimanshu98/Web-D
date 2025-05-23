// let num = 1232;
// list = num.toString().split("");

list = [1, 5, 6, 7, 3, 2, 5, 2];
n = list.length;
for (i = 0; i < n / 2; i++) {
  let temp = list[i];
  list[i] = list[n - i - 1];
  list[n - i - 1] = temp;
}

console.log(list);
// console.log(parseInt(list.join("")));

