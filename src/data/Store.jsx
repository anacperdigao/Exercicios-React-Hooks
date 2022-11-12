import React, { createContext, useState } from 'react'


const initialState = {
    number: 1234,
    text: 'Context API + hooks'
}


export const StoreContext = createContext(initialState)
StoreContext.displayName = 'StoreContext'


const StoreProvider = ({children}) => {

    const [state, setState] = useState(initialState)

    const updateState = (key, value) => {
        setState({
            ...state,
            [key]: value,
        })
    }

// Para que eu criei essa função updateState? Porque eu passo diretamente o [state, setState], eu corro o risco
// de outra pessoa apagar meus dados ou subtituir de forma errada. Com essa função eu protejo meus dados, visto que
// dentro dela eu já copiei o obj completo, e mesmo que a pessoa apague algo errado, nao vai mexer no obj original.
// E é essa função que eu vou compartilhar no Provider, nao vou compartilhar o state original.

    return (
        <StoreContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: (n) => updateState('number', n),
            setText: (n) => updateState('text', n),
        }}>
            {children}
        </StoreContext.Provider>
  )
}

export default StoreProvider