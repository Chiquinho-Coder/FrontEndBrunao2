// ServicosInicial.jsx
import img_servico from "../assets/images/img_servico.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ServicosInicial.scss";

function ServicosInicial() {
  const [servicos, setServicos] = useState([]);
  const API_URL = "http://20.83.237.168:3010";

  const consultarServicos = async () => {
    try {
      const response = await axios.get(`${API_URL}/consultar-servico`);
      setServicos(response.data);
    } catch (error) {
      console.error("Erro ao buscar serviços:", error);
    }
  };

  useEffect(() => {
    consultarServicos();
  }, []);

  return (
    <div className="servicos-inicial">
      <div className="div_fots">
        <img
          className="img"
          src={img_servico}
          style={{ paddingLeft: 80, width: 276, height: 211, flexShrink: 0 }}
          alt=""
        />
        <h1>Serviços</h1>
      </div>
      <div className="servicos-container">
        <div className="servicos-buttons">
          <Link to="/cadastrar-servico">
            <button className="btn_cadastrar_excluir">Cadastrar</button>
          </Link>
          <Link to="/excluir-servico">
            <button className="btn_cadastrar_excluir">Excluir</button>
          </Link>
          <Link to="/consultar-servico">
            <button className="btn_consultar_alterar">Consultar</button>
          </Link>
          <Link to="/alterar-servico">
            <button className="btn_consultar_alterar">Alterar</button>
          </Link>
          <Link to="/pre-tabela">
            <button className="btn_retornar_menu">Retornar ao Menu</button>
          </Link>
        </div>
        <div className="servicos-lista">
          <h2>Serviços Cadastrados:</h2>
          <ul>
            {servicos.map((servico) => (
              <li key={servico.id}>
                ID Serviço: {servico.id_servico} - ID Cliente:{" "}
                {servico.fk_id_cli} - Endereço: {servico.ds_endereco} - Valor:
                R${servico.vlr_servico} - Data :{" "}
                {new Date(servico.dt_estimada).toLocaleDateString("pt-BR")} -
                Descrição: {servico.ds_servico}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServicosInicial;
