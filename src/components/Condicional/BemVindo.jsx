import React from "react";
import If, {Else} from "./If";

export default props =>{
    const user = props.usuario || {}
    return(
        <div>
            <If teste={user && user.nome}>
                Bem Vindo <strong>{user.nome}</strong>!
                <Else>
                    Bem Vindo <strong>ARROMBADO</strong>!
                </Else>
            </If>
       </div>     
    )
}