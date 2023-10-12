// console.log("1");

// setTimeout(() => (console.log("2"), 1));

// console.log("3");
// console.log("4");

// const hello = () => {
//   console.log("hello");
// };

// const timeout = setTimeout(hello, 1000);

// clearTimeout(timeout);

// const hello = () => {
//   console.log("hello");
// };

// const setInt = setInterval(hello, 1000);

// const startBtn = document.querySelector("#start");
// const stopBtn = document.querySelector("#stop");

// let time = null;

// startBtn.addEventListener("click", () => {
//   time = setInterval(() => {
//     console.log("123");
//   }, 1000);
// });

// stopBtn.addEventListener("click", () => {
//   clearInterval(time);
//   console.log("stop");
// });

// const a = {
//   classic() {
//     setTimeout(function () {
//       console.log(`${this}, classic in obj`);
//     });
//   },
//   arr() {
//     setTimeout(() => {
//       console.log(`${this}, arr in obj`);
//     });
//   },
// };

// a.classic();
// a.arr();

// const data = new Date(2023, 4, 1, 10, 0, 3, 7);
// console.log(data)

// const unixData = new Date(1696933816986);
// console.log(unixData)

// const newUnixDate = Date.now()
// console.log(newUnixDate)

// const date = new Date();

// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());

// const options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   hour: "2-digit",
//   minute: "2-digit",
// };

// const ukr = date.toLocaleString("Uk-uk", options);
// console.log(ukr)

// let prom = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("resolve"), 1000);
//   setTimeout(() => reject("reject"), 1000);
// });

// prom.then(
//   (resolve) => console.log(resolve),
//   (reject) => console.log(reject)
// );

// prom.catch(alert)

// prom.finally();

// function load(src) {
//   return new Promise(function (resolve, reject) {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Err ${script}`));

//     document.head.append(script);
//   });
// }

// let prom = load("https://momenxtjs.com/");

// prom.then((script) => console.log(`Download ${script}`));
// prom.catch((error) => console.log(`Error ${error.message}`));

// prom.finally(console.log("Finally"));

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(2), 1000);
// })
//   .then(function (result) {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result + 5), 1000);
//     });
//   })
//   .then(function (result) {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result + 5), 1000);
//     });
//   })
//   .then(function (result) {
//     console.log(result);
//   });

//   Домашнє завдання
// -----1----
// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду,
// починаючи від from і закінчуючи to.
// Зробіть два варіанти рішення.
// Використовуючи setInterval.
// Використовуючи вкладений setTimeout
// -----2----
// Вбудована функція setTimeout використовує колбек-функції. Створіть
// альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через
// ms мілісекунд, так щоб ми могли додати до нього .then:
// function delay(ms) {
// // ваш код
// }delay(3000).then(() => alert('виконалось через 3 секунди'));

// Завдання 1
// Рішення 1
// function printNumbers(from, to) {
//   let firstValue = from;

//   const intervall = setInterval(function () {
//     console.log(firstValue);
//     firstValue++;

//     if (firstValue > to) {
//       clearInterval(intervall);
//     }
//   }, 1000);
// }

// printNumbers(0, 10);

// Варіант 2
// function printNumbers(from, to) {
//   let firstValue = from;

//   function printTime() {
//     console.log(firstValue);
//     firstValue++;

//     if (firstValue <= to) {
//       setTimeout(printTime, 1000);
//     }
//   }
//   printTime()
// }

// printNumbers(0, 10);

// Завдання 2

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
delay(3000).then(() => {
  alert("виконалась через 3 секунди");
});
