import gerarNum from "./gerarNum";
import React, { useState } from "react";

export default (props) => {
  const [num, setNum] = useState(0);
  const [arr, setArr] = useState([]);

  function setarArr(qtd) {
    console.log(qtd)
    if (!(Number.isInteger(qtd))) {
        setArr("Apenas valores numericos :D");
        console.log(typeof qtd)
    } else if (qtd > 100) {
        setArr("Apenas valor igual ou menor que 100");
        console.log(qtd)
    } else if (qtd <= 100) {
            setArr(gerarNum(qtd));
            console.log(qtd)
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        alignItems: "center",
      }}
    >
      <div className="container-numeros">
        {Array.isArray(arr) ? arr.join(" - ") : arr}
      </div>
      <h2>Quantidade de Números</h2>
      <input
        placeholder="qtd. de números"
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={(_) => setarArr(parseFloat(num))}>Gerar</button>
    </div>
  );
};
