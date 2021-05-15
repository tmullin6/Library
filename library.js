let myLibrary =[];

const library = document.querySelector(".library");
const add = document.querySelector("#add");
const bookform = document.querySelector(".book-form");
const submit = document.querySelector("#submit");
const reset=document.querySelector("#reset");

add.addEventListener("click",()=>{
    
    bookform.classList.add("book-form-popup");
    bookform.classList.remove("book-form");

});

submit.addEventListener("click",()=>{

    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    let read = document.querySelector("#read");

    let book = Object.create(Book);

    book.title=title.value;
    book.author=author.value;
    book.pages=Number.parseInt(pages.value);

    if (!title.value || !author.value|| !pages.value) {
        alert("Please enter book information");
        return;
    }
    
    if (read.value == "yes") {

        book.isRead==true;

    }
    else {

        book.isRead==false;
    }

    myLibrary.push(book);
    createBookCard(book);
    
    bookform.classList.add("book-form");
    bookform.classList.remove("book-form-popup");

    
})
    
reset.addEventListener("click",()=>{


})

function Book(title,author,pages,isRead) {      //Book Object Constructor

    this.title=title;
    this.author-author;
    this.pages=pages;
    this.isRead=isRead;

};



function createBookCard(book) {

    const card = document.createElement("div");
    const title= document.createElement("p");
    const author= document.createElement("p");
    const pages= document.createElement("p");
    const isRead= document.createElement("p");
    const remove = document.createElement("button");

    card.classList.add("card");
    
    title.textContent=book.title;
    author.textContent=book.author;
    pages.textContent=book.pages;

    if (book.isRead == true) {
    isRead.textContent="Have read";
    }
    else{
        isRead.textContent ="Have not read";
    }

    remove.textContent="Remove Book";

    library.appendChild(card);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(isRead);
    card.appendChild(remove);

    remove.addEventListener("click", ()=>{

        library.removeChild(card);
    })

}


