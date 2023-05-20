function playGame1() {
    let monthNumber = prompt ('Введите номер месяца')
    if (monthNumber == 1 || monthNumber == 2 || monthNumber == 12) {
        alert ('Зима');
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        alert ('Весна');
    }  else if (monthNumber >= 6 && monthNumber <= 8) {
        alert ('Лето');
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        alert ('Осень');
    } else {
        alert ('Попробуй ещё раз');
    }
}

function playGame2() {
    const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    alert (fruits.sort(() => Math.random() - 0.5));

    let shift = fruits.shift().toUpperCase();
    let pop = fruits.pop().toUpperCase();

    let first = (prompt ('Чему равнялся первый элемент массива?').toUpperCase());
    let last = (prompt ('Чему равнялся последний элемент массива?').toUpperCase());
    
    if (first == shift && last == pop) {
        alert ('Молодец! Угадал!');
    } else if (first == shift || last == pop) {
        alert ('Вы были близки к победе!');
    } else {
        alert ('Не угадал');
    }
   
}
