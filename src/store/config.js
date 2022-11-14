
export const initialState = {
    carrinho: [],
    produtos: [],
    user: null,
    number: 0
}

export const reducer = (state, action) => {
    switch(action.type){
        case 'adicionar2': 
            return {...state, number: state.number + 2}

        case 'multiplicaPor7':
            return {...state, number: state.number * 7}

        case 'dividePor25':
            return {...state, number: parseInt(state.number / 25)}

        case 'adicionaN':
            return {...state, number: state.number + action.payload }

        case 'reseta':
            return {...state, number: 0, user: null}

        case 'login':
            return {...state, user: { name: action.payload }}

        default:
            return state
    }
}
