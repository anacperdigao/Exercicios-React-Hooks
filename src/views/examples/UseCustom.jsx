import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import useCounter from '../../hooks/useCounter'

const UseRef = (props) => {

//------------------------------------------- Exercício 01 ---------------------------------------------//
// Começo criando a pasta hooks, e vou usar o arquivo useCounter

    const [count, incremento, decremento] = useCounter()
    
    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle titulo='Exercício #01' />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => decremento()}>-1</button>
                    <button className="btn" onClick={() => incremento()}>+1</button>
                </div>
            </div>

        </div>
    )
}

export default UseRef
