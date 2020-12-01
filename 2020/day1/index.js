const fs = require("fs");

function checkNumbers() {
  const arrayOfNumbers = fs
    .readFileSync("input.txt", { encoding: "utf8" })
    .split("\n")
    .map((x) => parseInt(x, 10));

  let result = 0;

  for (
    let firstAddend = 0;
    firstAddend < arrayOfNumbers.length;
    firstAddend++
  ) {
    for (
      let secondAdded = firstAddend + 1;
      secondAdded < arrayOfNumbers.length;
      secondAdded++
    ) {
      if (arrayOfNumbers[firstAddend] + arrayOfNumbers[secondAdded] === 2020) {
        result = arrayOfNumbers[firstAddend] * arrayOfNumbers[secondAdded];

        break;
      }
    }
  }

  return result;
}

console.log(checkNumbers());
