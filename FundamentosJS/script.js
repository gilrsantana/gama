
// var myName = "Gilmar" //string

// var age = 43 //number

// var height = 1.58 //number

// null
// undefined

// var isStudent = true //boolean

// // Objeto, array e function
// var person = {
//     "name": "Gilmar",
//     "age": 43
// }

// var students = ["André", "Paulo", "Roberta"];

// function sum(a, b) {
//     return a+b;
// }

// // operador typeof

// console.log(typeof 43);

// console.log(age);

// console.log(typeof age);

// console.log(typeof isStudent)

// var object

// console.log(typeof object)

// var myObject = null
// console.log(typeof myObject)

// console.log(typeof sum)

// // Operadores

// var sumTwonumber = 1+3;
// console.log(sumTwonumber);

// var subTwonumber = 1-3;
// console.log(subTwonumber);

// var multTwonumber = 1*3;
// console.log(multTwonumber);

// var divTwonumber = 1/3;
// console.log(divTwonumber);

// var num = 1;
// console.log(num++);
// console.log(++num);

// if(typeof num == "number"){
//     console.log("é um número")
// } else {
//     console.log("não é um número")
// }

// function sum (a, b) {
//     return a + b;
// }

// console.log(sum (2, 7))

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read() {
        return `Estou lendo ${this.title}`;
    }
    
}

let book = new Book('Quicas Borba', 'Machado de Assis', 128);
console.log(book.read());

console.log(book)

class ITBook extends Book {
    constructor(title, author, pages, technology) {
        super(title, author, pages);
        this.technology = technology;
    }
}

let bookIT = new ITBook('Quicas Borba', 'Machado de Assis', 128, 'Nova Tech');
console.log(bookIT);
console.log(bookIT.read());

class Person {
    constructor (name) {
        this._name = name;
    }

    get name() {return this._name}

    set name(value) {this._name = value}
}

let p1 = new Person('André');
console.log(p1.name)
p1.name = 'Roberto';
console.log(p1.name)