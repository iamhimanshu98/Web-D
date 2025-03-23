let circle = document.querySelector(".circle");

circle.addEventListener("click", function () {
  circle.classList.toggle("yellow-bg");
});

function Q1() {
  let age = Number(prompt("Enter your age"));

  if (isNaN(age) || age < 0) {
    console.log("Invalid age entered.");
    return;
  }

  if (age < 18) {
    console.log("You are a minor");
  } else if (age < 60) {
    console.log("You are an adult");
  } else {
    console.log("You are a senior citizen");
  }
}

document.getElementById("Q1").addEventListener("click", function () {
  console.log("Age Category message:");
  Q1();
});

function Q2() {
  let num1 = Number(prompt("Enter first number"));
  let num2 = Number(prompt("Enter second number"));

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid input.");
    return;
  }

  if ((num1 + num2) % 2 == 0) {
    console.log("Even Sum");
  } else {
    console.log("Odd Sum");
  }
}

document.getElementById("Q2").addEventListener("click", function () {
  console.log("Even Odd Sum:");
  Q2();
});

function Q3() {
  let char = prompt("enter a character");

  if (char >= "A" && char <= "Z") {
    console.log("Uppercase", char);
  } else if (char >= "a" && char <= "z") {
    console.log("Lowercase", char);
  } else {
    console.log("Not a letter");
  }
}

document.getElementById("Q3").addEventListener("click", function () {
  console.log("Case checker:");
  Q3();
});

function Q4() {
  let num1 = Number(prompt("Enter 1st number"));
  let num2 = Number(prompt("Enter 2nd number"));
  let num3 = Number(prompt("Enter 3rd number"));

  if (num1 === num2 && num2 === num3) {
    console.log("All numbers are equal.");
  } else if (num1 >= num2 && num1 >= num3) {
    console.log(num1, "is the largest");
  } else if (num2 >= num1 && num2 >= num3) {
    console.log(num2, "is the largest");
  } else {
    console.log(num3, "is the largest");
  }
}

document.getElementById("Q4").addEventListener("click", function () {
  console.log("Largest of three numbers: ");
  Q4();
});

function Q5() {
  let year = Number(prompt("Enter a year"));

  if (!Number.isInteger(year) || year < 1000 || year > 9999) {
    console.log("Invalid Year");
    return;
  }

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap Year");
  } else {
    console.log("Not a Leap Year");
  }
}

document.getElementById("Q5").addEventListener("click", function () {
  console.log("Leap Year Checker: ");
  Q5();
});

function Q6() {
  let num1 = Number(prompt("enter 1st number"));
  let num2 = Number(prompt("enter 2nd number"));
  let op = prompt("enter an operator (+, -, *, /)");

  switch (op) {
    case "+":
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
      break;
    case "-":
      console.log(`${num1} - ${num2} = ${num1 - num2}`);
      break;
    case "*":
      console.log(`${num1} * ${num2} = ${num1 * num2}`);
      break;
    case "/":
      if (num2 === 0) {
        console.log("Cannot divide by zero!");
      } else {
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
      }
      break;

    default:
      console.log("Invalid Character!");
      break;
  }
}

document.getElementById("Q6").addEventListener("click", function () {
  console.log("Simple Calculator:");
  Q6();
});

function Q7() {
  let num = Number(prompt("enter number"));
  if (num > 0) {
    console.log("positive");
  } else if (num === 0) {
    console.log("zero");
  } else {
    console.log("negative");
  }
}

document.getElementById("Q7").addEventListener("click", function () {
  console.log("Positive, Negative or Zero: ");
  Q7();
});

function Q8() {
  let name = prompt("Enter your name");
  let time = Number(prompt("Enter time (24-hour format)"));

  if (isNaN(time) || !Number.isInteger(time) || time < 0 || time >= 24) {
    console.log("Invalid Time");
    return;
  }

  if (time >= 5 && time < 12) {
    console.log(`Good Morning, ${name}`);
  } else if (time >= 12 && time < 17) {
    console.log(`Good Afternoon, ${name}`);
  } else if (time >= 17 && time < 21) {
    console.log(`Good Evening, ${name}`);
  } else {
    console.log(`Good Night, ${name}`);
  }
}

