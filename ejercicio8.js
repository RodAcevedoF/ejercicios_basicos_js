const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(stringList) {
  return stringList.reduce((prev, curr) =>
    prev.length >= curr.length ? prev : curr
  );
}
console.log(findLongestWord(avengers));
