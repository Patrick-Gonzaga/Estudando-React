import React from "react";

export default (props) => {
  const status = props.nota >= 7 ? "Aprovado" : "Reprovado";
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        Aluno: {props.aluno} | Nota: {props.nota} | Status: {status}
      </p>
    </div>
  );
};
