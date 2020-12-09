var inputArea = document.querySelector("textarea");
var txtButton = document.querySelector(".txt-button");
var outputArea = document.querySelector(".output-area");

var serverUrl = "https://api.funtranslations.com/translate/article_rewrite.json"

function errorHandler(error){
    console.log("error occured: ", error)
    alert("something went wrong")

}

function clickHandler(){
    var url = serverUrl + "?text=" + inputArea.value;
    fetch(url)
    .then(response => response.json())
    .then(json => {
        var outputTxt = json.contents.translated

        outputArea.innerText = outputTxt
    })
    .catch(errorHandler)

}

txtButton.addEventListener("click", clickHandler)