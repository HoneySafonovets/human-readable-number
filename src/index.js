module.exports = function toReadable (number) {
  let firstArray = ["one ", "two ", "three ", "four ", "five ", "six ",
  "seven ", "eight ", "nine ", "ten ", "eleven ", "twelve ", "thirteen ", "fourteen ",
  "fifteen ", "sixteen ", "seventeen ", "eighteen ",
  "nineteen ", "twenty ", "thirty ", "fourty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety "];
let fiveArray = ["one ", "twenty ", "thirty ", "fourty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety "]
if (number < 10) {
  return firstArray[number - 1]
}
if (number > 10 && number < 20) {
  return firstArray[number - 1]
}
if(number > 20 && number < 30) {
  let secondArray = ("" + number).split("").map(Number);
  return firstArray[19] + firstArray[secondArray[1] - 1]
}
if(number > 30 && number < 40) {
  let secondArray = ("" + number).split("").map(Number);
  return firstArray[20] + firstArray[secondArray[1] - 1]
}
if(number > 40 && number < 50) {
  let secondArray = ("" + number).split("").map(Number);
  return firstArray[21] + firstArray[secondArray[1] - 1]
}
if(number > 50 && number < 60) {
  let secondArray = ("" + number).split("").map(Number);
  return firstArray[22] + firstArray[secondArray[1] - 1]
}
if(number > 60 && number < 70) {
  let secondArray = ("" + number).split("").map(Number);
  return firstArray[23] + firstArray[secondArray[1] - 1]
}
if(number > 70 && number < 80) {
  let secondArray = ("" + number).split("").map(Number);
  return firstArray[24] + firstArray[secondArray[1] - 1]
}
if(number > 80 && number < 90) {
  let secondArray = ("" + number).split("").map(Number);
  return firstArray[25] + firstArray[secondArray[1] - 1]
}
if(number > 90 && number < 100) {
  let secondArray = ("" + number).split("").map(Number);
  return firstArray[26] + firstArray[secondArray[1] - 1]
}

if (number === 100 || number === 200 || number === 300 || number === 400 ||
  number === 500 || number === 600 || number === 700 || number === 800 || number === 900
) {
  let thirtyArray = ("" + number).split("").map(Number);
  return firstArray[thirtyArray[0] - 1] + 'hundred '
} else if (number > 100) {
    let thirtyArray = ("" + number).split("").map(Number);
    return firstArray[thirtyArray[0] - 1] + 'hundred ' + fiveArray[thirtyArray[1] - 1] + firstArray[thirtyArray[2] - 1]
  }
}
console.log(toReadable(567));