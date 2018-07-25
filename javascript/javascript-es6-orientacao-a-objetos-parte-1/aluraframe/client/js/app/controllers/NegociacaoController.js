class NegociacaoController {

  constructor() {

    let $ = document.querySelector.bind(document);  //  mantém a associação com o document
    this._inputData = $('#data'); //cria algo parecido com um cash da pagina
    this._inputQuantidade = $('#quantidade'); //evita que percorra o DOM em toda requisição
    this._inputValor = $('#valor');


    this._listaNegociacoes = new ListaNegociacoes(model =>
      this._negociacoesView.update(this._listaNegociacoes));
    this._negociacoesView = new NegociacoesView($('#negociacoesView'));
    this._negociacoesView.update(this._listaNegociacoes);

    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView($('#mensagemView'));
    this._mensagemView.update(this._mensagem);

  }
  adiciona(event) {
    event.preventDefault();

    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._mensagem.texto = 'Negociação adicionada com sucesso';
    this._mensagemView.update(this._mensagem);

    this._limpaFormulario();
  }

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.texToDate(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }

  apaga() {

    this._listaNegociacoes.esvazia();
    // Linha abaixo comentada, não precisamos mais dela
    // this._negociacoesView.update(this._listaNegociacoes);

    this._mensagem.texto = "Negociações removidas com sucesso";
    this._mensagemView.update(this._mensagem);
  }


  _limpaFormulario() {
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0

    this._inputData.focus();

  }
}