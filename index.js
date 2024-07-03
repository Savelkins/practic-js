const numbers = [5, 10, 15, 20, 25, 30, 35];

//1)
const takeAwayEnd = numbers.pop();
numbers.unshift(takeAwayEnd);
console.log(numbers);

//2)
const takeAwayStart = numbers.shift();
numbers.push(takeAwayStart);
console.log(numbers);

//3)
const removeThreeElementsAfter = numbers.splice(2, 3, 55);
console.log(numbers);

//4)
const num = 10;
if (
  numbers.indexOf(num) === numbers.lastIndexOf(num) &&
  numbers.includes(num)
) {
  console.log("yes - one time");
} else {
  console.log("no");
}

//5)
numbers.forEach((element) => console.log(element));

//6)
numbers.forEach((element) => console.log(element * 3));

//7)
const newNumbers = numbers.map((element) => element * 10);
console.log(newNumbers);

//8)
const newNumbers2 = numbers.map((element) => element + 5);
console.log(newNumbers2);

//9)
const newNumbers3 = numbers.filter((element) => element >= 20);
console.log(newNumbers3);

//10)
const newNumbers4 = numbers.filter((element) => element % 6 === 0);
console.log(newNumbers4);

//11)

while (true) {
  const userNumber = prompt();
  if (numbers.includes(Number(userNumber))) {
    console.log("Таке число є");
    break;
  }
}
