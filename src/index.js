import {encode, decode} from './cipher.js';

//console.log(cipher.encode(`abc`));

//1 guardar o que o usuário digitou
//2 cifrar
//3 mostrar o valor cifrado

const botaoCifra = document.getElementById("btnCifra");
botaoCifra.addEventListener("click", cifra);

function cifra() {
  const deslocamento = parseInt(document.getElementById("inputDeslocamento").value);
  const cifraRecebida = document.getElementById("inputRecebe").value;

  const palavraCifrada = encode(deslocamento, cifraRecebida);
    
  document.getElementById("inputEntrega").value = palavraCifrada;

}

const botaoDecifra = document.getElementById("btnDecifra");
botaoDecifra.addEventListener("click", deCifra);


function deCifra() {
  const deslocamento = parseInt(document.getElementById("inputDeslocamento").value);
  const cifraEntrega = document.getElementById("inputEntrega").value;

  const palavraDecifrada = decode(deslocamento, cifraEntrega);

  document.getElementById("inputRecebe").value = palavraDecifrada;

}

