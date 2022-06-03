"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
const a = prompt("Один из последних просмотренных фильмов?", ""),
  b = prompt("На сколько оцените его?", ""),
  c = prompt("Один из последних просмотренных фильмов?", ""),
  d = prompt("На сколько оцените его?", "");

//let number = 5;
//const leftBorderWidth = 1;

//number = 10;
//console.log(number);
//const obj = {
//name: "Dima",
//age: 26,
//isMarried: true,
//};
//console.log (obj.isMarried);
//console.log(obj.name);
//const arr = ["a", "b", "c"];
//arr[12] = "1488";

//console.log(arr);
//const b = 1234;
// alert('Hello');
//const result = confirm("Are you here?");
//console.log(result);
//const answer = prompt("Vam est 18", "pidar"); - dlia togo 4tobu zadat vopros
// const answer = +prompt("Vam est 18", "18");
// console.log(answer + 5);
// const answers = [];
// answers[0] = prompt("Хто я?", "");
// answers[1] = prompt("Ты лох или пидр?", "");
// answers[2] = prompt("Почему так, Обэмэ?", "");
// console.log(typeof answers);
// const category = 'toys'; интерполяция - знак доллара и скобки для продления ссілок или данніх
// console.log(`https://someurl.com/${category}/5/chlen`);
// console.log( 4 + ' - cock');
//let incr = 10,
// decr = 10;
// ++incr;
// --decr;
//console.log(++incr);
// console.log(--decr);
// console.log(1 % 2);
// console.log(2 * 4 == 8);
// console.log( 2*4 === 8); strogoe sravnenie
// const isChecked = true,
//       isClose = true;
// console.log(isChecked && isClose);
// ! operator otricaniya - pri etom kode vidaet true, a ne false
// const isChecked = false,
//   isClose = false;
// console.log(isChecked || !isClose);
//git status - proverit faily
//git add -A - dobavit vse faily
//git commit -a -m"first commit" - добавление комментария к изменениям файлов. что сделали на этой контрольной точке
//git log - posmotret kto kogda menial kod
//git push -u origin master - vykinut fail v internat
//cd.. - vyiti z papki
//cd nazvanie papki - voiti v papky
//git clone http//: git nazvanie papki - ckopirovat rabochii ili drygoi c github
//git pull - подтянуть те изменения что біли сделаны другими
