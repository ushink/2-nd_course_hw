//#1

 let str = 'js';
 console.log(str.toUpperCase());

 //#2

 function searchStart(arr, str) {
    let pattern = `^${str}`;
    let re = new RegExp(pattern);
    return arr.map(e => e.toLowerCase()).filter((it) => re.exec(it));
    
 }
console.log (searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); // ['кошка', 'комар']
console.log (searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); // ['груша'])
console.log (searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); // [])