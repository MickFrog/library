let myBooks = [];
let readCount = 0;
let totalCount = 0;

class Book {
    constructor(bkName, author, pages, read, index) {
        this.bkName = bkName;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.index = index;
    }
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

title.addEventListener('input', () => {
    if (title.validity.tooShort == true) {
        title.setCustomValidity("The book title should have more than 8 characters.");
    }
})

addform.addEventListener('submit', (event)=> {
    event.preventDefault();
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

function updateReadCount(val) {
    if (val == 'true') {
        val = 1;

    } else if (val == 'false') {
        val = -1;
    }

    readCount += val;
    readBooks.textContent = readCount;
}

function updateTotalCount(val) {
    totalCount += val;
    totalBks.textContent = totalCount;
}

function initReadButton(read_stat) {
    let readBtn = document.createElement('button');
    readBtn.id = 'readBtn';
    readBtn.textContent = 'Unread';
    readBtn.className = 'readFalse';
    readBtn.value = read_stat;

    //initialize read status button
    if (readBtn.value == 'true') {
        readBtn.value = 'true';
        readBtn.textContent = 'Read';
        updateReadCount(1);
        readBtn.classList.add('readTrue');
    }
    readBtn.addEventListener('click', (event)=> {
        updateReadBtn(event.target);
    });

    return readBtn;
}

function createParagraph(content) {
    let para = document.createElement('p');
    para.textContent = content;

    return para;
};

function createDeleteBtn(bk, objDiv) {
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove';
    deleteBtn.className = 'delete';

    objDiv.addEventListener('click', (event)=> {
        if (event.target.className == 'delete') {
            //remove the book from array - set it to null to preserve positions of other books
            myBooks[bk['index']] = null;

            //if book was read then reduce count
            if(objDiv.querySelector('#readBtn').value == 'true') {
                updateReadCount(-1);
            }
            updateTotalCount(-1);

            bookSection.removeChild(objDiv);
        }
    });

    return deleteBtn;
}

function addTile(newBk) {
    let newDiv = document.createElement('div');

    const bkTitle = createParagraph(newBk['bkName'].toUpperCase());

    const bkAuth = createParagraph('by ' + newBk['author']);

    const bkpages = createParagraph(newBk['pages'] + ' pages');

    const readButton = initReadButton(newBk['read'])

    const deleteButton = createDeleteBtn(newBk, newDiv);

    newDiv.appendChild(bkTitle);
    newDiv.appendChild(bkAuth);
    newDiv.appendChild(bkpages);
    newDiv.appendChild(readButton);
    newDiv.appendChild(deleteButton);

    updateTotalCount(1);

    newDiv.className = 'tile';

    bookSection.appendChild(newDiv);
}

function updateReadBtn(readButton) {
    if (readButton.value == 'false') {
        readButton.value = 'true';
        readButton.textContent = 'Read';
        updateReadCount(1);
        readButton.classList.add('readTrue');

    } else {
        readButton.value = 'false';
        readButton.textContent = 'Unread';
        updateReadCount(-1);
        readButton.classList.remove('readTrue');
    }
}