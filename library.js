let myLibrary =[];

const library = document.querySelector(".library");
const add = document.querySelector("#add");



add.addEventListener("click",createBookForm);
    


function Book(title,author,pages,isRead) {      //Book Object Constructor

    this.title=title;
    this.author-author;
    this.pages=pages;
    this.isRead=isRead;

};


function createBookForm() {

    const formdiv = document.createElement("div");
    const title = document.createElement("p");
    const titleinput = document.createElement("input");
    const author = document.createElement("p");
    const authorinput = document.createElement("input");
    const pages = document.createElement("p");
    const pagesinput = document.createElement("input");
    const read = document.createElement("p");
    const readinput = document.createElement("input");
    const submit = document.createElement("input");

    title.textContent="Title:";
    author.textContent="Author:";
    pages.textContent="Length:";
    read.textContent="I have finished this book"
    submit.textContent="Add Book"

    titleinput.type="text";
    authorinput.type="text";
    pagesinput.type="text";
    readinput.type="checkbox";
    submit.type="submit";

    formdiv.classList.add("book-form");

    library.appendChild(formdiv);
    formdiv.appendChild(title);
    formdiv.appendChild(titleinput);
    formdiv.appendChild(author);
    formdiv.appendChild(authorinput);
    formdiv.appendChild(pages);
    formdiv.appendChild(pagesinput);
    formdiv.appendChild(read);
    formdiv.appendChild(readinput);
    formdiv.appendChild(submit);

    submit.addEventListener("click", () =>{

        let book = Object.create(Book);

        book.title=titleinput.value;
        book.author=authorinput.value;
        book.pages=Number.parseInt(pagesinput.value);

        if (readinput.value="on") {
            book.isRead=true;
        }
        else {
            book.isRead=false;
        }
        
        myLibrary.push(book);
        createBookCard(book);

        library.removeChild(formdiv);

        
        
        
        
    })
}


function displayLibrary(arr) {
    for (let i=1; i<arr.length;i++) {

        

    }
}



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

}


