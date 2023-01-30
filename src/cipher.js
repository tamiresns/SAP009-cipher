const cipher = {
 //..
};

let codigoDaPrimeiraLetraMaiuscula = 65;
const tamanhoAlfabeto = 26;

function descobreASCInicial(cifraRecebida) {

  if(cifraRecebida == cifraRecebida.toUpperCase()) {
      return 65;
  }
  else {
      return 97; //Retorna ASC code do a minusculo
  }
 }


function encode(numeroDeslocamento, cifraRecebida) {
  let resultado = "";
  
  for(let i = 0; i < cifraRecebida.length; i++){
    let codigoDaLetra = cifraRecebida.charCodeAt(i);
    console.log("codigo 1 pletra: " + codigoDaLetra, "letra: "+cifraRecebida[i]);
    codigoDaPrimeiraLetraMaiuscula = descobreASCInicial(cifraRecebida[i]);

    let cifrar = ((codigoDaLetra - codigoDaPrimeiraLetraMaiuscula + numeroDeslocamento) % tamanhoAlfabeto) + codigoDaPrimeiraLetraMaiuscula;
    resultado = resultado + String.fromCharCode(cifrar);

    console.log(cifrar);
  }
  return resultado;

}

function decode(numeroDeslocamento, cifraRecebida) {
  let deCifrar = ((codigoDaLetra - codigoDaPrimeiraLetra - numeroDeslocamento) % tamanhoAlfabeto) + codigoDaPrimeiraLetra;

  return deCifrar;
}

//export default cipher;
export {encode, decode};


