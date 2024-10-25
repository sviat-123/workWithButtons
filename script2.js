const buttonClick = document.getElementById('counterButton');
const counter = document.getElementById('counterDisplay');

let clickCount = 0;

buttonClick.addEventListener('click',  function(){
    clickCount++;
    counter.textContent = `${clickCount}`;
});