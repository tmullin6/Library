let myLibrary =[];

const library = document.querySelector(".library");
const add = document.querySelector("#add");



add.addEventListener("click", ()=>{

    let book = Object.create(Book);
    book.title=prompt("Title");
    book.author=prompt("Author");
    book.pages=Number.parseInt(prompt("Length"));
    let read=prompt("Have you read it Y/N");

    if (read=="Y"|| read=="y") {
        book.isRead=true;
    }
    else {
        book.isRead=false;
    }

    addBook(book);
    
    displayLibrary(myLibrary);

});



function Book(title,author,pages,isRead) {      //Book Object Constructor

    this.title=title;
    this.author-author;
    this.pages=pages;
    this.isRead=isRead;

};



function addBook(Book) {

    myLibrary.push(Book);
    return myLibrary;
};



function displayLibrary (arr) {

    for (let i = 0; i<arr.length; i++) {

        const card = document.createElement("div");
        const title= document.createElement("p");
        const author= document.createElement("p");
        const pages= document.createElement("p");
        const isRead= document.createElement("p");
        const remove = document.createElement("button");

        card.classList.add("card");
        
        title.textContent=arr[i].title;
        author.textContent=arr[i].author;
        pages.textContent=arr[i].pages;

        if (arr[i].isRead == true) {
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
}