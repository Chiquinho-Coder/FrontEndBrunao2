import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CadastrarCliente.scss";
import img_cliente from "../../../assets/images/img_cliente.png";
import { cadastrarCliente } from "../../../services/APIService";

const CadastrarCliente = () => {
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const [cliente, setCliente] = useState({
    ds_nome: "",
    ds_num_cli: "",
    ds_email_cli: "",
    ds_comentario: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({
      ...cliente,
      [name]: value,
    });
  };

  const handleCadastrar = async (e) => {
    e.preventDefault();
    try {
      const response = await cadastrarCliente(cliente);
      alert("Cliente cadastrado com sucesso!");

      setTimeout(() => setMensagemSucesso(""), 3000);

      setCliente({
        ds_nome: "",
        ds_num_cli: "",
        ds_email_cli: "",
        ds_comentario: "",
      });
    } catch (error) {
      alert("Erro ao cadastrar o Cliente.");
    }
  };

  return (
    <div className="page_container">
      <div className="div_fots">
        <img
          className="img"
          src={img_cliente}
          style={{ width: 276, height: 211, flexShrink: 0 }}
          alt=""
        />
        <h1>Clientes</h1>
      </div>
      <h1>Cadastrar Cliente</h1>
      <Link to="/clientes">
        <svg
          className="svg_seta"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="50"
          viewBox="0 0 82 43"
          fill="none"
        >
          <g filter="url(#filter0_d_60_451)">
            <rect x="19" y="13.1042" width="59" height="13" fill="#F5B91E" />
            <path
              d="M4.11706 18.7931L26.5154 2.62986L26.7178 34.6722L4.11706 18.7931Z"
              fill="#F5B91E"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_60_451"
              x="0.117188"
              y="2.62988"
              width="81.8828"
              height="40.0422"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_60_451"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_60_451"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </Link>
      {mensagemSucesso && <p className="mensagem-sucesso">{mensagemSucesso}</p>}

      <div className="borda_cadastrar">
        <label>Nome</label>
        <input
          placeholder="Nome"
          type="text"
          name="ds_nome"
          value={cliente.ds_nome}
          onChange={handleChange}
          required
        />

        <label>Número</label>
        <input
          placeholder="(11) 0000-0000"
          type="text"
          name="ds_num_cli"
          value={cliente.ds_num_cli}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          placeholder="exemplo@exemplo.com"
          type="email"
          name="ds_email_cli"
          value={cliente.ds_email_cli}
          onChange={handleChange}
          required
        />

        <label>Comentário</label>
        <textarea
          placeholder="Digite um comentário"
          name="ds_comentario"
          value={cliente.ds_comentario}
          onChange={handleChange}
          required
        />

        <button className="btn_cadastrar" onClick={handleCadastrar}>
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default CadastrarCliente;