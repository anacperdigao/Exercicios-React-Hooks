import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


const UseEffect = (props) => {

//------------------------ Exercicio 01 --------------------------//
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    const calcFatorial = (numero) => {
        if(numero < 0) return -1
        if(numero == 0) return 1
        return calcFatorial(numero - 1) * numero
    } 

    useEffect(() => {
        setFatorial(calcFatorial(number))
        setStatus(number % 2 === 0 ? "Par" : "Ímpar") // Coloquei a mudança do status no mesmo useEffect
    }, [number])
    
//------------------------ Exercicio 02 --------------------------//

    const [status, setStatus] = useState('Ímpar')

    // useEffect(() => {
    //     setStatus(number % 2 === 0 ? "Par" : "Ímpar")
    // }, [number])

//---------------------------------------------------------------//   

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>
                <input 
                    type="number" 
                    className="input" 
                    value={number} 
                    onChange={(e) => setNumber(e.target.value)} 
                />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
            </div>

        </div>
    )
}

export default UseEffect
