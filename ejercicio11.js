const mixedElements = [6, 1, "Marvel", 1, "hamburguesa", "10", "Prometeo", 8, "Hola mundo"];
function averageWord(list) {
  let counter = 0;
  for (let elem of list) {
    if (typeof elem == "string") { //aqui no he usado isNaN() porque 10 sumaria como number
      counter += elem.length;
    } else if (!isNaN(elem)) {
      counter += elem;
    }
  }
  return counter;
}

console.log(averageWord(mixedElements));
