const buttonCreatingList = document.getElementById('addItemButton');
buttonCreatingList.addEventListener('click',  function(){
    let list = document.getElementById('itemList');
    let li = document.createElement('li');
    list.append(li);
    let massege = prompt('Введите список');
    li.textContent = massege;
});
