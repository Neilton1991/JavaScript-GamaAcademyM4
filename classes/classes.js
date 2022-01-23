/*class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    read(){
        return `Estou lendo ${this.title}`
    }
}

let book = new book();
console.log(book)*/

class person{
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }
}
let person = new person('Neilton');
console.log(person.name)
