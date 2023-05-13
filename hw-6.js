//#1

const numbers = [1, 5, 4, 10, 0, 3];

for (let a = 0; a < numbers.length; a++) {
    if (numbers[a] == 10) break;
    console.log (numbers[a]);
    
}

//#2

const numbers2 = [1, 5, 4, 10, 0, 3];

numbers2.forEach((el, index) => {
    if (el == 4) {
        console.log (index);
    }
});

//#3

const numbers3 = [1, 3, 5, 10, 20];

const result = numbers3.join(' ');
console.log (result);