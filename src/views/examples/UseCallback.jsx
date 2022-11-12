import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons'

const UseCallback = (props) => {

    const [count, setCount] = useState(0)

    // const addValue = (number) => {
    //     setCount(count + number)
    // }

    // const resetValue = () => {
    //     setCount(0)
    // }

    // Até aqui Ok, o que vou fazer é tirar toda a div de botoes e criar um novo componente: UseCallbackButtons
    // Vamos ao raciocínio: Esse componente aqui UseCallback renderiza toda vez que o estado count mudar,
    // e isso ta Ok, isso ta certo. Mas o componente novo que eu criei UseCallbackButtons nao tem estado,
    // então tecnicamente não tem porque ele renderizar toda vez que esse componente pai mudar o estado.
    // Eu tentei la no componente UseCallbackButtons usar o memo() na hora de exportar, mas nao funcionou.
    // Não funcionou porque la eu recebo uma função (addValue e resetValue) como props, e elas acabam forçando
    // a renderização daquele componente também. E é aí que entra o hook useCallback.

//--------------------------- Refazendo as funções com useCallback ----------------------------//

    const addValue = useCallback((number) => {
        //setCount(count + number)   ----> Seria assim o normal
        setCount(retornoDoSetCount => retornoDoSetCount + number)
    }, [setCount])

    const resetValue = useCallback(() => {
        setCount(0)
    }, [setCount])

// Vale lembrar que a função setCount me gera um retorno que é o valor atual armazenado no estado,
// então eu posso usar esse retorno para fazer uma função de callback dentro do setCount sem ter que usar o count,
// isso porque eu preciso que nesse caso a dependencia seja uma função, pq a função só renderiza no inicio.
// Se eu colocasse [count] como dependencia, de nada iria adiantar o useCallback,
// ENTÃO PRESTAR ATENÇÃO NA LISTA DE DEPENDENCIAS PORQUE FAZ DIFERENÇA.
// MAIS UM DETALHE!!!! Antes ter o memo no componente UseCallbackButtons não fazia diferença, MAS AGORA FAZ!!
// Eu preciso usar o useCallback E TAMBEM USAR O MEMO() no outro componente. GRATA.


    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className="center">
                <span className="text">{count}</span>

                <UseCallbackButtons addValue={addValue} resetValue={resetValue}/>

                {/* <div>
                    <button className="btn" onClick={() => addValue(6)}>+6</button>
                    <button className="btn" onClick={() => addValue(12)}>+12</button>
                    <button className="btn" onClick={() => addValue(18)}>+18</button>
                    <button className="btn" onClick={() => resetValue()}>Reset</button>
                </div> */}

            </div>
        </div>
    )
}

export default UseCallback
