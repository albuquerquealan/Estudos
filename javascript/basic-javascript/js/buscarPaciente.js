var botaoAdicionar = document.querySelector("#btnAdiciona");

botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        if (xhr.status == 200){
            var resposta = xhr.responseText;

        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente) {
            adicionaNaTabela(paciente);
        });
        }else {
            alert("Erro " + xhr.status + " ao buscar dados." );
        }
        
    });

    xhr.send();
});