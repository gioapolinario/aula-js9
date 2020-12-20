let idade = 18

console.log(idade);
console.log( typeof idade);

let nome = "Gio"
console.log(nome);
console.log ( typeof nome);

let verdade = false;
console.log(verdade);
console.log(typeof verdade);

let listaDeFrutas1 = "Maça";
let listaDeFrutas2 = "Banana";
let listaDeFrutas3 = "Limão";

console.log(listaDeFrutas1, listaDeFrutas2, listaDeFrutas3);

let listaDeFrutas = ["Maçã", "Banana", "Limão", "Laranja"];
console.dir(listaDeFrutas);
console.log( typeof listaDeFrutas);

console.log(listaDeFrutas[1]);
console.clear();

let listaDeNotas = [5.5, 10, 3.8]
console.log(listaDeNotas);
console.dir(listaDeNotas);
console.log(listaDeNotas[2]);

let personagemNome = "Aimé";
let personagemRaça = "Demônio";
let personagemClasse = "Vampiro";
let personagemVida = 100;
let personagemEnergia = 75;
console.log(personagemNome, 
personagemRaça, personagemClasse, personagemVida, personagemEnergia)

let personagem = {
    "nome" : "Aimé",
    "raça" : "Demônio",
    "classe" : "Vampiro",
    "vida" : 100,
    "energia" : 75
};
console.clear()
console.dir(personagem);
console.log(personagem.vida);
console.log("Batalha");
personagem.vida = 80;
console.log(personagem.vida);

console.clear();

for(let i = 1; i <= 10 ; i++){
    console.log(i);
}

for(let i = 0 ; i < listaDeFrutas.leght ; i++){
console.log(listaDeFrutas[i]);
}

console.clear();

let numeroComputador = (Math.random() * (10 - 1) + 1);
console.log(numeroComputador);
let numeroJogador = prompt("Informe um número de 1 à 10");

if(numeroJogador == numeroComputador){
    console.log("Você ganhou!")
}else{
    console.log("Você perdeu!");
}




