import { useState } from 'react'

// Esse 100 é um valor padrão, ou seja, se nao exitir um outro initialValue, ele vai setar como 100
// Dentro de um hook personalizado eu posso criar quantas funções eu quiser pra utilizar em outro lugar depois

const useCounter = (initialValue = 100) => {

    const [count, setCount] = useState(initialValue)

    const incremento = () => {
        setCount(count + 1)
    }

    const decremento = () => {
        setCount(count - 1)
    }
  
    return [count, incremento, decremento]
}

export default useCounter