import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AlterarCliente2.scss";
import img_cliente from "../../../assets/images/img_cliente.png";

const AlterarCliente2 = () => {
  const { clienteId } = useParams();
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const API_URL = "http://localhost:3010";

  const fetchCliente = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/alterar-cliente/${clienteId}`
      );
      const { ds_nome, ds_num_cli, ds_email_cli, ds_comentario } =
        response.data;

      setNome(ds_nome);
      setNumero(ds_num_cli);
      setEmail(ds_email_cli);
      setComentario(ds_comentario);
    } catch (error) {
      console.error("Erro ao buscar o cliente:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCliente();
  }, [clienteId]);

  const handleNomeChange = (e) => setNome(e.target.value);
  const handleNumeroChange = (e) => setNumero(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleComentarioChange = (e) => setComentario(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/alterar-cliente/${clienteId}`, {
        ds_nome: nome,
        ds_num_cli: numero,
        ds_email_cli: email,
        ds_comentario: comentario,
      });
      alert("Cliente atualizado com sucesso!");
      navigate("/clientes");
    } catch (error) {
      console.error("Erro ao atualizar o cliente:", error);
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

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
      <Link to="/alterar-cliente">
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
      <h1 className="title">Alterar Cliente - ID: {clienteId}</h1>

      <div className="borda_alterar2">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome: </label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={handleNomeChange}
            placeholder="Digite o nome Novo"
          />

          <label>Número</label>
          <input
            type="text"
            value={numero}
            onChange={handleNumeroChange}
            placeholder="Digite o número Novo"
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Digite o email Novo"
          />

          <label>Comentário</label>
          <textarea
            value={comentario}
            onChange={handleComentarioChange}
            placeholder="Digite o comentário Novo"
          />

          <button type="submit" className="btn_alterar">
            Alterar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AlterarCliente2;
