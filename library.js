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
    book.isDisplayed=false;

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
    book.index=myLibrary.indexOf(book);
    createLibrary(myLibrary);
    
    console.log(myLibrary)
    bookform.classList.add("book-form");
    bookform.classList.remove("book-form-popup");

    
});
    



/*Function that dynamically creates a card on the page with the properties of the book
object that is passed to it displayed on the card*/
function createLibrary(arr) {

for (let i=0; i<=arr.length-1;i++) {


    if(arr[i].isDisplayed==false) {

    const card = document.createElement("div");
    const title= document.createElement("p");
    const author= document.createElement("p");
    const pages= document.createElement("p");
    const read= document.createElement("button");
    const remove = document.createElement("button");

    
    title.classList.add("card-text");
    author.classList.add("card-text");
    pages.classList.add("card-text");

    title.textContent=arr[i].title;
    author.textContent=arr[i].author;
    pages.textContent=arr[i].pages;
    

    if (arr[i].isRead == true) {

    read.textContent="Read";
    card.classList.add("card-read");

    }

    else{
        read.textContent ="Not Read";
        card.classList.add("card-notread");
    }

    remove.setAttribute("style","display:inline-block; background-color:white; width:fit-content");
    remove.textContent="Remove";

    library.appendChild(card);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(remove);
    
    

    //Event Listener that allows user to toggle whether a book has been read or not
    read.addEventListener("click", ()=>{
        if (arr[i].isRead==true) {
            read.textContent="Not Read";
            card.classList.remove("card-read");
            card.classList.add("card-notread");
            arr[i].isRead=false
        }
        else {
            read.textContent="Read";
            card.classList.remove("card-notread");
            card.classList.add("card-read");
            arr[i].isRead=true;
        }
    })

    //Event Listener that removes book card from the webpage and from myLibrary array
    remove.addEventListener("click", ()=>{
        if (myLibrary.length ==1) {
        myLibrary.pop()
        library.removeChild(card);
        }
        else {
        myLibrary.splice(arr[i].index,1);
        console.log(myLibrary);
        library.removeChild(card);
        }
        
    })

}
arr[i].isDisplayed=true;

}

}


//Book Object Constructor
function Book(title,author,pages,isRead,isDisplayed,index) {      

    this.title=title;
    this.author-author;
    this.pages=pages;
    this.isRead=isRead;
    this.isDisplayed=isDisplayed;
    this.index=index;
    
  

};
