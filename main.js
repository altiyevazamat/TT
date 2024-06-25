"use strick";

const answers = [];

answers[0] = prompt("Как ваше имя?", "");
answers[1] = prompt("Как ваше фамилия?", "");
answers[2] = +prompt("Сколько вам лет?", "");

console.log(
  `Его зовут ${answers[0]}, а фамилия ${answers[1]}, ему ${answers[2]} лет`
);

let incr = 10,
  dicr = 10;

console.log(incr++);
console.log(incr);
console.log("hEllo world!");
