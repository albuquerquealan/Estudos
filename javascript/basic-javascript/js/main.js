var btnAdicionar = document.querySelector("#btnCadastro");

btnAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");//obtém os dados do formulario

    var paciente = getPaciente(form);
    var valida = validaDados(form);

    if (valida != 0) {
        adicionaNaTabela(paciente);
        form.reset();
    }


})

function adicionaNaTabela(paciente) {

    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-paciente");

    tabela.appendChild(pacienteTr);//tornar a tabela gerada "filha" da tabela principal

}
function validaDados(frm) {

    if (!isNaN(frm.nome.value) || frm.nome.value == "") {
        alert("Escreva um nome valido")
        document.getElementById("nome").focus();
        return 0;
    }


    if (frm.peso.value <= 0 || frm.peso.value > 300 || isNaN(frm.peso.value)) {
        alert("Escreva um peso valido entre 0 kg e 300 kg")
        document.getElementById("peso").focus();
        return 0;

    }
    if (frm.altura.value <= 0.7 || frm.altura.value >= 3.0 || isNaN(frm.altura.value)) {
        alert("Escreva uma altura valida entre 0.70 cm e 3.00 m")
        document.getElementById("altura").focus();
        return 0;

    }

}
function getPaciente(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)

    }
    return paciente;
}
function montaTr(paciente) {
    var tr = document.createElement("tr");

    tr.classList.add("paciente");

    tr.appendChild(montaTd(paciente.nome, "info-nome"));
    tr.appendChild(montaTd(paciente.peso, "info-peso"));
    tr.appendChild(montaTd(paciente.altura, "info-altura"));
    tr.appendChild(montaTd(paciente.imc, "info-imc"));

    return tr;



}
function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado; //TextContent adiciona um valor ao campo, caso o dado recebido na função

    return td;
}