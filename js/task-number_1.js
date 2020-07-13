"use strict";

const logItems = function (array) {
  let numbering = 1;
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i += 1) {
    console.log(
      `Номер элемента [${numbering}] - Значение элемента [${array[i]}]`
    );
    numbering += 1;
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
