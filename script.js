let myBooks = [];

function Book(bkName, author, pages, read, index) {
    this.bkName = bkName;
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
const bookSection = document.querySelector('.bookTiles');

//add event listeners
addButton.addEventListener('click', ()=> {
    overlay.style.display = 'flex';
});

overlay.addEventListener('click', (event)=> {
    if (event.target.id == 'overlay') {
        removeForm();
    }
});

addform.addEventListener('submit', ()=> {
    let newBk = new Book(title.value,
        author.value, 
        pages.value,
        readStat.checked,
        myBooks.length)
    
    myBooks.push(newBk);
    addform.reset();
    removeForm();

    addTile(newBk);
});

//functions
function removeForm() {
    overlay.style.display = 'none';
}

function addTile(newBk) {
    let newDiv = document.createElement('div');

    const bkTitle = document.createElement('p');
    bkTitle.textContent = newBk['bkName'].toUpperCase();

    const bkAuth = document.createElement('p');
    bkAuth.textContent = 'by ' + newBk['author'];

    const bkpages = document.createElement('p');
    bkpages.textContent = newBk['pages'];

    newDiv.appendChild(bkTitle);
    newDiv.appendChild(bkAuth);
    newDiv.appendChild(bkpages);

    newDiv.className = 'tile';

    bookSection.appendChild(newDiv);
}