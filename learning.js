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




// Сейчас я готовлюсь к экзамену по фронтенду. 
// Что мне нужно сделать повторить всю теорию и прогнаться по ней много раз чтобы вызубрить,
// аналогичная ситуация с практикой (крайне важно нарешать кучу задач практических)

// Теорию я немного уже изучил, попрактковал JS HTML CSS. VUE пока что не изучал и не практиковал


// +у меня уже есть целый сайт который я сам написал для подготовки к этому экзамену.

// +мне крайне желательно сделать хотя бы как-то сайт, который должен был сделать в течение семестра


// сейчас 27 число 1:49 ночи

// Экзамен будет 29ого числа в 8:30 
// Консультация 28ого числа в 14:10

// + я сбил свой режим и просыпаюсь гдето в 12-13 часов с большим трудом

// Мне крайне важно сдать этот экзамен, как минимум на 4.

// Скажи честно мне пиздец


// Вот если что список вопросов и прочего (если что я вообще ничего не сдавал преподу в теении семестра):
// Если идете на экзамен, формат экзамена зависит от ранее выполненных работ:

// Контрольный срез не сдан - на экзамене добавляются дополнительные теоретические вопросы по HTML и CSS.

// Проект не сдан - на экзамене предусмотрено практическое задание по методологии БЭМ.

// Большинство заданий по Vue.js не выполнено - на экзамене предусмотрено практическое задание по Vue.js.

// Вопросы:

// (доп вопросы)

// HTML и CSS
// 1. Что такое doctype? Рассказать про head, meta, title, body.
// 2. Для чего нужны атрибуты name и value в элементах формы (в input, select и т.д).
// 3. Что такое HTML-формы? Опишите основные элементы формы (form, label, fieldset, legend) и их роль. Как работает отправка формы (method: GET/POST, action). Как сделать так, чтоб можно было отправлять файлы на сервер.
// 4. Что такое семантическая верстка, зачем нужна. Рассказать про article, section, footer, header, aside, nav, figure. Зачем нужны ul и ol, что верстают используя ul и ol.
// 5. В контексте CSS. Что такое БЭМ, зачем нужен. Привести примеры. Что такое внешняя геометрия и почему БЕМ ее запрещает. Плюсы и минусы БЕМ.
// 6. Каскад, Специфичность (таблица), Наследование. 3 фактора.
// 7. Блочная модель, строчные элементы. Стандартная блочная модель CSS. Альтернативная блочная модель CSS.
// 8. Рассказать про свойство border, margin, padding, схлопывание, max(min)-width-height.
// 9. Привести примеры: Селекторы, псевдоклассы, псевдоэлементы.
// 10. Перечислить единицы измерения. Различия em и rem.
// 11. Рассказать про Flexbox. flex-container, flex Items, shrink, grow.
// 12. Рассказать про CSS Grid.
// 13. Позиционирование. (absolute, relative, sticky, fixed). Нормальный поток в документе
// 14. Рассказать про z-index, контекст наложения и свойство overflow.
// 15. CSS для типографии. (font-size, line-height и т.д) Как подключать шрифты на сайт.
// 16. CSS custom properties - CSS calc (функции сalc и var). Функции сlamp() для fluid typography, min(), max(). Как они помогают в адаптивном дизайне без медиа-запросов.
// 17. Что такое Адаптивная верстка, резиновая верстка. Breakpoints. В чем различия desktop first и mobile first. Что такое контейнерные запросы, зачем они нужны - какие проблемы решают.
// 18. Изображения. Рассказать про основные атрибуты, зачем указывать width - height, alt. Адаптивные изображения (srcset и sizes).
// 19. Ссылки в HTML: атрибуты href, target, rel (nofollow, noopener). Что такое якорные ссылки (#id) и как они работают. Безопасность ссылок (XSS).
// 20. Как встраивать SVG в HTML. Преимущества SVG над растровыми изображениями. Анимация SVG с CSS.

// (вопросы для всех)

// JS

// 1. Function Declaration - Function Expression. Стрелочные функции.
// 2. Функция высшего порядка. Чистая функция. Побочный эффект. Колбэки. Замыкание.
// 3. Способы создания объектов.
// 4. Способы клонирования объектов.
// 5. Что такое this. Правила определения this. Рассказать про bind, call, apply.
// 6. Что такое DOM? DOM-коллекции. Навигация и поиск. Что такое BOM. Location, Cookie, Web Storage.
// 7. События - всплытие и погружение. Как к элементу прикрепить обработчик события click. Что такое event.target и event.currentTarget, отличия. Делегирование событий.
// 8. Что такое event loop? Макро и микро таски.

// VUE

// 1. Чем отличается computed от обычной функции? Когда и зачем использовать watch, если есть computed? Что такое ref и reactive.
// 2. Что делает директива v-model и как она работает? Как v-model работает на кастомных компонентах. Как передать данные от родительского компонента к дочернему и обратно?
// 3. Что такое props drilling и почему он считается архитектурной проблемой? Какими способами можно решить эту проблему.
// 4. Чем принципиально отличается механизм provide / inject от использования глобального состояния через Pinia?
// 5. В чём принципиальная разница между состоянием приложения (App State - Pinia) и кэшем данных (Cache - TanStack Query)?
// 6. Какие основные хуки жизненного цикла существуют в Vue?
// 7. Что понимается под контролируемыми и неконтролируемыми компонентами? Объяснить разницу между умными и глупыми компонентами.
// 8. Почему не рекомендуется использовать объект в качестве key в v-for?
// 9. Как Vue отслеживает зависимости и определяет, какие компоненты необходимо обновить при изменении данных? (объяснить роль Proxy, описать механизм effect, раскрыть принципы track и trigger)
// 10. Почему после изменения реактивных данных во Vue нельзя сразу работать с обновлённым DOM, и как nextTick() решает эту проблему?
// 11. Сравните подход Virtual DOM и No Virtual DOM. Какую проблему изначально решал Virtual DOM. Почему отказываются от Virtual DOM
// 12. Что такое slots и какие типы slots существуют?
// 13. Что такое SSG, SSR, CSR? Что такое гидрация?

// ПРАКТИКА

// практический пример vue js:


// import { ref } from 'vue'
// const count = ref(0)
// function increment() {
//  count++
// }

// Почему этот код не работает и как его исправить?

// Практика будет в таком же духе. Поэтому потренируйтесь с llm на базовых примерах.

// практический пример БЭМ:

// Описать по БЭМ. Примеры на практике могут быть сложнее, включая CSS и внешнюю геометрию.


// <article>
// <h3>Заголовок поста</h3>
// <p>Текст краткого содержания поста. Здесь может быть несколько предложений, описывающих основную тему...</p>
// </article>