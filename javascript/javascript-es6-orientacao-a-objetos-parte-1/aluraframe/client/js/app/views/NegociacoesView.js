class NegociacoesView {
    
    constructor(elemento) {

        this._elemento = elemento;
    }
    _template() { //template string
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
                    </tbody>
                    
                    <tfoot>
                    </tfoot>
                </table> `;
    }
    update(){
        this._elemento.innerHTML = this._template(); //função innerhtml converte a string de retorno
                                                    // em elementos do dom se a marcação estiver correta   
    }


}