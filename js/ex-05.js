for(let i = 1 ; i <= 50; i++){
    //aqui verifico se o número é ímpar, todo número dividido por 2 sobrar um resto diferente de 0 é ímpar 
    if(i%2 != 0){
       document.querySelector("#contagem").innerHTML += i + " ";
    }
}