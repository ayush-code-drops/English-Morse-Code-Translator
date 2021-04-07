var txtInput = document.querySelector('#input-div')
var txtOutput = document.querySelector('#output-div')
var btnTranslate = document.querySelector('#btn-translate')

var url = "https://api.funtranslations.com/translate/morse.json?text="



function clickHandler() {
    var inputValue = txtInput.value
    fetch(url+inputValue)
        .then(response => response.json)
        .then(json => {
            var translatedTxt = json.contents.translated
        txtOutput.innerHTML=translatedTxt})

    
}



btnTranslate.addEventListener("click" ,clickHandler)