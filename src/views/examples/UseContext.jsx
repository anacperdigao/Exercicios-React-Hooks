import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { DataContext } from '../../data/dataContext'
import { StoreContext } from '../../data/Store'


const UseContext = (props) => {

//------------------------------------------- Exercício 1 --------------------------------------//

// Criei o contexto dentro da pasta data e depois eu carreguei o DataContext.Provider no index.js principal.
    const context = useContext(DataContext)

// Como eu coloquei o data dentro de um state, agora eu posso alterar ele.
    const mudaStateNumber = (n) => {
        context.setState({
            ...context.state, //Aqui eu digo pra trazer todo o state anterior e depois eu mudo o que eu quiser
            number: context.state.number + n // Aqui vou sobrescrever o unico atributo que eu quero mudar
        })
    }

//------------------------------------------- Exercício 2 --------------------------------------//

    const {number, setNumber, text, setText} = useContext(StoreContext)

    useEffect(() => {
        if(number > 1250){
            setText('Eita!!')
        }
    }, [number])

//---------------------------------------------------------------------------------------------//    

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title='Exercício #01' />
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>
                <div>
                    <button className="btn" onClick={() => mudaStateNumber(-1)}>-1</button>
                    <button className="btn" onClick={() => mudaStateNumber(1)}>+1</button>
                </div>
            </div>

            <SectionTitle title='Exercício #02' />
                <div className="center">
                    <span className="text">{text}</span>
                    <span className="text">{number}</span>
                    <div>
                        <button className="btn" onClick={() => setNumber(number - 1)} >-1</button>
                        <button className="btn" onClick={() => setNumber(number + 1)}>+1</button>
                    </div>
                </div>

        </div>
    )
}

export default UseContext
