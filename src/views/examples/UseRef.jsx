import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {

//------------------------------ Exercicio 1 ---------------------------------------//
    const [valor1, setValor1] = useState("")
    const count = useRef(0) //COUNT É UM OBJETOOOOOOOO com uma propriedade chamada .current

    // Caso 1 - vou contar toda vez que alguma coisa renderizar//
    // count.current = count.current + 1

    // Caso 2 - vou usar o useEffect pra ele contar as renderizações associado a um elemento especifico //
    useEffect(() => {
        count.current = count.current + 1
    }, [valor1])

//------------------------------ Exercicio 2 --------------------------------------//



    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{valor1}[</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>

                <input 
                    type="text" 
                    className="input" 
                    value={valor1} 
                    onChange={e => setValor1(e.target.value)}
                />
            </div>

        </div>
    )
}

export default UseRef
