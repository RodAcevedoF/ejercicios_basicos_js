const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(list) {
  let noDup = new Set();
  list.forEach((element) => {
    noDup.add(element);
  });
  return noDup;
}

console.log(removeDuplicates(duplicates));
