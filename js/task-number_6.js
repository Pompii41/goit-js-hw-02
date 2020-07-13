"use strict";

let input;
const numbers = [];
let total = 0;
do {
  let input = prompt("Вводите числа пока не надоест");

  if (input === null) {
    console.log("Отменено пользователем!");
    break;
  }

  input = Number(input);
  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  numbers.push(input);
} while (input !== null);
if (numbers.length > 0) {
  console.log(`numbers=[${numbers}]`);
  for (let number of numbers) {
    total = total + number;
  }
  console.log(`Общая сумма чисел равна ${total}`);
}
