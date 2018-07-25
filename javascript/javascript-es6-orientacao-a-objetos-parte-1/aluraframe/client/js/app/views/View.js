 class View {
    constructor (elemento){
        this._elemento = elemento;
    }
    template(){
        throw new Error('O método template deve ser implementado');
    }

    update(model) {
        this._elemento.innerHTML = this.template(model); //função innerhtml converte a string de retorno
        // em elementos do dom se a marcação estiver correta   
    }

}