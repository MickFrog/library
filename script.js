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
const readBooks = document.getElementById('readBooks');
const totalBks = document.getElementById('totalBks')

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

function initReadButton(read_stat) {
    let readBtn = document.createElement('button');
    readBtn.textContent = 'Unread';
    readBtn.className = 'readFalse';
    readBtn.value = read_stat;

    //initialize read status button
    if (readBtn.value == 'true') {
        readBtn.value = 'true';
        readBtn.textContent = 'Read';
        readBtn.classList.add('readTrue');
    }
    readBtn.addEventListener('click', (event)=> {
        updateRead(event.target);
    });

    return readBtn;
}

function createParagraph(content) {
    let para = document.createElement('p');
    para.textContent = content;

    return para;
};

function addTile(newBk) {
    let newDiv = document.createElement('div');

    const bkTitle = createParagraph(newBk['bkName'].toUpperCase());

    const bkAuth = createParagraph('by ' + newBk['author']);

    const bkpages = createParagraph(newBk['pages'] + ' pages');

    const readButton = initReadButton(newBk['read'])

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove';
    deleteBtn.className = 'delete';

    newDiv.addEventListener('click', (event)=> {
        if (event.target.className == 'delete') {
            //remove the book from array - set it to null to preserve positions of other books
            myBooks[newBk['index']] = null;
            bookSection.removeChild(newDiv);
            console.log(myBooks);
        }
    });

    newDiv.appendChild(bkTitle);
    newDiv.appendChild(bkAuth);
    newDiv.appendChild(bkpages);
    newDiv.appendChild(readButton);
    newDiv.appendChild(deleteBtn);

    newDiv.className = 'tile';

    bookSection.appendChild(newDiv);
}

function updateRead(readButton) {
    if (readButton.value == 'false') {
        readButton.value = 'true';
        readButton.textContent = 'Read';
        readButton.classList.add('readTrue');

    } else {
        readButton.value = 'false';
        readButton.textContent = 'Unread';
        readButton.classList.remove('readTrue');
    }
}