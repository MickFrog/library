let myBooks = [];

function Book(name, author, pages, read, index) {
    this.name = name;
    this.author = author;
    this.pages= pages;
    this.read = read;
    this.index = index;
}

//Acquire elements
const addButton = document.getElementById('addBtn');
const overlay = document.getElementById('overlay');
const addform = document.getElementById('add-Book-Form');

//Acquire form elements
const title = document.getElementById('bookName');
const author = document.getElementById('bookAuthor');
const pages = document.getElementById('pages');
const readStat = document.getElementById('read?');

//add event listeners
addButton.addEventListener('click', ()=> {
    overlay.style.display = 'flex';
});

overlay.addEventListener('click', (event)=> {
    if (event.target.id == 'overlay') {
        overlay.style.display = 'none';
    }
});

addform.addEventListener('submit', ()=> {
    myBooks.push(new Book(title.value,
        author.value, 
        pages.value,
        readStat.checked,
        myBooks.length));
    addform.reset();

    console.log(myBooks);
});