
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
    for (let i = 0; i < arr.length; i++) {
    return arr.filter(ruleFunction);

    }
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


    //#3
    const timer = (deadline) => {
        let time = deadline;
        const interval = setInterval(() => {
            time -= 1;
            console.log(new Date());
        }, 3000);
    
        setTimeout(() => {
            clearInterval(interval);
            console.log('30 секунд прошло')
        }, deadline * 1000)
    };
    
    timer(30);



//#4

function delayForSecond(callback) {
    setTimeout(callback, 1000); // выведет после колбэка ниже через 1 сек
    callback(); // сначала выведет это
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

//#5

// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк

function delayForSecond2(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:

delayForSecond2(() => sayHi('Глеб'));
