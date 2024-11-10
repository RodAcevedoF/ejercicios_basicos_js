const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];
function repeatCounter(list) {
  let mapped = new Map();
  for (let element of list) {
    if (mapped.has(element)) {
      mapped.set(element, mapped.get(element) + 1);
    } else {
      mapped.set(element, 1);
    }
  }
  return mapped;
}

console.log(repeatCounter(words));

let newMap = new Map();
