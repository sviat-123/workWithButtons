const buttonDelete =  document.getElementById('removeItemButton');
buttonDelete.addEventListener('click',  function(){
    let list = document.getElementById('itemListToRemove');
    let lastItems = list.lastElementChild;
    if(lastItems){
        list.removeChild(lastItems);
    }
});