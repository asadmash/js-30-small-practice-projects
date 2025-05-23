const selectField = document.querySelector('#selectField');
const selectText = document.querySelector('#selectText');
const options = document.querySelectorAll('.options');
const list = document.querySelector('#list');
const arrowImg = document.querySelector('#arrowImg'); 

selectField.onclick = function () {
    list.classList.toggle('hide');
    arrowImg.classList.toggle('rotate');
}

for(option of options){
    option.onclick = function (){
        selectText.innerHTML = this.textContent;
        list.classList.toggle('hide');
        arrowImg.classList.toggle('rotate');
    }
}