var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");


function clickEventHandler() {
        console.log("clicked");
        console.log(textInput.value);
    }

btnTranslate.addEventListener('click', clickEventHandler)



