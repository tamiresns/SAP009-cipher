import {encode, decode} from './cipher.js';

//console.log(cipher.encode(`abc`));

//1 guardar o que o usuário digitou
//2 cifrar
//3 mostrar o valor cifrado

let botaoCifra = document.getElementById("btnCifra");
botaoCifra.addEventListener("click", cifra);

function cifra() {
    let deslocamento = parseInt(document.getElementById("inputDeslocamento").value);
    let cifraRecebida = document.getElementById("inputRecebe").value;

    let palavraCifrada = encode(deslocamento, cifraRecebida);
    console.log(palavraCifrada)
    
    document.getElementById("inputEntrega").value = palavraCifrada;

}

function deCifra() {
    let deslocamento = parseInt(document.getElementById("inputDeslocamento").value);
    let cifraEntrega = document.getElementById("inputEntrega").value;

    let palavraDecifrada = decode(deslocamento, cifraEntrega);
    
    document.getElementById("inputRecebe").value = palavraDecifrada;

}

