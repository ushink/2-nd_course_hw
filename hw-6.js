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

//#4

let arr = [];
arr [0] = [1, 1, 1];
arr [1] = [1, 1, 1];
arr [2] = [1, 1, 1];
console.log (arr);

//#5

const numbers4 = [1, 1, 1];

const result2 = numbers4.push(2, 2, 2);
console.log (numbers4);

//#6

const numb = [9, 8, 7, 'a', 6, 5];

const sort = numb.sort();
const pop = numb.pop();
console.log (numb);