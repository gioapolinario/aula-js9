let i = 1;

do {
    document.querySelector("#contagem").innerHTML += i + "<br>";
    i++;
} while (i <= 10);

/*No while a condição fica no final do laço, isso quer dizer que o 
conteudo do laço será executado pelo menos 1 vez.
*/
