import React, { memo, useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseMemo = (props) => {

    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)

    const sum = (a, b) => {
    // Nas proximas duas linhas eu vou simular uma espera antes do return, como se o programa estivesse lento. 
        const future = Date.now() + 2000 //2 segundos
        while(Date.now() < future) {}
        
        return a + b
    }

//----------------------- Resolvendo normalmente apenas executando a função -------------------------//

    //const result = sum(n1, n2)

    // O que esta acontecendo? Quando eu dei o tempo de espera na função sum que só envolve o n1 e o n2,
    // mesmo assim se eu quiser mudar o n3, ele vai demorar os mesmo 2 segundos pq a função esta atrasando
    // todo o processamento. Existem duas opções: criar um estado para o result e condicionar ele no useEffect,
    // ou utilizar o useMemo(função, array de dependencias)

//------------------------------- Resolvendo com useState e useEffect ------------------------------//
/*
    const [result, setResult] = useState(0)

    useEffect(() => {
        setResult(sum(n1, n2))
    }, [n1, n2])
*/
//------------------------------------ Resolvendo com useMemo  ------------------------------------//

    const result = useMemo(() => sum(n1, n2), [n1, n2])


    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />

            <div className="center">
                <input type="number" className="input" value={n1} onChange={e => setN1(parseInt(e.target.value))}/>
                <input type="number" className="input" value={n2} onChange={e => setN2(parseInt(e.target.value))}/>
                <input type="number" className="input" value={n3} onChange={e => setN3(parseInt(e.target.value))}/>
                <span className="text">{result}</span>
            </div>
        </div>
    )
}

export default memo(UseMemo) 
