// Input output and btn variables

var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var textOutput = document.querySelector("#text-output");



//server url

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

// real server url

var serverURL = "https://api.funtranslations.com/translate/minion.json";


// error handler function
function errorHandler(error) {
    console.log("Ran into Error", error);
    alert("Sorry! The server is having some issues. We are looking into it.");
}


// this is the url generated for translation 

function urlGenerator(text){

    return serverURL + "?text=" + text;
}

// click handler function which will be called when click happens on translate button

function clickEventHandler() {

    var text = textInput.value;

 // processing by server 

    fetch(urlGenerator(text))
    .then(response =>response.json())
    .then(json => textOutput.innerText = json.contents.translated ) // ouput
    .catch(errorHandler)
}


btnTranslate.addEventListener('click', clickEventHandler)



