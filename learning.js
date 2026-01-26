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

// const btn = document.getElementById("changeTest");

// btn.addEventListener("click", () => {
// peshka.textContent = "Изменено кнопкой!";
// });

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


// Я готовлюсь к экзамену по фронтенду. JS HTML CSS я уже примерно знаю. Сейчас нужно изучить VUE. 

// Смотри: я буду скидывать тебе темы билетов из этой темы. Ты должен будешь скидывать мне конспект для подготовки к этой теме.
// Но при этом ты должен скидывать конспекты не в виде текста, а в виде HTML кода, чтобы я мог просто брать твой код и прям целиком вставлять его в свой сайт.CSS
// Особенности моего сайта: 

// каждый билет должен билет заключен в блок div и при этом обладать классом "exam--card"

// каждую подтему необходимо помечать классом "subtopic", а также она также должна быть заключена в блок div

// заголовок самого билета в формате h3

// если вдруг нужно вставлять блоки кода, то вот пример: 

// <p class="code--block" data-lang="HTML">
//   &lt;ul id=&quot;list&quot;&gt; <br />
//   &nbsp;&nbsp;&lt;li data-id=&quot;1&quot;&gt;Элемент 1&lt;/li&gt;
//   <br />
//   &nbsp;&nbsp;&lt;li data-id=&quot;2&quot;&gt;Элемент 2&lt;/li&gt;
//   <br />
//   &nbsp;&nbsp;&lt;li data-id=&quot;3&quot;&gt;Элемент 3&lt;/li&gt;
//   <br />
//   &lt;/ul&gt;
// </p>

// (data-lang бывает равным как "HTML", так и "JS" "CSS")

// Кратко по содержанию: каждый билет состоит из заголовка, подтем и еще одной подтемы "Кратко" (в которой все повторяется, но в краткой форме)




Сейчас я готовлюсь к экзамену по фронтенду. 
Что мне нужно сделать повторить всю теорию и прогнаться по ней много раз чтобы вызубрить,
аналогичная ситуация с практикой (крайне важно нарешать кучу задач практических)

Теорию я немного уже изучил, попрактковал JS HTML CSS. VUE пока что не трогал


+у меня уже есть целый сайт который я сам написал для подготовки к этому экзамену.