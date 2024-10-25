const buttonChangesColorText = document.getElementById('changeTextColorButton');
function generateColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
};
buttonChangesColorText.addEventListener('click', function() {
    let list = document.getElementById('colorChangeableList');
    let items = Array.from(list.getElementsByTagName('li'));
    items.forEach(item => {
        item.style.color = generateColor();
    });
});