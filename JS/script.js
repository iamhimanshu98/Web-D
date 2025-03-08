console.log("%cJust one more day! & you are there", "color: gray");
console.log("%cThe best is yet to come! 💪", "color:gray");

// let message = 'Hey dont do this!'
// let warning = 'This could lead to a problem'
// let error_message = 'See now! Error occured'

// console.log(message)
// // confirm('Do you really want this ?')
// console.warn(warning)
// // alert("Don't do this!")
// console.error(error_message)

// // prompt('Hey there')

// const test = `${message}, \n${warning}, \n${error_message}`
// console.log(test)

// var a = 9;

// console.log(String(a));

// greet();

// function greet() {
//   console.log("Hello!");
// }

// let helllo = function (b) {
//   b++;
//   console.log(b--);
// };

// helllo(5);

// for (i = 0; i <= 7; i++) {
//   console.log(i);
// }

// a = 0;
// if (a == 0) {
//   console.log(a);
// } else if (a == 0) {
//   console.log(a++);
// } else {
//   console.log(a++);
// }

// object = [10, 20, 30, 40, 50];

// for (const element in object) {
//   console.log(object[element]);
// }

// let amount = 4873;
// let original_amount = amount;

// if (amount >= 500) {
//   num = Math.floor(amount / 500);
//   current = 500;
//   console.log(`500 Rupee Currency: ${num} * ${current} = ${num * current}`);
//   amount %= 500;
// }
// if (amount < 500 && amount >= 200) {
//   num = Math.floor(amount / 200);
//   current = 200;
//   console.log(`200 Rupee Currency: ${num} * ${current} = ${num * current}`);
//   amount %= 200;
// }
// if (amount < 200 && amount >= 100) {
//   num = Math.floor(amount / 100);
//   current = 100;
//   console.log(`100 Rupee Currency: ${num} * ${current} = ${num * current}`);
//   amount %= 100;
// }
// if (amount < 100 && amount >= 50) {
//   num = Math.floor(amount / 50);
//   current = 50;
//   console.log(`50 Rupee Currency: ${num} * ${current} = ${num * current}`);
//   amount %= 50;
// }
// if (amount < 50 && amount >= 20) {
//   num = Math.floor(amount / 20);
//   current = 20;
//   console.log(`20 Rupee Currency: ${num} * ${current} = ${num * current}`);
//   amount %= 20;
// }
// if (amount < 20 && amount >= 10) {
//   num = Math.floor(amount / 10);
//   current = 10;
//   console.log(`10 Rupee Currency: ${num} * ${current} = ${num * current}`);
//   amount %= 10;
// }
// if (amount < 10 && amount >= 5) {
//   num = Math.floor(amount / 5);
//   current = 5;
//   console.log(`5 Rupee Currency: ${num} * ${current} = ${num * current}`);
//   amount %= 5;
// }
// if (amount < 5 && amount >= 2) {
//   num = Math.floor(amount / 2);
//   current = 2;
//   console.log(`2 Rupee Currency: ${num} * ${current} = ${num * current}`);
//   amount %= 2;
// }
// if (amount) {
//   console.log(`1 Rupee Currency: ${amount}`);
// }

// console.log(`Total amount: ${original_amount}`);
/*

const currency = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0];
let index = 0;
let current = 0;

function currency_calculator(amount) {
  current = Number(currency[index]);
  count = Math.floor(amount / current);
  amount %= current;
  if (count) {
    console.log(
      `${current} Rupee Currency: ${count} * ${current} = ${count * current}`
    );
  }
  if (!current) {
    return;
  }
  index++;
  currency_calculator(amount);
}

currency_calculator(5983);

*/
/*
num1 = 40;
num2 = 50;

console.log(`${num1} ${num2}`)

console.log(num1 > num2 ? `${num1} is greater` : `${num2} is greater`);

console.log(num1>50?"positive":num2<0?"negative":"no result")
*/
/*
num=-78

console.log(num>0?"positive":num===0?"zero":"negative")

*/
/*
day = 20;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day");
    break;
}
*/

// day = 3;
// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//     console.log("Working Day");
//     break;
//   case 5:
//   case 6:
//   case 7:
//     console.log("Weekend");
//     break;
//   default:
//     console.log("Invalid Day");
//     break;
// }

// let pro = prompt("Enter a number: ");

// if (pro === null) {
//   console.log("prompt cancelled!");
// } else {
//   let num = Number(pro);
//   if (isNaN(num)) {
//     console.log("invalid input");
//   } else if (num <= 0) {
//     console.log("Please enter a positive natural number");
//   } else {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//       sum += i;
//     }
//     console.log(`sum of ${num} natural number: ${sum}`);
//   }
// }

// document.getElementById("calculate").addEventListener("click", function () {
//   let pro = prompt("Enter a number: ");

//   if (pro === null) {
//     console.log("prompt cancelled!");
//   } else {
//     let num = Number(pro);
//     if (isNaN(num)) {
//       console.log("invalid input");
//     } else if (num <= 0) {
//       console.log("Please enter a positive natural number");
//     } else {
//       let fact = 1;
//       for (let i = 1; i <= num; i++) {
//         fact *= i;
//       }
//       console.log(`Factorial of ${num}: ${fact}`);
//     }
//   }
// });

function uniqueCharacters(str) {
  let charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let result = "";
  for (let char of str) {
    if (charCount[char] === 1) {
      result += char;
    }
  }

  return result;
}

let input = "POV(2011): India lifts the world cup after 28 years";

document.getElementById("calculate").addEventListener("click", function () {
  console.log(uniqueCharacters(input));
});
