//#1
let password = 'пароль';
let conclusion = prompt ('Введите пароль');
(conclusion === password) ? alert ('Пароль введен верно') : alert ('Пароль введен неправильно');
 
//#2
let c = Number (-2);
if (c > 0 && c < 10) {
    console.log ('Верно');
} else {
    console.log ('Неверно');
}

//#3
let d = Number (999);
let e = Number (55);
if (d > 100 || e > 100) {
    console.log ('Верно');
} else {
    console.log ('Неверно');
}

//#4
let a = '2';
let b = '3';
let number1 = 5 - a;
a = number1;
let number2 = 5 - b;
b = number2;
alert(a + b);

//#5
let monthNumber = prompt ('Введите номер месяца')
switch (monthNumber) {
    case '1':
        console.log ('Зима');
        break;
    case '2':
        console.log ('Зима');
        break;
    case '3':
        console.log ('Весна');
        break;
    case '4':
        console.log ('Весна');
        break;   
    case '5':
        console.log ('Весна');
        break;
    case '6':
        console.log ('Лето');
        break;
    case '7':
        console.log ('Лето');
        break;
    case '8':
        console.log ('Лето');
        break;
    case '9':
        console.log ('Осень');
        break;
    case '10':
        console.log ('Осень');
        break; 
    case '11':
        console.log ('Осень');
        break;  
    case '12':
        console.log ('Зима');
        break;
         
    default:
        console.log ('Упс.. Ввел что-то не то')
        break;
}

//#6 style.css

//#7
let num = prompt ('Пожалуйста, введите любое число');
const control = num => !isNaN(num);
if (num % 2 === 0) {
    alert ('Число четное');
} else if (num % 2 === 1){
    alert ('Число нечетное');
} else {
    alert ('Попробуй еще');
}
 
//#8
let clientOS = prompt('Если вы используете Android, введите 1, если iOS введите 0 ');
if (clientOS == 0) {
    alert ('Установите версию приложения для iOS по ссылке');
} else if (clientOS == 1){
    alert ('Установите версию приложения для Android по ссылке');
} else {
    alert ('Внимательно прочитайте задание'); // я бы после этого добавила цикл чтобы вернул обратно на ввод данных
}

//#9
let clientDeviceYear = prompt ('Введите год выпуска телефона');

if (clientOS == 0 && clientDeviceYear < 2015) {
    alert ('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientOS == 0 && clientDeviceYear >= 2015){
    alert ('Установите версию приложения для iOS по ссылке');

} else if (clientOS == 1 && clientDeviceYear < 2015){
    alert ('Установите облегченную версию приложения для Android по ссылке');
} else if (clientOS == 1 && clientDeviceYear >= 2015){
    alert ('Установите версию приложения для Android по ссылке');

} else {
    alert ('Внимательно прочитайте задание');
}
