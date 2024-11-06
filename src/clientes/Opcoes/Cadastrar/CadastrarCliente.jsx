import React, { useState } from 'react';
import './CadastrarCliente.scss'; 
import img_cliente from '../../../assets/images/img_cliente.png'; 
import { cadastrarCliente } from '../../../services/APIService';


const CadastrarCliente = () => {
    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const [cliente, setCliente] = useState({
        ds_nome: '',
        ds_num_cli: '',
        ds_email_cli: '',
        ds_comentario: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCliente({
          ...cliente,
          [name]: value
        });
      };
    
  const handleCadastrar = async (e) => {
    e.preventDefault(); 
    try {
           
            const response = await cadastrarCliente(cliente); 
            alert('Cliente cadastrado com sucesso!');
    
      
      setTimeout(() => setMensagemSucesso(''), 3000);

      
      setCliente({
        ds_nome: '',
        ds_num_cli: '',
        ds_email_cli: '',
        ds_comentario: ''
      });
    } catch (error) {
      alert('Erro ao cadastrar o Cliente.'); 
    }
  };

  return (
    <div className="page_container">
      <div className="div_fots">
        <img className='img' src={img_cliente} style={{ width: 276, height: 211, flexShrink: 0 }} alt="" />
        <h1>Clientes</h1>
      </div>
      <h1>Cadastrar Cliente</h1>

      {mensagemSucesso && <p className="mensagem-sucesso">{mensagemSucesso}</p>}

      <div className="borda_cadastrar">
        <label>Nome</label>
        <input
          placeholder='Nome'
          type="text"
          name="ds_nome"
          value={cliente.ds_nome}
          onChange={handleChange}
          required
        />

        <label>Número</label>
        <input
          placeholder='(11) 0000-0000'
          type="text"
          name="ds_num_cli"
          value={cliente.ds_num_cli}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          placeholder='exemplo@exemplo.com'
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
