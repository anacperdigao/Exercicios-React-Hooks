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
        myInput2.current.focus() //Toda vez que eu digitar, vai focar no outro input
    }, [valor1])


//------------------------------ Exercicio 2 --------------------------------------//
    const [valor2, setValor2] = useState("")

    useEffect(() => {
        count.current = count.current + 1
        myInput1.current.focus() //Toda vez que eu digitar, vai focar no outro input
    }, [valor2])


// ---------------------------- Extras + Desafio ----------------------------------------//
// Existe uma forma de voce usar o useRef para pegar um elemento do html, 
// usando a propriedade ref, que eu vou usar nos dois inputs.
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)
    console.log(myInput1.current)
    console.log(myInput2.current)

    const mesclar = (num1, num2) => {
        return [...num1, num2]
    }


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
                    <span className="text">{mesclar(valor1, valor2)}[</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>

                <input 
                    type="text" 
                    className="input" 
                    value={valor1} 
                    onChange={e => setValor1(e.target.value)}
                    ref={myInput1}
                />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input 
                    type="text" 
                    className="input" 
                    value={valor2}
                    onChange={e => setValor2(e.target.value)}
                    ref={myInput2}
                />
            </div>


        </div>
    )
}

export default UseRef