document.getElementById("Q8").addEventListener("click", function () {
  console.log("User Greeting");
  Q8();
});

function Q9() {
  let color = prompt("Enter traffic light color").toLowerCase();

  if (color === "red") {
    console.log("Stop!");
  } else if (color === "yellow") {
    console.log("Get Ready!");
  } else if (color === "green") {
    console.log("Go!");
  } else {
    console.log("Invalid color!");
  }
}

document.getElementById("Q9").addEventListener("click", function () {
  console.log("Traffic light system: ");
  Q9();
});

function Q10() {
  let num = Number(prompt("enter a number"));

  if (isNaN(num)) {
    console.log("invalid number!");
    return;
  }

  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}

document.getElementById("Q10").addEventListener("click", function () {
  console.log("Multiplication Table:");
  Q10();
});

function Q11() {
  let marks = Number(prompt("Enter marks"));

  if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log("Invalid marks!");
    return;
  }

  if (marks >= 90) {
    console.log("Grade A");
  } else if (marks >= 80) {
    console.log("Grade B");
  } else if (marks >= 70) {
    console.log("Grade C");
  } else if (marks >= 60) {
    console.log("Grade D");
  } else {
    console.log("Grade F");
  }
}

document.getElementById("Q11").addEventListener("click", function () {
  console.log("Grading System:");
  Q11();
});

function Q12() {
  const users = { him: "123", admin: "admin123" };

  let username = prompt("Enter username");
  let password = prompt("Enter password");

  if (users[username] && users[username] === password) {
    console.log("Login successful");
  } else {
    console.log("Invalid credentials");
  }
}

document.getElementById("Q12").addEventListener("click", function () {
  console.log("Login System:");
  Q12();
});

function Q13() {
  let num1 = Number(prompt("enter 1st number"));
  let num2 = Number(prompt("enter 2nd number"));

  console.log(num1, num2);

  // num1 = num1 + num2; // 1st approach
  // num2 = num1 - num2;
  // num1 = num1 - num2;

  // [num1, num2] = [num2, num1]; // 2nd approach

  num1 = num1 ^ num2; // 3rd approach
  num2 = num1 ^ num2;
  num1 = num1 ^ num2;

  console.log(num1, num2);
}

document.getElementById("Q13").addEventListener("click", function () {
  Q13();
});

function Q14() {
  let num = Number(prompt("enter a number"));

  if (isNaN(num)) {
    console.log("invalid input");
    return;
  } else {
    console.log(
      num % 3 === 0 && num % 5 === 0
        ? "FizzBuzz"
        : num % 3 === 0
        ? "Fizz"
        : num % 5 === 0
        ? "Buzz"
        : num
    );
  }
}

document.getElementById("Q14").addEventListener("click", function () {
  console.log("FizzBuzz Problem:");
  Q14();
});

function Q15() {
  let str = prompt("enter a number");
  let rev, num;

  num = Number(str);
  if (isNaN(num)) {
    console.log("invalid input");
    return;
  }

  rev = Number(str.split("").reverse().join(""));

  console.log("original number: ", num);
  console.log("reversed number: ", rev);
}

document.getElementById("Q15").addEventListener("click", function () {
  console.log("Number Reversal:");
  Q15();
});

function Q16() {
  let num = Number(prompt("enter a number:"));
  let sum = 0;
  console.log("original number: ", num);

  while (num > 0) {
    dig = num % 10;
    sum += dig;
    num = Math.floor(num / 10);
  }
  console.log("sum of digits: ", sum);
}

document.getElementById("Q16").addEventListener("click", function () {
  console.log("Sum of digits of a number:");
  Q16();
});

function Q17() {
  let word = prompt("enter a word:");
  let rev = "";

  // for (let i = word.length - 1; i >= 0; i--) {
  //   // 1st approach
  //   rev += word[i];
  // }

  rev = word.split("").reverse().join(""); // 2nd approach

  console.log("original word: ", word);
  console.log("reversed word: ", rev);
  if (word === rev) {
    console.log("Palindrome");
  } else {
    console.log("Not palindrome");
  }
}

document.getElementById("Q17").addEventListener("click", function () {
  console.log("Palindrome Checker:");
  Q17();
});

