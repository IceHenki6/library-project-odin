

const ToggleForm = ()=>{
    const addBookSection = document.getElementById('add-book');
    addBookSection.classList.toggle('hidden');

    const addBookButton = document.getElementById('add-book-btn');
    addBookButton.classList.toggle('hidden');
}

export default ToggleForm;