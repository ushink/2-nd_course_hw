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