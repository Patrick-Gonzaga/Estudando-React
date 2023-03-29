import React from "react";
import "./App.css";

import Mega from "./components/DESAFIOS/mega/Mega";
import Input from "./components/Formulário/Input";
import IndiretaPai from "./components/Comunicacao/IndiretaPai";
import BemVindo from "./components/Condicional/BemVindo";
import ParOuImpar from "./components/Condicional/ParOuImpar";
import Sales from "./components/Repeticao/Sales";
import ListaAlunos from "./components/Repeticao/ListaAlunos";
import MembroFamilia from "./components/Basicos/MembroFamilia";
import Familia from "./components/Basicos/Familia";
import Card from "./Layout/Card";
import Compzin from "./components/Basicos/Component1";
import Aluno from "./components/Basicos/Aluno";
import MinMax from "./components/Basicos/MinMax";

export default (props) => {
  return (
    <div id="App">
      <h1 className="Title-App">FUNDAMENTOS REACT</h1>
      <div className="Container-App">
        <Card title='DESAFIO (Mega)' color='#8D8BD4'>
          <Mega></Mega>
        </Card>

        <Card title='Formulários (Input)' color='#4B5359'>
          <Input/>
        </Card>

        <Card title="Comunicação Indireta" color="#023550">
          <IndiretaPai></IndiretaPai>
        </Card>

        <Card title="Par ou Ímpar" color="#C85EE7">
          <ParOuImpar number={[5, 4, 23]} />
          <BemVindo usuario={{ nome: "Patrick" }} />
          <BemVindo />
        </Card>

        <Card title="Sales" color="#F91659">
          <Sales />
        </Card>

        <Card title="Lista Alunos" color="#0004A2">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card title="Família">
          <Familia sobrenome="Gonzaga">
            <MembroFamilia nome="Patrick" />
            <MembroFamilia nome="Pablo" />
            <MembroFamilia nome="Peter" />
          </Familia>
        </Card>

        <Card title="MinMax" color="#B13978">
          <MinMax min={0} max={10} />
        </Card>

        <Card title="Exercício Aluno" color="#F59C62">
          <Aluno aluno="Patrick" nota={9.8} />
        </Card>

        <Card title="Primeiro Componente" color="#C8F481">
          <Compzin />
        </Card>
      </div>
    </div>
  );
};
