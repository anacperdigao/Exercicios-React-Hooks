import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import useCounter from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'

const UseRef = (props) => {

//------------------------------------------- Exercício 01 ---------------------------------------------//
// Começo criando a pasta hooks, e vou usar o arquivo useCounter
    
    const [count, incremento, decremento] = useCounter()

//------------------------------------------- Exercício 02 ---------------------------------------------//

    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    const respostaFetch = useFetch(url)
    
    const mostrarEstados = (estados) => {
        return estados.map(estado => 
            <li key={estado.nome} style={{listStyle: 'none', display: 'flex', marginLeft: '20px'}}>
                {estado.nome} - {estado.sigla}
            </li>)
    }

//-----------------------------------------------------------------------------------------------------//


    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => decremento()}>-1</button>
                    <button className="btn" onClick={() => incremento()}>+1</button>
                </div>
            </div>

            <SectionTitle title='Exercício #02' />
            <div className="center">
                <ul style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
                    {respostaFetch.data && mostrarEstados(respostaFetch.data)}
                </ul>
            </div>

        </div>
    )
}

export default UseRef
