class NegociacoesView {

    constructor(elemento) {

        this._elemento = elemento;
    }

    _template(model) { //template string
        return `<table class="table table-hover table-bordered"> 
                <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                    ${model.negociacoes.map(n => `
                          <tr>
                              <td>${DateHelper.DateToTex(n.data)}</td>
                              <td>${n.quantidade}</td>
                              <td>${n.valor}</td>
                              <td>${n.volume}</td>
                          </tr>
                        `).join('')}
                    </tbody>
                    
                    <tfoot>
                        <td colspan="3"></td> 
                        
                        <td>${model.negociacoes.reduce((total, n)=> total + n.volume, 0.0)}</td>
                            
                    </tfoot>
                </table> `;
    }
    update(model) {
        this._elemento.innerHTML = this._template(model); //função innerhtml converte a string de retorno
        // em elementos do dom se a marcação estiver correta   
    }


}
//${model.negociacoes.reduce(function(total, n) {return total + n.volume;}, 0.0)} 