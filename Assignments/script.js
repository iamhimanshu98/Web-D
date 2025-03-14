function get() {
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

function sequence() {
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

document.getElementById("run").addEventListener("click", function () {
  console.log("Second Largest in three numbers:");
  get();

  console.log("Missing number in consecutive Sequence:");
  sequence();
});
