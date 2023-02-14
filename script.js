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
    
    addform.reset();
});