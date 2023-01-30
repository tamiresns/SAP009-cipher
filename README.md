# Cifra de César

## Índice
![À esquerda, imagem com desenho de um diário, uma frase centralizada: Meu Diário Cifrado, e ao lado direito uma imagem de Julio César](https://user-images.githubusercontent.com/48700653/215564890-af7341e9-bf13-4661-b91f-1d5dc50d6ae4.png)

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Considerações gerais](#3-considerações-gerais)
* [4. Marco: Critérios de Aceitação Mínimos do Projeto](#5-marco-critérios-de-aceitação-mínimos-do-projeto)
* [5. Marco Opcional: Adicione suporte para letras minúsculas e outros caracteres](#5-marco-opcional-adicione-suporte-para-letras-minúsculas-e-outros-caracteres)
* [6. Considerações técnicas](#6-considerações-técnicas)
* [7. Objetivos de aprendizagem](#7-objetivos-de-aprendizagem)
* [8. Guias, dicas e leituras complementares](#8-guias-dicas-e-leituras-complementares)
* [9. Para considerar o feedback do projeto](#9-para-considerar-o-feedback-do-projeto)

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

## 2. Resumo do projeto

Este projeto é minha primeira aplicação web do _bootcamp_ Laboratória. Nela o usuário
poderá cifrar e decifrar um texto, no caso o seu diário, no navegador indicando um deslocamento
específico de caracteres (_offset_). 

![imagem mostrando o deslocamento da cifra de César](https://user-images.githubusercontent.com/48700653/215572827-2513c55d-061d-4cf7-ba47-1c5ea6ca26fd.png)


### Os objetivos gerais deste projeto são os seguintes

* Trabalhar com base em um boilerplate, a estrutura básica de um projeto em diferentes
  pastas (através de módulos em JS).
* Conhecer as ferramentas de manutenção e melhoria do código (linters e testes
  unitários).
* Aprenda sobre objetos, estruturas, métodos e iteração (loops) em JavaScript
* Implementar controle de versão com git (e a plataforma github)

## 3. Considerações gerais

* Resolvemos este projeto individualmente. Recomendamos uma duração de 1-3 sprints.
* Concentre-se em aprender e não apenas "concluir" o projeto.
* Sugerimos que você não tente saber tudo antes de começar a codificar.
  Não se preocupe muito agora com o que você _ainda_ não entende.
  Você vai aprender.

## 4. Marco: Critérios de Aceitação Mínimos do Projeto

Esses são os requisitos que seu projeto deve atender para garantir que
seu trabalho atenda aos objetivos principais.

**1. Uma interface que deve permitir ao usuário:**

* **Criptografar uma mensagem**
  - Inserir a mensagem (texto) que deseja criptografar. A mensagem usa um
    alfabeto simplificado (apenas letras maiúsculas).
  - Escolher um número de deslocamento (_offset_) indicando quantas posições
    você deseja que a cifra desloque cada caractere do alfabeto. O número
    será positivo e inteiro (inteiro positivo).
  - Veja o resultado da mensagem criptografada.

* **Descriptografar uma mensagem**
  - Inserir a mensagem (texto) que deseja descriptografar. A mensagem usa um
    alfabeto simplificado (apenas letras maiúsculas).
  - Escolher um número de deslocamento (_offset_, que corresponde ao que usamos
    para criptografar) indicando quantas posições você deseja que a cifra
    desloque cada caractere do alfabeto. O número será positivo e inteiro
    (inteiro positivo).
  - Veja o resultado da mensagem descriptografada.

**2. Testes unitários dos métodos.**
Os métodos `cipher` (`encode` e `decode`) devem ser cobertos por testes
unitários.

**3. Código do seu projeto enviado para seu repositório e interface "implantada".**
O código final deve estar um repositório no GitHub. A interface, ou página da
web, deve ser "implantada" usando o GitHub Pages.

**4. Um README contendo uma definição de produto.**
No README, conte-nos como você pensou sobre os usuários e qual foi o seu
processo para definir o produto final em nível de experiência e interface.
Estas perguntas servem de guia:

* Quem são os principais usuários do produto
* Quais são os objetivos desses usuários em relação ao seu produto
* Como você acha que o produto que você está criando está resolvendo seus
  problemas

Com esses requisitos atendidos, você pode agendar um feedback do projeto com
um coach.




## 9. Para considerar o feedback do projeto

Em resumo, os critérios mínimos de aceitação do projeto para considerar o
Project Feedback:

* [ ] Possui uma interface que permite ao usuário criptografar e
  descriptografar.
* [ ] O projeto será entregue incluindo testes unitários dos métodos `cipher`
  (`encode` e `decode`).
* [ ] O projeto será entregue livre de _erros_ de `eslint` (_warnings_ são ok).
* [ ] O código do seu projeto será entregue no GitHub.
* [ ] A interface será "implantada" usando o GitHub Pages.
* [ ] O README contém uma definição de produto.
