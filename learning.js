// let name = "Костя";
// let age = 20;
// let result = `Меня зовут ${name}, мне ${age} лет`;
// console.log(result);

// let score = 85;
// if (score >= 90) {
//   console.log(`Отлично`);
// } else if (score >= 70) {
//   console.log("Хорошо");
// } else {
//   console.log(`Надо учить`);
// }

// let fruits = ["apple", "orange", "pear", "kiwi"];
// fruits.push("banana");
// console.log(fruits[2]);

// let fruits = ["apple", "orange", "pear", "kiwi"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// let student = {
//   name: "Костя",
//   age: 20,
//   grade: "В",
// };

// student.grade = "A";
// console.log(student.name);

// const greet = (name) => {
//   return `Привет, ${name}`;
// };
// console.log(greet("Алексей"));

// let numbers = [1, 2, 3, 4];
// let doublet = numbers.map((x) => x * 2);
// console.log(doublet);

// let nums = [10, 5, 20, 3, 15];
// let tu = nums.filter((x) => x % 2 === 0);
// console.log(tu);

// let nums = [10, 5, 20, 3, 15];
// let result = nums.reduce((acc, x) => acc + x, 0);
// console.log(result);

const peshka = document.getElementById("testLearningJS");
peshka.textContent = "Изменено без кнопки!";

const btn = document.getElementById("changeTest");

btn.addEventListener("click", () => {
  peshka.textContent = "Изменено кнопкой!";
});

const btnTest = document.getElementById("btnTest");
const btnTestText = document.getElementById("btnTestText");

btnTest.addEventListener("click", () => {
  btnTest.textContent = "Нажато";
  // btnTestText.textContent = "Нажато";
});

const inputTest = document.getElementById("input");
const outputTest = document.getElementById("output");

inputTest.addEventListener("input", () => {
  outputTest.textContent = inputTest.value;
});

const newDiv = document.createElement("div");
newDiv.textContent = "Я родился";
newDiv.classList.add("newDiv");
document.body.appendChild(newDiv);

const box = document.getElementById("box");
box.textContent = "Привет";

box.addEventListener("click", () => {
  box.textContent = "Да прожался я!";
  if (box.offsetWidth > 100) {
    box.style.backgroundColor = "green";
  } else {
    box.style.backgroundColor = "red";
  }
});

const taskInput = document.getElementById("task");
const btnAdd = document.getElementById("btnAdd");
const peshkaList = document.getElementById("list");

btnAdd.addEventListener("click", () => {
  // peshkaList.textContent += `${taskInput.value}\n`;
  const newLi = document.createElement("li");
  newLi.textContent = taskInput.value;
  peshkaList.appendChild(newLi);
  // peshkaList.createElement("li")
  taskInput.value = "";
});
