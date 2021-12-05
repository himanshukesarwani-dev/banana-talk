var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var textOutput = document.querySelector("#text-output");

function clickEventHandler() {
       textOutput.innerText = textInput.value + "Translated Text will come here!";
    }

btnTranslate.addEventListener('click', clickEventHandler)



