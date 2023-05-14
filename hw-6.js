//#1

const numbers = [1, 5, 4, 10, 0, 3];

for (let a = 0; a < numbers.length; a++) {
    if (numbers[a] == 10) break;
    console.log (numbers[a]); //1 5 4
    
}

//#2

const numbers2 = [1, 5, 4, 10, 0, 3];

const i = numbers2.indexOf(4);
console.log (i); //2

/* или можно так

numbers2.forEach((el, index) => {
    if (el == 4) {
        console.log (index);
    }
});
*/

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

const sort = numb.sort().pop();
console.log (numb);

//#7


let numb2 = [9, 8, 7, 6, 5];

let c = prompt('Введите число от 1 до 10');
let search = String(numb2).includes(c);
console.log (search);


//#8


var str = 'abcdef';
var strRevers = str.split('').reverse().join('');
console.log (strRevers); // fedcba

//#9

let arr2 = [
    [1, 2, 3,],
    [4, 5, 6],
];

console.log (String(arr2).split(' ').join(', ')); // 1, 2, 3, 4, 5, 6

//#10


const rand = [6, 8, 9, 10, 7, 5, 4, 3, 2, 1];

for (let i = 0; i < rand.length - 1; i++) {
    console.log (rand[i]+ rand [i + 1]);
}


//#11

function random(arr){
    return arr.map(item => (Math.pow(item, 2)));
}

console.log (random([0, 8, 9, 10, 7, 5, 4, 3, 2, 1])); // 0, 64, 81, 100, 49, 25, 16, 9, 4, 1

//#12

function getLengthWords(arr){
    return arr.map((it) => it.length);
}

console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква'])); // [5, 0, 4, 19, 5]

//#13

function filterPositive(array) {
    return array.filter((el) => el < 0);
  }
  
console.log(filterPositive([-1, 0, 5, -10, 56])); // => [-1, -10]
console.log(filterPositive([-25, 25, 0, -1000, -2])); // => [-25, -1000, -2]
    
  