class DateHelper {

    constructor() {
        throw new Error('Esta classe não pode ser instanciada !!!!');
    }

    static texToDate(text) {
        
        //expressão regular d de qualquer digito de tamanho 4 com traço como separador.
        if (!/\d{4}-\d{2}-\d{2}/.test(text))
            throw new Error('Deve estar no formato aaaa-mm-dd');
        
        // apenas uma instrução, não precisa por return, faz implícito. 
        return new Date(...text.split('-').map((item, indice) => item - indice % 2));
        //indece % 2 só aplica a decreção no item que tiver resultado 1 na soma.
        //arrow function, não precisa escrever function e se há

    }


    static DateToTex(date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`; //template String
    }
}