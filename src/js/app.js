import cardController from './CardController.js'
import ToggleForm from './ShowForm.js'

let myLibrary = [];

class Book{
    constructor(title, author, numberOfPages, isRead){
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.isRead = isRead;
    }


    set setRead(read){
        this.isRead = read;
    }

}const addBookToLibrary = (book) => {
    myLibrary.push(book);
}

const addBookForm = document.getElementById('form');
const closeButton = document.getElementById('close-btn');
const addBookButton = document.getElementById('add-book-btn');

addBookButton.addEventListener('click', ToggleForm);
closeButton.addEventListener('click', ToggleForm);

addBookForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    const bookName = document.getElementById('name').value;
    const bookAuthor = document.getElementById('author').value;
    const bookPages = document.getElementById('pages').value;
    const isBookRead = document.getElementById('read').checked;

    const book = new Book(bookName, bookAuthor, bookPages, isBookRead);

    addBookToLibrary(book);
    
    cardController.displayBooks(myLibrary);

    
    document.getElementById('name').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').checked = false;
    ToggleForm()
})

export default myLibrary;






