//Acquire elements
const addButton = document.getElementById('addBtn');
const overlay = document.getElementById('overlay');

//add event listeners
addButton.addEventListener('click', ()=> {
    overlay.style.display = 'flex';
});

overlay.addEventListener('click', (event)=> {
    if (event.target.id == 'overlay') {
        overlay.style.display = 'none';
    }

});