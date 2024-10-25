const  textInput = document.getElementById('textInput');
const outPutText = document.getElementById('outputText');

textInput.addEventListener('input', function(){
    outputText.textContent = `Ваш текст появится здесь: ${textInput.value}`;
});