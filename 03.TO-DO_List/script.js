const inputBox = document.querySelector('#input-box');
const addButton = document.querySelector('#add-btn');
const listContainer = document.querySelector('#list-container');


// add event listener
addButton.addEventListener('click', addTask);

// addTask function
function addTask(){
    if(inputBox.value === ''){
        alert('You must write something!')
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        // cross icon in every list item
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    // call save data function
    saveData();
}

listContainer.addEventListener('click', handleTask);

// handle task check/uncheck and delete
function handleTask(e){
if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked');
    // call save data
    saveData();
} else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    // call save data
    saveData();
}
}

// function for save task data to local storage
function saveData(){

        localStorage.setItem('data', listContainer.innerHTML);

}

// show the data
function showData(){

        listContainer.innerHTML = localStorage.getItem('data');

}

showData();