//#1

let hi = 1;

do {
    console.log ('Привет');
    hi++
} while (hi <= 2);

//#2

let a = 1;

while (a <= 5) {
    console.log (a); //1 2 3 4 5
    a++
}

//#3

for (let b = 7; b <= 22; b++) {
    
    console.log (b); // 7 8 9...22
}

//#4

let salary = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400,
}

for (const key in salary) {
    console.log ( `${key} - зарплата ${salary[key]} долларов.`)
}

//#5

let n = 1000;
let num = 0;

do {
    n = n/2;
    num++;
} while (n >= 50);

console.log (num); // 5

//#6

for (let fri = 5; fri <= 31; fri += 7) {
    
    console.log (`Сегодня пятница, ${fri}-е число. Необходимо подготовить отчет.`)
    
}