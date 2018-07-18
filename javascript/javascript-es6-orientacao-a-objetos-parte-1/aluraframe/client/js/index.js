var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function (event) {

    event.preventDefault();

    var tr = document.createElement('tr'); // cria um novo elemento no DOM 
    campos.forEach(function (campo) {
        var td = document.createElement('td');
        td.textContent = campo.value; //Adiciona o valor da TD com o mesmo valor do array campo
        tr.appendChild(td);//torna TD filho de TR no DOM 
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);
    //limpar os campos 
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus(); //focar no primeiro campo do form 


});