function Q18() {
  let num = Number(prompt("enter a number"));
  let rev = 0;
  while (num > 0) {
    dig = num % 10;
    rev = rev * 10 + dig;
    num = Math.floor(num / 10);
  }
  console.log(rev);
}

document.getElementById("Q18").addEventListener("click", function () {
  console.log("Reverse Number: ");
  Q18();
});

function Q19() {
  let num1 = Number(prompt("Enter 1st number: "));
  let num2 = Number(prompt("Enter 2nd number: "));
  let num3 = Number(prompt("Enter 3rd number: "));

  if (num1 === num2 && num2 === num3) {
    console.log("All numbers are equal");
    return;
  }

  let largest, secondLargest;

  if (num1 > num2 && num1 > num3) {
    largest = num1;
    secondLargest = num2 > num3 ? num2 : num3;
  } else if (num1 < num2 && num2 > num3) {
    largest = num2;
    secondLargest = num1 > num3 ? num1 : num3;
  } else {
    largest = num3;
    secondLargest = num2 > num1 ? num2 : num1;
  }
  console.log(secondLargest);
}

document.getElementById("Q19").addEventListener("click", function () {
  console.log("Second Largest in three numbers:");
  Q19();
});

function Q20() {
  let str = prompt("enter a string");

  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    let flag = false;
    for (let j = 0; j < str.length; j++) {
      if (current === str[j] && i !== j) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      console.log(current);
      return;
    }
  }
}

document.getElementById("Q20").addEventListener("click", function () {
  console.log("First non-repeating character in string:");
  Q20();
});

function Q21() {
  let num = Number(prompt("enter number"));
  let orgNum = num;
  let count = 0;
  let dig;

  while (num > 0) {
    dig = num % 10;
    if (dig % 2 == 0) {
      count++;
    }
    num = Math.floor(num / 10);
  }
  console.log("total even values in", orgNum, ": ", count);
}

document.getElementById("Q21").addEventListener("click", function () {
  console.log("Even digit Counter: ");
  Q21();
});

function Q22() {
  let age = Number(prompt("enter your age"));
  let salary = Number(prompt("enter your salary"));

  if (age < 18) {
    console.log("Not eligible");
  } else {
    console.log("eligible");
    if (salary < 20000) {
      console.log("low salary");
    } else if (salary >= 50000) {
      console.log("High salary");
    } else {
      console.log("average salary");
    }
  }
}

document.getElementById("Q22").addEventListener("click", function () {
  console.log("User eligibility: ");
  Q22();
});

function Q23() {
  let str = prompt("enter string:");
  let result = "";

  for (let i of str) {
    if (i >= "A" && i <= "Z") {
      result += i.toLowerCase();
    } else if (i >= "a" && i <= "z") {
      result += i.toUpperCase();
    } else {
      result += i;
    }
  }
  console.log("Original String: ", str);
  console.log("Toggled String: ", result);
}

document.getElementById("Q23").addEventListener("click", function () {
  console.log("Toggle case string:");
  Q23();
});

function Q24() {
  let list = [1, 2, 3, 5, 6, 7, 9, 10];
  let count = 1;
  for (i = 0; i < list.length; i++) {
    if (list[i] !== count) {
      console.log(count);
      count++;
      i--;
      continue;
    }
    count++;
  }
}

document.getElementById("Q24").addEventListener("click", function () {
  console.log("Missing number in consecutive Sequence:");
  Q24();
});

function Q25() {
  let num = Number(prompt("enter a single digit number"));

  if (isNaN(num)) {
    console.log("enter valid number!");
    return;
  }

  switch (num) {
    case 1:
      console.log("One");
      break;
    case 2:
      console.log("Two");
      break;
    case 3:
      console.log("Three");
      break;
    case 4:
      console.log("Four");
      break;
    case 5:
      console.log("Five");
      break;
    case 6:
      console.log("Six");
      break;
    case 7:
      console.log("Seven");
      break;
    case 8:
      console.log("Eight");
      break;
    case 9:
      console.log("Nine");
      break;
    default:
      console.log("Invalid Input");
      break;
  }
}

document.getElementById("Q25").addEventListener("click", function () {
  console.log("Number to Word:");
  Q25();
});
