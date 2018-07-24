class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);  //  mantém a associação com o document
    this._inputData = $('#data'); //cria algo parecido com um cash da pagina
    this._inputQuantidade = $('#quantidade'); //evita que percorra o DOM em toda requisição
    this._inputValor = $('#valor');
    this._listaNegociacoes = new ListaNegociacoes();
    this._negociacoesView = new NegociacoesView($("#negociacoesView"));
    this._negociacoesView.update();

  }
  adiciona(event) {
    event.preventDefault();

    this._listaNegociacoes.adiciona(this._criaNegociacao());

    this._limpaformulário();

    

  }

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.texToDate(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }



  _limpaformulário() {
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0

    this._inputData.focus();

  }
}