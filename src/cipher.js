let codigoDaPrimeiraLetraMaiuscula = 65;
let codigoDaUltimaLetraMaiuscula = 90;
const tamanhoAlfabeto = 26;

function validarDeslocamento(deslocamento){
  return !isNaN(deslocamento)
}

function descobreASCInicial(cifraRecebida) {

  if(cifraRecebida === cifraRecebida.toUpperCase()) {
    return 65;
  }
  else {
    return 97; //Retorna ASC code do a minusculo
  }
}
function descobreASCFinal(cifraRecebida) {

  if(cifraRecebida === cifraRecebida.toUpperCase()) {
    return 90;
  }
  else {
    return 122; //Retorna ASC code do z minusculo
  }
}


function encode(numeroDeslocamento, cifraRecebida) {
  let resultado = "";
  if(!validarDeslocamento(numeroDeslocamento)){
    alert("Preecha o deslocamento");
    return "";
  }
  
  for(let i = 0; i < cifraRecebida.length; i++){
    const codigoDaLetra = cifraRecebida.charCodeAt(i);
    codigoDaPrimeiraLetraMaiuscula = descobreASCInicial(cifraRecebida[i]);

    const cifrar = ((codigoDaLetra - codigoDaPrimeiraLetraMaiuscula + numeroDeslocamento) % tamanhoAlfabeto) + codigoDaPrimeiraLetraMaiuscula;
    resultado = resultado + String.fromCharCode(cifrar);

  }
  return resultado;

}

function decode(numeroDeslocamento, cifraRecebida) {
  let resultado = "";
  if(!validarDeslocamento(numeroDeslocamento)){
    alert("Preecha o deslocamento");
    return "";
  }

  for(let i = 0; i < cifraRecebida.length; i++){
    const codigoDaLetra = cifraRecebida.charCodeAt(i);
    codigoDaUltimaLetraMaiuscula = descobreASCFinal(cifraRecebida[i]);

    const deCifrar = ((codigoDaLetra - codigoDaUltimaLetraMaiuscula - numeroDeslocamento) % tamanhoAlfabeto) + codigoDaUltimaLetraMaiuscula;
    resultado = resultado + String.fromCharCode(deCifrar);

  }  
  return resultado;
}

//export default cipher;
export {encode, decode, validarDeslocamento};


