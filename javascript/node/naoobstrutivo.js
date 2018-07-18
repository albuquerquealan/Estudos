var frase;

carregaFrase = function (callback) {
  setTimeout(function() {
    //Simula leitura da frase no banco de dados.
    frase = "Minha frase obstrutiva";
    callback();
  }, 1500)
}

imprimeFrase = function () {
  console.log(frase);
}

carregaFrase(imprimeFrase);

console.log("Olá");