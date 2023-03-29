import React from "react";

export default props =>{
    
    return(
        <div>
            {props.number.map((num, index) =>{
                return num % 2 === 0 ? <span key={index}>PAR<hr /></span> :
                <span key={index}>ÍMPAR<hr /></span>
            })}
            
        </div>
    )
}