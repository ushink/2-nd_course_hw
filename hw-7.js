//#1

 let str = 'js';
 console.log(str.toUpperCase());

 //#2

 function searchStart(arr, str) {
    let pattern = `^${str}`;
    let re = new RegExp(pattern);
    return arr.map(e => e.toLowerCase()).filter((it) => re.exec(it));
    
 }
console.log (searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); // ['кошка', 'комар']
console.log (searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); // ['груша'])
console.log (searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); // [])

//#3

let num = 32.58884;

console.log(Math.floor(num)); // 32 ; До меньшего целого
console.log(Math.ceil(num)); // 33 ; До большего целого
console.log(Math.round(num)); // 33 ; До ближайшего целого

//#4

const numbers = [52, 53, 49, 77, 21, 32]; // исходный массив

const minNumber = Math.min(...numbers);
const maxNumber = Math.max(...numbers);
console.log(`Минимальное число: ${minNumber}, Максимальное число: ${maxNumber}`);

//#5

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min)) + min;

}
console.log (getRandom(1, 10));

//#6

/*
const getRandomArrNumbers = (max) => {
    let length = Math.round(max/2);
    [...new Array (length)]
     .map(() => Math.round(Math.random() * max)) ;
    
}
const number = getRandomArrNumbers(7);
console.log(number);

 

//#7

function getInteger(a, b) {
    if (a > b) {
        return Math.round(Math.random() * (a - b)) + b;
    }
    
}

let a = Math.round(Math.random() * 10000);
let b = Math.round(Math.random() * 10000);

console.log (getInteger(a,b))

*/

//#8

let myDate = new Date();
console.log (myDate);

//#9

let currentDate = new Date();

currentDate.setHours(24*73);
console.log(currentDate);

//#10

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate2 = new Date();

let fullDate = `Дата: ${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()}`;

let fullTime = `Время: ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`;

console.log(fullDate);
console.log(fullTime);