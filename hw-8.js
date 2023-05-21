//#1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
 console.log(people.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;

    }
    if (a.age < b.age) {
        return -1;

    }

    return 0;
 }));

 // код выше должен вывеcти =>
 // [
 //  { name: 'Олег', age: 7 },
 //  { name: 'Анна', age: 17 },
 //  { name: 'Глеб', age: 29 },
 //  { name: 'Оксана', age: 47 }
 // ]


 //#2

function isPositive(number) {
    if (number > 0) {
        return number;
    }
}

function isMale(whoIS) {
    if (whoIS.gender == 'male') {
        return whoIS;
    }    
}

function filter(arr, ruleFunction) {
    const output = [];

    for (let i = 0; i < arr.length; i++) {
    output.push(ruleFunction(arr[i]));
    }

    return output;
}

    
    console.log(filter([3, -4, 1, 9], isPositive));
     // Должен выводить [3, 1, 9]
    
    const people2 = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people2, isMale)); 
    // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]