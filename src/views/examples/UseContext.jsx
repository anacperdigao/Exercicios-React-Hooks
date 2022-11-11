import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { DataContext } from '../../data/dataContext'


const UseContext = (props) => {

// Criei o contexto dentro da pasta data e depois eu carreguei o DataContext.Provider no index.js principal.
    const context = useContext(DataContext)

// Como eu coloquei o data dentro de um state, agora eu posso alterar ele.
    const mudaStateNumber = (n) => {
        context.setState({
            ...context.state, //Aqui eu digo pra trazer todo o state anterior e depois eu mudo o que eu quiser
            number: context.state.number + n // Aqui vou sobrescrever o unico atributo que eu quero mudar
        })
    }


    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <div className="center">
                <span className="text">{context.state.number}</span>
                <span className="text">{context.state.text}</span>
                <div>
                    <button className="btn" onClick={() => mudaStateNumber(-1)}>-1</button>
                    <button className="btn" onClick={() => mudaStateNumber(1)}>+1</button>
                </div>
            </div>

        </div>
    )
}

export default UseContext
