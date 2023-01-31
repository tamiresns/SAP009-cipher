# Cifra de César

## Índice
![À esquerda, imagem com desenho de um diário, uma frase centralizada: Meu Diário Cifrado, e ao lado direito uma imagem de Julio César](https://user-images.githubusercontent.com/48700653/215564890-af7341e9-bf13-4661-b91f-1d5dc50d6ae4.png)

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Dependências](#3-dependencias)
* [4. Acesso ao projeto](#4-acesso-ao-projeto)
* [5. Autora do projeto](#5-autora-do-projeto)


***

## 1. Prefácio

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

![imagem mostrando o deslocamento da cifra de César](https://user-images.githubusercontent.com/48700653/215572827-2513c55d-061d-4cf7-ba47-1c5ea6ca26fd.png)


## 2. Resumo do projeto

Este projeto é minha primeira aplicação web do _bootcamp_ Laboratória. Nela o usuário
poderá cifrar e decifrar um texto, no caso o seu diário :memo:, no navegador indicando um deslocamento
específico de caracteres (_offset_). 


### 3. Dependências

Para rodar este projeto é necessário ter:
* NodeJS >= current Version



#### 4. Acesso ao projeto
[Link do Projeto](https://tamiresns.github.io/SAP009-cipher/src/)



##### 5. Autora do projeto

| [<img src="https://avatars.githubusercontent.com/u/48700653?v=4" width=115><br><sub>Tamires Nascimento</sub>](https://github.com/tamiresns)| 








