import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router } from  'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import { DataContext } from '../data/dataContext'
import { data } from '../data/dataContext'

const App = props => {

    // Ao inves de passar no Provider o value={data} eu criei um state e vou passar o state e setState pq
    // eu vou querer mudar o data futuramente em outro componente.
    const [state, setState] = useState(data)

    return (
        <DataContext.Provider value={{state, setState}}>
            <div className="App">
                <Router>
                    <Menu />
                    <Content />
                </Router>
            </div>
        </DataContext.Provider>
    )
}

export default App