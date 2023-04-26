// #1
let a = 10; //Создайте переменную a. Запишите в нее значение 10,
alert (a); //выведите его на экран с помощью метода 

a = 20; //Затем запишите в нее значение 20,
alert (a); // выведите его на экран.


// #2
const year = 2007;
alert ('год выпуска первого iPhone: ' + year);

// #3
const useName = "Brendan Eich";
alert ('Имя создателя языка JavaScript: ' + useName);

// #4
let number1 = 10;
let number2 = 2;
alert (number1 + number2); // 12
alert (number1 - number2); // 8
alert (number1 * number2); //20
alert (number1 / number2); //5

// #5
let result = number2 ** 5;
alert (result); //32

// #6
let number3 = 9;
alert (number3 % number2); //1

// #7
let num = 1;
num += 5; //6
num -= 3; //3
num *= 7; //21
num  /= 3; //7
++num ; //8
--num ; //7
alert(num); //7

// #8
let age = prompt('Сколько вам лет?');
alert(age);

// #9.0
let user = {
    name: 'Uyliana',
    age: 24,
    isAdmin: true,
    }

// #9.1
user['city of residence'] = 'Saratov';

// #9.2
user.age = 25

// #9.3
delete user['city of Residence'];
 
// #9.4
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert (user.info);

//#10
let forename = prompt ('Как вас зовут?');
alert (`Привет, ${forename}!`)