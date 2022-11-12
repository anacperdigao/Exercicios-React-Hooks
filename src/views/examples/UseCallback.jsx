import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseCallback = (props) => {

    const [count, setCount] = useState(0)

    const addValue = (number) => {
        setCount(count + number)
    }

    const resetValue = () => {
        setCount(0)
    }

    // Até aqui Ok, o que eu vou fazer é tirar toda a div de botoes e criar um novo componente chamado:
    // UseCallbackButtons

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => addValue(6)}>+6</button>
                    <button className="btn" onClick={() => addValue(12)}>+12</button>
                    <button className="btn" onClick={() => addValue(18)}>+18</button>
                    <button className="btn" onClick={() => resetValue()}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default UseCallback
