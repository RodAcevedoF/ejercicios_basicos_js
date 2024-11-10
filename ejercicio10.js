const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  let sum = numberList.reduce((prev, curr) => (prev += curr));
  return Number((sum / numberList.length).toFixed(2));
}
console.log(typeof average(numbers));
console.log(average(numbers));
