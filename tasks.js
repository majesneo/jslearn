let readNumber = () => {
    let chislo;
    do {
        chislo = prompt('vedi chislo')
    } while (!isFinite(chislo));
    if (chislo == null || chislo == "") {
        return null
    }
    return +chislo;
}
readNumber();



let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles.unshift('Рэп', 'Регги', 'металл', "other");
let center = styles.length;
let i = Math.floor(center / 2);
styles[i] = "Классика";
console.log(styles);
console.log(center);
console.log(i);



let sumInput = () => {
    let arrs = [];
    let summ = 0;
    while (true) {
        let value = prompt('value');
        if (value == '' || value == null || !isFinite(value)) break;
        arrs.push(+value);
    }
    for (let arr of arrs) {
        summ += arr;
    }
    return +summ
}
sumInput();



let array = [1, 2, 3];
let maxSumm = (array) => {
    let maxSumm = 0;
    for (let i = 0; i < array.length; i++) {
        let equalsZero = 0;
        for (let j = i; j < array.length; j++) {
            equalsZero += array[j]
            maxSumm = Math.max(maxSumm, equalsZero);
        }
    }
    return maxSumm;
}
console.log(maxSumm(array));


let arr = [1, 2];
let arrayLike = {
    0: "что-то",
    1: "ещё",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};

console.log(arr.concat(arrayLike));


let str = "-webkit-transition";
let camelize = (str) => {
    let arr = str.split('');
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '-') {
            arr.splice(i, 1);
            arr[i] = arr[i].toUpperCase();
        }
    }
    return arr = arr.join('');
}
console.log(camelize(str));
console.log(arr);



let str2 = "my-long-word";
function camelize2(str2) {
    return str2
        .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
        .map(
            // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
            // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}
console.log(camelize2(str2));



let arr = [5, 3, 8, 1];
let newArry = [];
let filterRange = (arr, a, b) => {
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] >= a) && (arr[i] <= b)) {
            newArry.push(arr[i]);
        } else if ((arr[i] <= a) && (arr[i] >= b)) {
            newArry.push(arr[i]);
        }
    }
    return newArry;
}
console.log(filterRange(arr, 2, 5));



function filterRange2(arr, a, b) {
    // добавлены скобки вокруг выражения для улучшения читабельности
    return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange2(arr, 1, 4);
console.log(filtered);



