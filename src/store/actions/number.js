// Vou trazer pra cá as ações que eu quero gerar em cima dos números do initialState.
// Então eu criei esse arquivo para mexer com tudo relativo a propriedade number, mas poderia criar outros arquivos
// para cada propriedade desse objeto.

// export const initialState = {
//     carrinho: [],
//     produtos: [],
//     user: null,
//     number: 0
// }

// Agora vamos lá, cada onClick recebeu uma função que dispara ações e eu vou trazer todas elas para cá:

export const adicionar2 = (dispatch) => {
    dispatch({ type: 'adicionar2' })
}

export const multiplicaPor7 = (dispatch) => {
    dispatch({ type: 'multiplicaPor7' })
}

export const dividePor25 = (dispatch) => {
    dispatch({ type: 'dividePor25' })
}

export const adicionaN = (dispatch) => {
    dispatch({ type: 'adicionaN', payload: 5 })
}

export const reseta = (dispatch) => {
    dispatch({ type: 'reseta' })
}

export const login = (dispatch, name) => {
    dispatch({ type: 'login', payload: name })
}