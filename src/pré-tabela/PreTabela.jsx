import React from 'react';
import { Link } from 'react-router-dom';
import './PreTabela.scss'; // Estilos para a página


const PreTabela = () => {
  return (
    <div className="pre-tabela-container">
      <h2>OPÇÕES</h2>
      <div className="options">
        <Link to="/servicos" className="option">Serviços</Link>
        <Link to="/clientes" className="option">Clientes</Link>
      </div>
    </div>
  );
};

export default PreTabela;
