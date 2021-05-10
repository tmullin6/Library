let myLibrary =[];


let book =Object.create(Book);
let book2=Object.create(Book);

book.title="The Hobbit";
book.author="JRR Tolkein";
book.length=286;
book.isRead=true;

book2.title="a";
book2.author="b";
book2.length=100;
book2.isRead=false;

addBook(book);
addBook(book2);

console.log(myLibrary);

function Book(title,author,length,isRead) {

    this.title=title;
    this.author-author;
    this.length=length;
    this.isRead=isRead;

};

function addBook(Book) {

    myLibrary.push(Book);
    return myLibrary;
}