const buttonCount = document.getElementById('countButton');
const counterItem = document.getElementById('countDisplay');

buttonCount.addEventListener('click', function(){
    let list = document.getElementById('countableList');
    let itemCount = list.children.length;
    counterItem.textContent = `Количество элементов: ${itemCount}`;
});