//#1

function comparison(a, b) {
    if (a > b) {
        console.log (b); 
    } else {
        console.log (a);                                        
    }
}

 comparison (8, 4); // 4
 comparison (6, 6); // 6

 //#2

function number(c) {
    if (c % 2 == 0) {
        console.log ('Число четное');
    } else {
        console.log ('Число нечетное');
    }
}

 number (5); // Число нечетное
 number (80); // Число четное
 number (0); // Число четное

 //#3.1

let square1 = function (n) { 
        return n * n ;
}
console.log (square1(6)); // 36

 //#3.2

const square2 = (m) => m * m ;

console.log (square2(5));

//#4

function sayHello() {
    let age = prompt ('Сколько вам лет?');
    if (age >= 0 && age <= 12) {
        alert ('Привет, друг!');

    } else if (age >= 13) {
        alert ('Добро пожаловать!');

    }
    else {
        alert ('Вы ввели неправильное значение');
    
    }
}

//#5

let number2 = (a, b) => {
    if (isNaN(a) || isNaN (b)) {
        return 'Одно или оба значения не являются числом';

    } else {
        return a * b;
    }
}

 console.log (number2 ('2', 'df')); // Одно или оба значения не являются числом
 console.log (number2 ('2', '6')); // 12


