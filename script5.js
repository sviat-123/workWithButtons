const buttonSort = document.getElementById('sortButton');
buttonSort.addEventListener('click',  function(){
    let list = document.getElementById('sortableList');
    let items = Array.from(list.children);
    items.sort((a, b) => a.textContent > b.textContent ? 1 : -1);
    items.forEach(item => list.appendChild(item));
});