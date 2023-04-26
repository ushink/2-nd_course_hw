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