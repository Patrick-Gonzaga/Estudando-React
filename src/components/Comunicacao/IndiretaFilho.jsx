import React from "react";

export default props =>{
    let idade = Math.ceil(20 + Math.random()*(70-20))
    let nerd = Math.random() > 0.5 ? 'true' : 'false'

    
    
    return(
        <div>
            <button onClick={_ => props.cb('Patrick', idade, nerd)}> Render </button>
        </div>
    )
}