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

function getRandomArrNumbers(num) {
    const arr = []; // пустой массив
    let length = Math.floor(num/2); // длина в два раза меньше заданного числа
    for (let i = 0; i < length; i++) {
        arr.push(num);  
    }
    return arr.map(() => (Math.round(Math.random() * num))); // создает новый массив с указаниями
}
console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

//#7

function getInteger(min, max) {
    return Math.round(Math.random() * (max - min)) + min;

}
console.log (getRandom(50, 100));


//#8

let myDate = new Date();
console.log (myDate);

//#9

let currentDate = new Date();

currentDate.setHours(24*73); // не додумалась как сделать через getDate() и setDate()
console.log(currentDate);

/*
let currentDate = new Date(); // Создаем переменную currentDate и сохраняем в ней текущую дату
console.log("Текущая дата: " + currentDate); // Выводим текущую дату

// Создаем новую дату, добавляя 73 дня к текущей
let futureDate = new Date();
futureDate.setDate(currentDate.getDate() + 73);

// Выводим дату, которая наступит через 73 дня после текущей
console.log("Дата через 73 дня: " + futureDate);

*/


//#10

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let newDate = new Date();

let fullDate = `Дата: ${newDate.getDate()} ${months[newDate.getMonth()]} ${newDate.getFullYear()}`;

let fullTime = `Время: ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;

console.log(fullDate);
console.log(fullTime);
