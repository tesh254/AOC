const fs = require("fs");

function checkNumbersPartOne() {
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
      let secondAddend = firstAddend + 1;
      secondAddend < arrayOfNumbers.length;
      secondAddend++
    ) {
      if (arrayOfNumbers[firstAddend] + arrayOfNumbers[secondAddend] === 2020) {
        result = arrayOfNumbers[firstAddend] * arrayOfNumbers[secondAddend];

        break;
      }
    }
  }

  return result;
}

function checkNumbersPartTwo() {
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
      let secondAddend = firstAddend + 1;
      secondAddend < arrayOfNumbers.length;
      secondAddend++
    ) {
      for (
        let thirdAddend = secondAddend + 1;
        thirdAddend < arrayOfNumbers.length;
        thirdAddend++
      ) {
        if (
          arrayOfNumbers[firstAddend] +
            arrayOfNumbers[secondAddend] +
            arrayOfNumbers[thirdAddend] ===
          2020
        ) {
          result =
            arrayOfNumbers[firstAddend] *
            arrayOfNumbers[secondAddend] *
            arrayOfNumbers[thirdAddend];

          break;
        }
      }
    }
  }

  return result;
}

console.log(checkNumbersPartOne());
console.log(checkNumbersPartTwo());
