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
console.log(arr);


let arr = [5, 3, 8, 1];
let filterRangeInPlace = (arr, a, b) => {
    for (let i = 0; i < arr.length; i++) {
        if (a <= arr[i] && b <= arr[i]) {
            console.log(arr[i]);
            arr.splice(i, 1);
        }
    }
}
console.log(filterRangeInPlace(arr, 1, 4));
console.log(arr);

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);
console.log(arr);

[1, -2, 15, 2, 0, 8].sort(function (a, b) {
    console.log(a + " <> " + b);
});


let arr = ["HTML", "JavaScript", "CSS"];
let copySorted = (arr) => {
    let sorted = arr.slice(0);
    console.log(sorted);
    let string = String(sorted.sort());
    console.log(string);
}
copySorted(arr);
console.log(arr);


function Calculator() {
    this.calculate = (str) => {
        this.str = str;
        console.log(a = +this.str.slice(0, 1));
        console.log(a);
        console.log(b = +this.str.slice(-1));
        console.log((this.operator = this.str.slice(1, 4)));
        switch (this.operator) {
            case " + ":
                return a + b
            default:
                return ("Input Error")
        }
    }
    this.addMethod = (name, func) => {
        this.operator = func;
        this.str = name;
        console.log(this.operator);
        console.log(this.str);
        switch (name) {
            case " * ":
                return a * b
            default:
                return ("Input Error");
        }
    }
}
let calc = new Calculator;
console.log(calc.calculate("4 + 5"));



function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function (str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    }

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}
let calc = new Calculator;
console.log(calc.calculate("4 + 9"));
let powerCalc = new Calculator;
console.log(powerCalc.addMethod("*", (a, b) => a * b));
powerCalc.addMethod("**", (a, b) => a ** b);
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
let result = powerCalc.calculate("2 ** 3");
let result2 = powerCalc.calculate("2 * 3");
console.log(result);
console.log(result2);

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];
console.log(users.map(user => user.name ? user.name : ""));


let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = [
]
console.log(usersMapped = users.map(user => ({ fullName: user.name + " " + user.surname, id: user.id })));
console.log(usersMapped);


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

let sortByAge = (arr) => {
    console.log(arr.sort((a, b) => a.age - b.age));
}
sortByAge(arr);
console.log(arr);

let arr = [1, 2, 3];

let shuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5);

}
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

let getAverageAge = (arr) => {
    console.log(arr.reduce((sum, item) => sum + item.age, 0));
}

getAverageAge(arr);



let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];
function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}
console.log(unique(strings));



let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
let unique = (values) => {
    let set = new Set(values);
    return set
}
console.log(unique(values));


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr) {
    let map = new Map();
    for (let word of arr) {

        // разбиваем слово на буквы, сортируем и объединяем снова в строку
        let sorted = word.toLowerCase().split("").sort().join("");
        console.log(sorted);
        console.log(map.set(sorted, word));
        console.log(map);
    }
    return Array.from(map.values());
}

console.log((aclean(arr)));

let map = new Map();
map.set("name", "John");
console.log(map);
let keys = map.keys();
console.log(map.keys());
console.log(keys);
let newArry = Array.from(keys);
newArry.push("more");
console.log(newArry);



let read = new WeakSet();
let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];
read.add(messages);
console.log(read);
console.log(read.has(messages));
messages = null;
console.log(read.has(messages));

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];
let readMap = new WeakMap();
readMap.set(messages[0], new Date(2017, 1, 1));

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
let sumSalaries = (obj) => {
    let summ = 0;
    if (obj) {
        for (let item of Object.values(obj)) {
            summ += item;
        }
        return summ
    }
    return 0
}
console.log(sumSalaries(salaries));


function sumSalaries2(salaries) {
    return Object.values(salaries).reduce((a, b) => a + b, 0)
}
console.log(sumSalaries2(salaries));

let user = {
    name: 'John',
    age: 30
};

let count = (obj) => {
    let summProp = 0;
    for (let item in obj) {
        if (item) {
            summProp += 1
        }
    }
    return summProp
}
console.log(count(user));

function count2(obj) {
    return Object.keys(obj).length;
}
console.log(count2(user));
let [firstName, surname] = "Ilya Kantor".split(' ');
console.log(firstName);
console.log(surname);

let user = {
    name: "John",
    age: 30
};
for (let [key, value] of Object.entries(user)) {
    console.log(`${key}:${value}`);
}


// console.log(Object.entries(user));
let title, width, height;

// ошибка будет в этой строке
({ title, width, height } = { title: "Menu", width: 200, height: 100 });

let user = {
    name: "John",
    years: 30
};

let { name, years: age, isAdmin = false } = user;
console.log(name);
console.log(age);
console.log(isAdmin);

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let topSalary = (salaries) => {
    let maxValue = 0;
    let name;
    console.log();
    for (let [item, value] of Object.entries(salaries)) {
        console.log(value);
        console.log(item);
        if (maxValue < value) {
            maxValue = value;
            name = item;
        }
    }
    return name
}
console.log(topSalary(salaries));

let user = {
    name: "Василий Иванович",
    age: 35
};

let json = JSON.stringify(user);
console.log(json);

console.log(JSON.parse(json));

let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

JSON.stringify(meetup, function replacer(key, value) {

}