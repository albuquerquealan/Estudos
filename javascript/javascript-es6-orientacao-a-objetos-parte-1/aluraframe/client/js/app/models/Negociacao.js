class Negociacao { //o nome da classe pode ter nome diferente do arquivo js

    constructor(data, quantidade, valor){
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); //impede de alterar os valores da classe 

    }
    /**
     * criando uma propriedade getter de acesso à leitura. E mesmo sendo um método, poderemos acessá-lo como uma propriedade. Mas, debaixo dos panos, 
     * ele continuará sendo executado como um método.
     */
    get volume() {

        return this._quantidade * this._valor;
    
    }
    
    get data() {
        return new Date(this._data.getTime());
    }
    
    get quantidade() {
        return this._quantidade;
    }
    
    get valor() {
        return this._valor;
    }
}