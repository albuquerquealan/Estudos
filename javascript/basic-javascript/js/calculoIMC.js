function calculaIMC(peso, altura) {
    var imc = peso / (altura * altura);
    
    return imc.toFixed(2);
}

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdIMC = paciente.querySelector(".info-imc");

    var imc = calculaIMC(peso, altura);
    tdIMC.textContent = imc;
}