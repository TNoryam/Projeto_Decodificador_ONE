var textInput = document.querySelector("#textoDigitado");
var  textOutput = document.querySelector("#textoSaida");
    
function criptografar (){

    var texto = textInput.value;

    var textCripto = texto.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");

    document.getElementById('textoSaida').innerHTML = textCripto;

    console.log("funcionou!");

}

function descriptografar(){

    var texto = textInput.value;

    var textDescripto = texto.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");

    document.getElementById('textoSaida').innerHTML = textDescripto;
    
}

function copiar(){

    var textoCop = document.getElementById('textoSaida');

    textoCop.select();
    document.execCommand('copy');
    alert('O texto foi copiado!');

}