var os = require("os");
var pad = require('pad-number');

let counter = 100;
let maxSum = 100;
let firstNumbers = Array(counter);
let secondNumbers = Array(counter);

let signs = ["+", "-"];

let currentSign = 0;
for (let i = 0; i< counter; i++){
    firstNumbers[i] = randomInt(1, 99);
    secondNumbers[i] = randomInt(1, 100 - firstNumbers[i]);
    currentSign = randomInt(0, 1);
    if (firstNumbers[i] < secondNumbers[i])
    {
      currentSign = 0;
    }
    firstNumbers[i] = pad(firstNumbers[i], 2, " ");
    secondNumbers[i] = pad(secondNumbers[i], 2, " ");

    // I'm too lazy to add args to print exersices horizontally
    // console.log(`${pad(i+1 ,3, " ")}.  ${firstNumbers[i]} ${signs[currentSign]}
    // ${secondNumbers[i]} = ______`);

    printExercise(i, firstNumbers[i], signs[currentSign], secondNumbers[i]);

    // we could try to add columns -> on next version
}

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
function printExercise(index, firstNumber, sign, secondNumber){
  process.stdout.write(`${pad(index+1 ,3, " ")}. ${firstNumber} ${sign}${os.EOL}`);
  process.stdout.write(`     ${secondNumber}${os.EOL}`);
  process.stdout.write(`    ---${os.EOL}`);
  process.stdout.write(`          ${os.EOL}`);
  process.stdout.write(`          ${os.EOL}`);
}
