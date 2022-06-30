
var save = document.getElementById('guardar');


function addWord(){
    var word = document.getElementById('input-palabra').value;
    var newWord = word.toUpperCase();
    words.push(newWord);
    alert("guardado correctamente")

    localStorage.setItem("Words", JSON.stringify(words));
    console.log(words);
}





















/*
}
function show_localstorage(){
    var words = localStorage.getItem("words");
    console.log(words);

}



//Función encargada de verificar que el formato de la palabra nueva a ingresar sea correcto y agregarla al arreglo de palabras
function agregarPalabra(){

    if(localStorage.length == 0){
        var conjuntoDePalabras = ["ALURA","HOLA","MUNDO"];
    }
    else{
        var conjuntoDePalabras = localStorage.getItem("arregloPalabras");
        conjuntoDePalabras = JSON.parse(conjuntoDePalabras);
    }

    let palabraNueva = document.getElementById("nuevaPalabra").value;
    var Caracteres = /[A-ZÑ]/g;
    var arregloCoincidencias = palabraNueva.match(Caracteres);

    const indice1 = palabraNueva.length;

    if(arregloCoincidencias == null || indice1 != arregloCoincidencias.length){
        mensajes(0);
    }

    else if (palabraNueva.length > 1 && indice1 == arregloCoincidencias.length){
        if (conjuntoDePalabras.indexOf(palabraNueva) == -1){
            conjuntoDePalabras.push(palabraNueva);
            conjuntoDePalabras = JSON.stringify(conjuntoDePalabras);
            localStorage.setItem("arregloPalabras",conjuntoDePalabras);

            conjuntoDePalabras = localStorage.getItem("arregloPalabras");
            conjuntoDePalabras = JSON.parse(conjuntoDePalabras);
        }
        else{
            mensajes(2);
        }
    }
}

//Función que elimina las palabras agregadas por el usuario
function borrarPalabras(){
    localStorage.clear();
}

document.getElementById("btn-nuevaPalabra").onclick = agregarPalabra
document.getElementById("borrarPalabras").onclick =
function(){
    borrarPalabras();
    mensajes(1);

} 
*/