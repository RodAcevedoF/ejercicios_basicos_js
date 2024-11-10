const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let i = 0;

for (let food of foodSchedule) {
    if (!food.isVegan) {
        foodSchedule.splice(foodSchedule.indexOf(food), 1, {name: fruits[i++], isVegan: true})
    }
}

console.log(foodSchedule)