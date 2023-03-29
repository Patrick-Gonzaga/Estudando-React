import React, {useState} from "react";
import IndiretaFilho from './IndiretaFilho'

export default props =>{
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState('?')
    const [nerd, setNerd] = useState('?')
    const getInfos = (nome,idade,nerd)=>{
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }
    return(
        <>
        <span>{nome} </span>
        <span>{idade} </span>
        <span>{nerd} </span>
            <IndiretaFilho cb={getInfos}></IndiretaFilho>
        </>
    )
}