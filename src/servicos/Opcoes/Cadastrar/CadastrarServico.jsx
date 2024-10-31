import React, { useState } from 'react';
import './CadastrarServico.scss';
import img_servico from '../../../assets/images/img_servico.png';
import { cadastrarServico } from '../../../services/APIService';


const CadastrarServico = () => {
  const [mensagemSucesso, setMensagemSucesso] = useState('');
  const [servico, setServico] = useState({
    fk_id_cli: '',
    ds_endereco: '',
    vlr_servico: '',
    dt_estimada: '',
    ds_servico: ''
  });

  // Função para lidar com a mudança nos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setServico({
      ...servico,
      [name]: value
    });
  };

  
  const handleCadastrar = async (e) => {
    e.preventDefault(); 
    try {
           
            const response = await cadastrarServico(servico); 
            alert('Serviço cadastrado com sucesso!');
    
      
      setTimeout(() => setMensagemSucesso(''), 3000);

      
      setServico({
        fk_id_cli: '',
        ds_endereco: '',
        vlr_servico: '',
        dt_estimada: '',
        ds_servico: ''
      });
    } catch (error) {
      alert('Erro ao cadastrar o serviço. Digite um ID de cliente existente.'); 
    }
  };
  return (
    <div className="page_container">
    <div className="div_fots">
      <img className='img' src={img_servico} style={{ width: 276, height: 211, flexShrink: 0 }}alt="" />
      <h1>Serviços</h1>
      </div>
      <h1>Cadastrar Serviço</h1>

      {mensagemSucesso && <p className="mensagem-sucesso">{mensagemSucesso}</p>}


      <div className="borda_cadastrar">
        <label>Cliente ID :</label>
        <input  
        placeholder='ID'
        type="text"
              name="fk_id_cli"
              value={servico.fk_id_cli}
              onChange={handleChange}
              required />
    
        <label>Endereço</label>
        <input placeholder='Endereço'
        type="text"
              name="ds_endereco"
              value={servico.ds_endereco}
              onChange={handleChange}
              required />
      
        <label>Valor</label>
        <input  placeholder='Valor'
        type="number"
              name="vlr_servico"
              value={servico.vlr_servico}
              onChange={handleChange}
              required />
   
        <label>Data Limite</label>
        <input placeholder='Data Estimada'
        type="date"
              name="dt_estimada"
              value={servico.dt_estimada}
              onChange={handleChange}
              required/>
      
     
        <label>Descrição</label>
        <textarea placeholder="Digite a descrição"  
              name="ds_servico"
              value={servico.ds_servico}
              onChange={handleChange}
              required/>
      <button className="btn_cadastrar" onClick={handleCadastrar}>
        Cadastrar
      </button>
      </div>
    </div>
  );
};

export default CadastrarServico;
