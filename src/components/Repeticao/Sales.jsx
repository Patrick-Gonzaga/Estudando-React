import './sales.css'
import React from "react";
import sales from "../../DATA/sales";

export default (props) => {
  const tabelaBraba = sales.map((item, index) => {
    return (
      <tr key={item.id} className={index % 2 === 0 ? 'Par' : 'Impar'}>
        <td>{item.id}</td>
        <td>{item.nome}</td>
        <td>R$ {item.preco.toFixed(2).replace('.',',')}</td>
      </tr>
    );
  });
  return (
    <div className="Produtos-Table">
      <table>
        <thead>
          <tr>
            <th colSpan={3}> Tabela de Preços</th>
          </tr>
          <tr>
            <th> - ID - </th>
            <th> - NOME - </th>
            <th> - PREÇO - </th>
          </tr>
        </thead>
        <tbody>{tabelaBraba}</tbody>
      </table>
    </div>
  );
};
