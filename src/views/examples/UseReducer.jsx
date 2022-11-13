import React from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseReducer = (props) => {

    // Aqui criei varios estados iniciasi ficticios que nao vou usar todos, como se fosse um carrinho de compra.
    // Tudo isso vai ser controlado pelo useReducer.
    
    const initialState = {
        carrinho: [],
        produtos: [],
        user: null,
        number: 0
    }


    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
        </div>
    )
}

export default UseReducer
