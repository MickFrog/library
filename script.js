//Acquire elements
const addButton = document.getElementById('addBtn');
const overlay = document.getElementById('overlay');

console.log(overlay);

//add event listeners
addButton.addEventListener('click', ()=> {
    overlay.style.display = 'flex';
});