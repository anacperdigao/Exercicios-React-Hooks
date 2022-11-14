import { useEffect, useState } from "react"

// URL: http://files.cod3r.com.br/curso-react/estados.json
// o método poderia ser post, delete, mas vou colocar por padrão o get
// vou usar o useEffect pra chamar o fetch pq ele causa um efeito colateral no meu state.
// Eu não precisaria do loading ali, só coloquei pra dizer que quando a requisição começa, o loading é true,
// e quando a requisição terminar, o loading acabou também e portanto é false.


const useFetch = (url, metodo = 'get') => {

    const [respostaFetch, setRespostaFetch] = useState({
        data: null,
        loading: true
    })


    useEffect(() => {
        fetch(url, {metodo: metodo})
            .then(resp => resp.json())
            .then(json => setRespostaFetch({
                data: json,
                loading: false
            }))

    },[url, metodo])


    return respostaFetch
}

export default useFetch