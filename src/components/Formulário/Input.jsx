import './Input.css'
import React, {useState} from 'react'

export default props =>{
    const [valor, setValor] = useState('?')
    return(
        <div>
            <h1>{valor}</h1>
            <input value={valor} onChange={e => setValor(e.target.value)}/>
        </div>
    )
}