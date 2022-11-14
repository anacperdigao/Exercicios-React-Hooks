import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store/config'
import { adicionar2, multiplicaPor7, dividePor25, adicionaN, reseta, login } from '../../store/actions/number'



const UseReducer = (props) => {

//------------------------------------------ Exercício 01 --------------------------------------------//

    // Aqui criei varios ESTADOS INICIAIS ficticios que nao vou usar todos, como se fosse um carrinho de compra.
    // Tudo isso vai ser controlado pelo useReducer.

    // const initialState = {
    //     carrinho: [],
    //     produtos: [],
    //     user: null,
    //     number: 0
    // }

    // Essa função vai receber dois parâmetros: o estado ATUAL e uma ACTION.
    // A partir de uma ação eu vou saber como alterar o estado da minha aplicação pra nova versão do estado.
    // Toda ação tem um tipo, toda ação tem um nome dela. E a partir desse tipo eu vou saber como alterar o estado.
    // Vale perceber que action é um objeto, portanto na hora de chamar a função no onClick, preciso colocar chaves.
    // Payload é todo atributo que eu quiser incluir e que nao estava no estado inicial.

    // const reducer = (state, action) => {
    //     switch(action.type){
    //         case 'adicionar2': 
    //             return {...state, number: state.number + 2}

    //         case 'multiplicaPor7':
    //             return {...state, number: state.number * 7}

    //         case 'dividePor25':
    //             return {...state, number: parseInt(state.number / 25)}

    //         case 'adicionaN':
    //             return {...state, number: state.number + action.payload }

    //         case 'reseta':
    //             return {...state, number: 0}

    //         case 'login':
    //             return {...state, user: { name: action.payload }}

    //         default:
    //             return state
    //     }
    // }

    // Agora vou usar o useReducer de fato, e dentro dele preciso passar dois parâmetros:
    // a função que vai evoluir os estados e também o estado inicial.
    // A constante dispatch vai servir para executar a ação nos eventos que eu precisar fazer como onClick.
    
    const [state, dispatch] = useReducer(reducer, initialState)


//------------------------------------------ Exercício 02 --------------------------------------------//
// Nesse exercício eu vou mais lidar com a organização dos elementos, e primeiro eu vou criar um pasta store
// e dentro dela vou criar o config.js e lá vou isolar algumas coisas.
// Eu retirei daqui o initialState e o reducer pra poder separar melhor.
// Inclusive vou substituir toda a div dos eventos onClick pq eu to usando as funções em outro arquivo.
// A vantagem de usar as ações em outro arquivo é que elas podem ser mais complexas sem poluir o código aqui.


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
{/* 
                <div>
                    <button className="btn" onClick={() => dispatch({type: 'login', payload: 'Maria'})}>Login</button>
                    <button className="btn" onClick={() => dispatch({type: 'adicionar2'})}>+2</button>
                    <button className="btn" onClick={() => dispatch({type: 'multiplicaPor7'})}>x7</button>
                    <button className="btn" onClick={() => dispatch({type: 'dividePor25'})}>/25</button>
                    <button className="btn" onClick={() => dispatch({type: 'adicionaN', payload: 5})}>Add 5</button>
                    <button className="btn" onClick={() => dispatch({type: 'reseta'})}>Resetar</button>
                </div> */}

                <div>
                    <button className="btn" onClick={() => login(dispatch, 'Maria')}>Login</button>
                    <button className="btn" onClick={() => adicionar2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => multiplicaPor7(dispatch)}>x7</button>
                    <button className="btn" onClick={() => dividePor25(dispatch)}>/25</button>
                    <button className="btn" onClick={() => adicionaN(dispatch, 5)}>Add 5</button>
                    <button className="btn" onClick={() => reseta(dispatch)}>Resetar</button>
                </div>

            </div>
        </div>
    )
}

export default UseReducer
