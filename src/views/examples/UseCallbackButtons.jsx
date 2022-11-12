import React, { memo } from "react";


const UseCallbackButtons = ({addValue, resetValue}) => {

    console.log('render...') // Aqui eu vejo todas as vezes que o componente UseCallbackButtons é renderizado

    return (
        <div>
            <button className="btn" onClick={() => addValue(6)}>+6</button>
            <button className="btn" onClick={() => addValue(12)}>+12</button>
            <button className="btn" onClick={() => addValue(18)}>+18</button>
            <button className="btn" onClick={() => resetValue()}>Reset</button>
        </div>
  )
}

// E percebemos que usando o memo ou nao, ele vai continuar renderizando toda vez que clicar no botao
// pq o que esta causando isso são as funções utilizadas aqui, pq elas sim dependem de estado.
export default memo(UseCallbackButtons)