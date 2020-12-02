const fs = require("fs");

function checkOccurence(character, string) {
  let indices = [];

  for (let index = 0; index < string.length; index++) {
    if (string[index] === character) indices.push(index);
  }

  return indices;
}

function cleanPayload() {
  const payload = fs
    .readFileSync("input.txt", { encoding: "utf-8" })
    .split("\n");

  let parsedData = [];

  for (let index = 0; index < payload.length; index++) {
    const splitArray = payload[index].split(" ");

    const charOccurence = {
      min: parseInt(splitArray[0].split("-")[0], 10),
      max: parseInt(splitArray[0].split("-")[1], 10),
    };

    const character = splitArray[1].split(":")[0];

    const password = splitArray[2];

    const cleanData = {
      character,
      password,
      charOccurence,
    };

    parsedData.push(cleanData);
  }

  return parsedData;
}

function runPartOne() {
  let validPasswords = [];

  const parsePayload = cleanPayload();

  for (let index = 0; index < parsePayload.length; index++) {
    const occurence = checkOccurence(
      parsePayload[index].character,
      parsePayload[index].password
    ).length;
    const min = parsePayload[index].charOccurence.min;
    const max = parsePayload[index].charOccurence.max;
    if (occurence >= min && occurence <= max) {
      validPasswords.push(parsePayload[index]);
    }
  }

  return validPasswords.length;
}

function runPartTwo() {
  let validPasswords = [];

  const parsePayload = cleanPayload();

  for (let index = 0; index < parsePayload.length; index++) {
    const min = parsePayload[index].charOccurence.min;
    const max = parsePayload[index].charOccurence.max;
    if (
      (parsePayload[index].password[min - 1] == parsePayload[index].character) ^
      (parsePayload[index].password[max - 1] == parsePayload[index].character)
    ) {
      validPasswords.push(parsePayload[index]);
    }
  }

  return validPasswords.length;
}
console.log(runPartTwo());
