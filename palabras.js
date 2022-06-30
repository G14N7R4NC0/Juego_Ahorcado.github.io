var allWords = ["ALURA","HTML","CSS","SCRIPT","CODIGO","LOGICA","INDEX","ESTILO","MESSI","PROGRAMA"];
var words = localStorage.getItem("Words");
words = JSON.parse(words);

if (words == null) {
    words = allWords;
}