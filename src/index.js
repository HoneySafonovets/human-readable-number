module.exports = function toReadable (number) {
  let firstArray = ["one", "two", "three", "four", "five", "six",
    "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen",
    "fifteen", "sixteen", "seventeen", "eighteen",
    "nineteen", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  let fiveArray = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
  let sixArray = ["tex", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
  if (number === 0) {
    return "zero"
  }
  if (number === 10) {
    return fiveArray[0]
  }
  if (number === 20) {
    return fiveArray[1]
  }
  if (number === 30) {
    return fiveArray[2]
  }
  if (number === 40) {
    return fiveArray[3]
  }
  if (number === 50) {
    return fiveArray[4]
  }
  if (number === 60) {
    return fiveArray[5]
  }
  if (number === 70) {
    return fiveArray[6]
  }
  if (number === 80) {
    return fiveArray[7]
  }
  if (number === 90) {
    return fiveArray[8]
  }
  if (number < 10) {
    return firstArray[number - 1]
  }
  if (number > 10 && number < 20) {
    return firstArray[number - 1]
  }
  if(number > 20 && number < 30) {
    let secondArray = ("" + number).split("").map(Number);
    return firstArray[19] + (' ') + firstArray[secondArray[1] - 1]
  }
  if(number > 30 && number < 40) {
    let secondArray = ("" + number).split("").map(Number);
    return firstArray[20] + (' ') + firstArray[secondArray[1] - 1]
  }
  if(number > 40 && number < 50) {
    let secondArray = ("" + number).split("").map(Number);
    return firstArray[21] + (' ') + firstArray[secondArray[1] - 1]
  }
  if(number > 50 && number < 60) {
    let secondArray = ("" + number).split("").map(Number);
    return firstArray[22] + (' ') + firstArray[secondArray[1] - 1]
  }
  if(number > 60 && number < 70) {
    let secondArray = ("" + number).split("").map(Number);
    return firstArray[23] + (' ') + firstArray[secondArray[1] - 1]
  }
  if(number > 70 && number < 80) {
    let secondArray = ("" + number).split("").map(Number);
    return firstArray[24] + (' ') + firstArray[secondArray[1] - 1]
  }
  if(number > 80 && number < 90) {
    let secondArray = ("" + number).split("").map(Number);
    return firstArray[25] + (' ') + firstArray[secondArray[1] - 1]
  }
  if(number > 90 && number < 100) {
    let secondArray = ("" + number).split("").map(Number);
    return firstArray[26] + (' ') + firstArray[secondArray[1] - 1]
  }
  if (number === 100 || number === 200 || number === 300 || number === 400 ||
    number === 500 || number === 600 || number === 700 || number === 800 || number === 900
  ) {
    let thirtyArray = ("" + number).split("").map(Number);
    return firstArray[thirtyArray[0] - 1] + ' hundred'
  } else if (number % 100 > 10 && number % 100 < 20) {
    let thirtyArray = ("" + number).split("").map(Number);
    let seven = number % 100
    let sevenArray = ("" + seven).split("").map(Number);
    Number(sevenArray.join(''))
    return firstArray[thirtyArray[0] - 1] + ' hundred ' + firstArray[Number(sevenArray.join('')) - 1]
  } else if (number > 100) {
      let thirtyArray = ("" + number).split("").map(Number);
      if (thirtyArray[1] === 1 && thirtyArray[2] === 0) {
        return firstArray[thirtyArray[0] - 1] + ' hundred ' + fiveArray[0]
      } else if (thirtyArray[1] === 0) {
        return firstArray[thirtyArray[0] - 1] + ' hundred ' + firstArray[thirtyArray[2] - 1]
      } else if (thirtyArray[2] === 0) {
        return firstArray[thirtyArray[0] - 1] + ' hundred ' + fiveArray[thirtyArray[1] - 1]
      } else {
        return firstArray[thirtyArray[0] - 1] + ' hundred ' + fiveArray[thirtyArray[1] - 1] + (' ') + firstArray[thirtyArray[2] - 1]
      } 
    }
}