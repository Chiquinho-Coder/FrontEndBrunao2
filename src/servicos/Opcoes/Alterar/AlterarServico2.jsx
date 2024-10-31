import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './AlterarServico2.scss';
import img_servico from '../../../assets/images/img_servico.png';

const AlterarServico2 = () => {
  const { servicoId } = useParams();
  const [clienteId, setClienteId] = useState(''); // Estado para o ID do cliente
  const [endereco, setEndereco] = useState('');
  const [valor, setValor] = useState('');
  const [dataLimite, setDataLimite] = useState('');
  const [descricao, setDescricao] = useState('');
  const [loading, setLoading] = useState(true);

  const API_URL = 'http://localhost:3010';

  const fetchServico = async () => {
    try {
      const response = await axios.get(`${API_URL}/alterar-servico/${servicoId}`);
      const { fk_id_cli, ds_endereco, vlr_servico, dt_estimada, ds_servico } = response.data;
      
      setClienteId(fk_id_cli);
      setEndereco(ds_endereco);
      setValor(vlr_servico);
      setDataLimite(dt_estimada);
      setDescricao(ds_servico);
    } catch (error) {
      console.error('Erro ao buscar o serviço:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServico(); 
  }, [servicoId]);
  const handleClienteIdChange = (e) => setClienteId(e.target.value);
  const handleEnderecoChange = (e) => setEndereco(e.target.value);
  const handleValorChange = (e) => setValor(e.target.value);
  const handleDataChange = (e) => setDataLimite(e.target.value);
  const handleDescricaoChange = (e) => setDescricao(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/alterar-servico/${servicoId}`, {
        fk_id_cli: clienteId,
        ds_endereco: endereco,
        vlr_servico: valor,
        dt_estimada: dataLimite,
        ds_servico: descricao,
      });
      alert('Serviço atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar o serviço:', error);
    }
  };

  if (loading) {
    return <div>Carregando...</div>; 
  }

  return (
    <div className="page_container">
      <div className="div_fots">
        <img className='img' src={img_servico} style={{ width: 276, height: 211, flexShrink: 0 }} alt="" />
        <h1>Serviços</h1>
      </div>
      <h1 className="title">Alterar Serviço - ID: {servicoId}</h1>

      <div className="borda_alterar2">
        <form onSubmit={handleSubmit}>
          <label htmlFor="id">ID Cliente: </label>
          <input type="text" id="id" value={clienteId} onChange={handleClienteIdChange}/>
          
          <label>Endereço</label>
          <input type="text" value={endereco} onChange={handleEnderecoChange} placeholder="Digite o endereço" />
          
          <label>Valor</label>
          <input type="number" value={valor} onChange={handleValorChange} placeholder="Digite o valor" />

          <label>Data Limite</label>
          <input type="date" value={dataLimite} onChange={handleDataChange} />
          
          <label>Descrição</label>
          <textarea value={descricao} onChange={handleDescricaoChange} placeholder="Digite a descrição" />

          <button type="submit" className="btn_alterar">Alterar</button>
        </form>
      </div>
    </div>
  );
};

export default AlterarServico2;
