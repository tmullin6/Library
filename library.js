let myLibrary =[];          //Initialize empty array to hold book objects for library


//Define Global Query Selector Constants
const library = document.querySelector(".library");
const add = document.querySelector("#add");
const bookform = document.querySelector(".book-form");
const submit = document.querySelector("#submit");
const reset=document.querySelector("#reset");


//Event Listener for the "Add New Book" button that displays the input form for the user to add book info
add.addEventListener("click",()=>{
    
    bookform.classList.add("book-form-popup");
    bookform.classList.remove("book-form");

});


/*Event Listener for book form submit button. Takes the information input by user into the form
and sets the values to the individual book properties. After creating the book object, the object
is pushed to the Mylibrary array and the function createBookCard is called to make a book card 
display on screen*/
submit.addEventListener("click",()=>{

    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const read = document.getElementsByName("read");
    let bookRead;

    let book = Object.create(Book);

    book.title=title.value;
    book.author=author.value;
    book.pages=Number.parseInt(pages.value);

    for (let i=0;i<read.length;i++){

        if(read[i].checked==true) {

            bookRead=read[i].value;
        }
    }

    (bookRead=="yes") ? book.isRead=true : book.isRead=false;


    if (!title.value || !author.value|| !pages.value) {
        alert("Please enter book information");
        return;
    }
    

    myLibrary.push(book);
    createBookCard(book);
    
    bookform.classList.add("book-form");
    bookform.classList.remove("book-form-popup");

    
});
    



/*Function that dynamically creates a card on the page with the properties of the book
object that is passed to it displayed on the card*/
function createBookCard(book) {

    const card = document.createElement("div");
    const title= document.createElement("p");
    const author= document.createElement("p");
    const pages= document.createElement("p");
    const isRead= document.createElement("button");
    const remove = document.createElement("button");

    
    title.textContent=book.title;
    author.textContent=book.author;
    pages.textContent=book.pages;

    if (book.isRead == true) {

    isRead.textContent="Read";
    card.classList.add("card-read");

    }

    else{
        isRead.textContent ="Not Read";
        card.classList.add("card-notread");
    }

    remove.textContent="Remove Book";

    library.appendChild(card);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(isRead);
    card.appendChild(remove);

    //Event Listener that allows user to toggle whether a book has been read or not
    isRead.addEventListener("click", ()=>{
        if (book.isRead==true) {
            isRead.textContent="Read";
            card.classList.remove("card-read");
            card.classList.add("card-notread");
            book.isRead=false
        }
        else {
            isRead.textContent="Not Read";
            card.classList.remove("card-notread");
            card.classList.add("card-read");
            book.isRead=true;
        }
    })

    //Event Listener that removes book card from the webpage and from myLibrary array
    remove.addEventListener("click", function (book){

        myLibrary.splice(book.getBookIndex,1);
        console.log(myLibrary);
        library.removeChild(card);
    })

}


//Book Object Constructor
function Book(title,author,pages,isRead) {      

    this.title=title;
    this.author-author;
    this.pages=pages;
    this.isRead=isRead;
    
    this.getBookIndex= function() {

        return myLibrary.indexOf(this);
    };

};
