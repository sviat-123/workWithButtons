const buttonShowHide = document.getElementById('toggleButton');
const text = document.getElementById('text');


buttonShowHide.addEventListener('click',  function(){
    if(text.style.display === 'none'){
        text.style.display = 'block';
    } else{
        text.style.display = 'none';
    }    
});