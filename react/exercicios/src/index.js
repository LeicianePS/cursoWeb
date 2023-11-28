import React from 'react'
import ReactDOM from 'react-dom'

//import {BoaTarde, BoaNoite} from './compomentes/Multiplos.jsx'
import Multi, { BoaNoite } from './compomentes/Multiplos.jsx'
import Saudacao  from './compomentes/Saudacao.jsx'

import Pai from './compomentes/Pai.jsx';
import Filho from './compomentes/Filho.jsx';

//ReactDOM.render(<h1>React</h1>, document.getElementById('root'))
//const elemento = <h1>React 2</h1>
//ReactDOM.render(elemento, document.getElementById('root'))

ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Ana"/> 
        <BoaNoite nome="Bia"/>
        <div> 
            <Saudacao tipo="Bom dia" nome="Rita"/>
        </div>

        <div>
            <Pai nome="Paulo" sobrenome="Silva" >
                <Filho nome="Pedro" />
                <Filho nome="Paulo" />
                <Filho nome="Carla" />
            </Pai>
        </div>
    </div>
, document.getElementById('root'))