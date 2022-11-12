import myLibrary from "./app.js";

const displayBooks = (library)=>{
    const booksContainer = document.querySelector('.book-cards');
    booksContainer.innerHTML = '';
    library.forEach((book,index)=>{
        createCard(book,index);
    })

}




const createCard = (Book, id) => {
    const cardContainer = document.querySelector(".book-cards");
    const card = document.createElement('div');
    card.id = id;
    card.innerHTML = 
        `
        <h2 class="book-title">Title: ${Book.title}</h2>
        <h3 class="book-author">Author: <span>${Book.author}</span></h3>
        <h3 class="book-pages">Number of pages: <span>${Book.numberOfPages}</span></h3>
        <div>
            <h3 class="book-read">Read: <span>${Book.isRead ? "Yes" : "No"}</span></h3>
            <button class="read-btn">Change</button>
        </div>
        <button class="delete-btn">Delete</button>
        `;
    card.classList.add('card');

    cardContainer.appendChild(card);
    
}

const RefreshTable = ()=>{
    displayBooks(myLibrary);
}



document.addEventListener('click', (event)=>{
    if(event.target.classList.contains('delete-btn')){
        //const cardArr = document.querySelectorAll('.card');
        const card = event.target.parentElement;
        myLibrary.splice(card.id,1);
        card.remove();
        RefreshTable();
    }

    if(event.target.classList.contains('read-btn')){
        // ToggleRead(event);
        const btnContainer = event.target.parentElement;
        const card = btnContainer.parentElement;
    
        // Book.setRead = !Book.isRead;
        const bookToModify = myLibrary[card.id];
        bookToModify.setRead = !bookToModify.isRead;
        
        console.log(bookToModify);
        RefreshTable();
    }
})



export default {displayBooks};

