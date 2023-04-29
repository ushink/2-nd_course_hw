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

for (let num = 7; num <= 22; num++) {
    
    console.log (num); // 7 8 9...22
}

//#4

let salary = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400,
}

for (const key in salary) {
    console.log ( `${key} - зарплата ${salary[key]} `)
}
