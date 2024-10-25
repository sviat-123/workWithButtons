const listFiltration = document.getElementById('filtration');
listFiltration.addEventListener('input', function(){
    let filterValue = this.value.toLowerCase();
    let list = document.getElementById('filterableList');
    let items = Array.from(list.getElementsByTagName('li'));

    items.forEach(item => {
        let text = item.textContent.toLowerCase();
        if (text.includes(filterValue)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});