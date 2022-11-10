import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


const UseState = (props) => {

    //------------------------ estado do exercicio 1 -------------------------//
    const [count, setCount] = useState(0)

    // const handleDiminui = () => {
    //     setCount(count - 1)
    // }

    // const handleAdiciona = () => {
    //     setCount(count + 1)
    // }


    //------------------------ estado do exercicio 2 -------------------------//
    const [name, setName] =useState('Inicial...')

    // const handleChange = (evento) => {
    //     setNome(evento.target.value)
    // }

    return (

        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button onClick={() => setCount(count - 1)} className="btn">-1</button>
                    <button onClick={() => setCount(count + 1)} className="btn">+1</button>
                    <button onClick={() => setCount(valorAtualSetCount => valorAtualSetCount + 100)} className="btn">+100</button>
                    <button onClick={() => setCount(0)} className="btn">Zerar</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02" />
            <input 
            type="text" 
            className="input" 
            value={name} 
            onChange={(evento) => setName(evento.target.value)} 
            />
            <span className="text">{name}</span>

        </div>
    )
}

export default UseState
