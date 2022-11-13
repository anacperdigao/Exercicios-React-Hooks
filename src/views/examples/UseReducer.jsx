import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseReducer = (props) => {

    // Aqui criei varios ESTADOS INICIAIS ficticios que nao vou usar todos, como se fosse um carrinho de compra.
    // Tudo isso vai ser controlado pelo useReducer.
    const initialState = {
        carrinho: [],
        produtos: [],
        user: null,
        number: 0
    }

    // Essa função vai receber dois parâmetros: o estado ATUAL e uma ACTION.
    // A partir de uma ação eu vou saber como alterar o estado da minha aplicação pra nova versão do estado.
    // Toda ação tem um tipo, toda ação tem um nome dela. E a partir desse tipo eu vou saber como alterar o estado.
    // Vale perceber que action é um objeto, portanto na hora de chamar a função no onClick, preciso colocar chaves.
    // Payload é todo atributo que eu quiser incluir e que nao estava no estado inicial.
    const reducer = (state, action) => {
        switch(action.type){
            case 'adicionar2': 
                return {...state, number: state.number + 2}

            case 'MultiplicaPor7':
                return {...state, number: state.number * 7}

            case 'dividePor25':
                return {...state, number: parseInt(state.number / 25)}

            case 'adicionaN':
                return {...state, number: state.number + action.payload }

            case 'reseta':
                return {...state, number: 0}

            case 'login':
                return {...state, user: { name: action.payload }}

            default:
                return state
        }
    }

    // Agora vou usar o useReducer de fato, e dentro dele preciso passar dois parâmetros:
    // a função que vai evoluir os estados e também o estado inicial.
    // A constante dispatch vai servir para executar a ação nos eventos que eu precisar fazer como onClick.
    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">

                {state.user
                ? <span className="text">{state.user.name}</span>
                : <span className="text">Sem usuário</span>
                }

                <span className="text">{state.number}</span>

                <div>
                    <button className="btn" onClick={() => dispatch({type: 'login', payload: 'Maria'})}>Login</button>
                    <button className="btn" onClick={() => dispatch({type: 'adicionar2'})}>+2</button>
                    <button className="btn" onClick={() => dispatch({type: 'MultiplicaPor7'})}>x7</button>
                    <button className="btn" onClick={() => dispatch({type: 'dividePor25'})}>/25</button>
                    <button className="btn" onClick={() => dispatch({type: 'adicionaN', payload: 5})}>Add 5</button>
                    <button className="btn" onClick={() => dispatch({type: 'reseta'})}>Resetar</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
