//#1

const numbers = [1, 5, 4, 10, 0, 3];

for (let a = 0; a < numbers.length; a++) {
    console.log (numbers[a]);
    if (numbers[a] == 10) break; //1 5 4 10
    
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

const arr = [];

for (let i = 0; i < 3; i++) {
    arr [i] = [];

    for (let j = 0; j < 3; j++) {
        arr [i][j] = 1;
        
    }
}

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

numb2 = String(numb2).includes(Number(prompt('Введите число от 1 до 10')));
console.log (numb2);

//#8


var str = 'abcdef';
var strRevers = str.split('').reverse().join('');
console.log (strRevers); // fedcba

//#9

let arr2 = [
    [1, 2, 3,],
    [4, 5, 6],
];

console.log (arr2.flat()); // [1, 2, 3, 4, 5, 6]

//#10


const rand = [6, 8, 9, 10, 7, 5, 4, 3, 2, 1];

for (let i = 0; i < rand.length - 1; i++) {
    console.log (rand[i]+ rand [i + 1]);
}


//#11

const generateArra1 = (length, max) => (
    [...new Array(length)]
      .map(() => Math.round(Math.random() * max))
      
  );
  
const num10 = generateArra1(4, 10);

console.log (num10); //[7, 8, 1, 9]
console.log (num10.map(item => (Math.pow(item, 2)))); //[49, 64, 1, 81]


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
    
//#14

const generateArray = (length, max) => (
    [...new Array(length)]
      .map(() => Math.round(Math.random() * max))
  );
  
  const num = generateArray(10, 10);
  console.log(num); //[6, 5, 0, 2, 2, 5, 10, 2, 1, 4]
  console.log(num.filter((el) => el % 2 == 0)); //[6, 0, 2, 2, 10, 2, 4]

  //#15
/*
вернуться после изучения урока "Встроенные объекты" и приступить к решению ещё раз.

  const getArray = (length, max) => (
    [...new Array(length)]
      .map(() => Math.round(Math.random() * max))
      
  );
  
  const num9 = getArray(6, 10);
  const f = (num9.reduce((acc, max) => acc + max, 0)) / length;
  console.log(num9); 
  console.log(f); 

 */