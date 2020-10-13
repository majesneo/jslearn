let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = (obj) => {
    let summ = 0;
    for (let key in obj) {
        if (obj[key] && typeof obj[key] == 'number') {
            summ += obj[key];
        }
    }
    if (!summ == 0) {
        return summ
    }
    return 0
}
console.log(sum(salaries));



let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
let multiplyNumeric = (obj) => {
    for (let key in obj) {
        if (obj[key] && typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu);



let calculator = {
    read(a, b) {
        this.a = +a,
            this.b = +b
        return { a, b }
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    },
}
console.log(calculator.read(10, "20"));
console.log(calculator.sum());
console.log(calculator.mul());



function Calculator() {
    this.read = function () {
        this.a = +prompt('value a');
        this.b = +prompt('value b');
    };
    this.sum = function () {
        return this.a + this.b
    };
    this.mul = function () {
        return this.a * this.b
    };
}
let calculator2 = new Calculator();
calculator2.read();
alert("Sum=" + calculator2.sum());
alert("Mul=" + calculator2.mul());



function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt('vedi value')
    }
}
let accum = new Accumulator(2);
accum.read();
console.log(accum.value);

