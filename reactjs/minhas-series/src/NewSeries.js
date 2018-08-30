import React, {Component} from 'react';


import api from './Api';


const statuses ={
    "watched":"Já assisti",
    "watching":"Assistindo",
    "toWatch":"Assistir"
}
class NewSeries extends Component{
    constructor(props) {
        super(props)
        this.state = {
            genres: [],
            isLoading: false
        }
    }
    componentDidMount() {
        this.setState({
          isLoading: true //defino que estou carregando os dados
        })
        api.loadGenres().then((res) => { //carrego a api. Como é assincrono o then só acontecem quando 
          this.setState({  //os dados terminam de ser carregados 
            isLoading: false,
            genres: res.data
          })
        })
      }
    saveSeries(){

    }
    render(){
        return (
            <section className="intro-section">
                <h1>Adicione uma Nova série !</h1>
                <form>
                    Nome: <input type="text"className="form-control" /><br />
                    Status:&nbsp;
                    <select>
                        {
                            Object
                            .keys(statuses)//peguei as chaves desse objeto
                            .map( //pra cada valor do objeto 'statuses' realiza uma arrow function que retorna um option preenchido 
                                key=> <option key={key} value={key}>{statuses[key]}</option>//pra cada valo executa function q retorna opton
                            )
                        }
                    </select><br/> <br />
                    Genero:&nbsp;
                    <select>
                        {
                            this.state.genres
                            .map( //cada item dentro do genero executa a arrow function
                                key=> <option key={key} value={key}>{key}</option>//pra cada valo executa function q retorna opton
                            )
                        }
                    </select><br/> <br />
                    Comentário: <textarea className="form-control" ></textarea><br />
                    <button onClick>Salvar Série</button>
                </form>

            </section>
        )
    }
}

export default NewSeries