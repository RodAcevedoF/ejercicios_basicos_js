const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function nameFinder(nameList, val) {
  let test = nameList.includes(val);
  if (test) {
    return {includes: test, position: nameList.indexOf(val)};
  } else {
    return {includes: test}
  }
}

console.log(nameFinder(names, "Logan"));
