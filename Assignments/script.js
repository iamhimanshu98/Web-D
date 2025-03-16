let circle = document.querySelector(".circle");
let flag = true;
circle.addEventListener("click", function () {
  if (flag) {
    circle.style.backgroundColor = "yellow";
    circle.style.color = "#222";
    flag = false;
  } else {
    circle.style.backgroundColor = "transparent";
    circle.style.color = "white";
    flag = true;
  }
});

function Q1() {
  let age = Number(prompt("enter age"));

  if (age < 18) {
    console.log("you are a minor");
  } else if (age < 60) {
    console.log("you are adult");
  } else {
    console.log("you are senior citizen");
  }
}

document.getElementById("Q1").addEventListener("click", function () {
  console.log("Age Category message:");
  Q1();
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
  let username = prompt("enter username");
  let password = prompt("enter password");

  if (username === "him") {
    if (password === "123") {
      console.log("Login successful");
    } else {
      console.log("Incorrect password");
    }
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
  }

  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
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
    console.log("Numbers are equal");
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

  if (num === NaN) {
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
