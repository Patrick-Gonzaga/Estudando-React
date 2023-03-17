import React from "react";
import './App.css'

import Card from "./Layout/Card";
import Compzin from "./components/Basicos/Component1";
import Aluno from "./components/Basicos/Aluno";
import MinMax from "./components/Basicos/MinMax";

export default (props) => {
  return (
    <div id="App">
      <h1 className="Title-App">FUNDAMENTOS REACT</h1>
      <div className="Container-App">
        <Card title="MinMax">
          <MinMax min={0} max={10} />
        </Card>

        <Card title="Exercício Aluno">
          <Aluno aluno="Patrick" nota={9.8} />
        </Card>
        <Card title="Primeiro Componente">
          <Compzin />
        </Card>
      </div>
    </div>
  );
};
