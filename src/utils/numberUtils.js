export function randomNumber(firstNumber, lastNumber) {
  return parseFloat((Math.random() * (lastNumber - firstNumber) + firstNumber).toFixed(2))
}