const cipher = {
  // ...
};

let codigoDaLetra;
let codigoDaPrimeiraLetra;
let numeroDeslocamento;
let tamanhoAlfabeto = 25;


function encode(numeroDeslocamento, string) {
  let cifrar = ((codigoDaLetra - codigoDaPrimeiraLetra + numeroDeslocamento) % tamanhoAlfabeto) + codigoDaPrimeiraLetra;

  return cifrar;
}

function decode(numeroDeslocamento, string) {
  let deCifrar = ((codigoDaLetra - codigoDaPrimeiraLetra - numeroDeslocamento) % tamanhoAlfabeto) + codigoDaPrimeiraLetra;

  return deCifrar;
}

export default cipher;
