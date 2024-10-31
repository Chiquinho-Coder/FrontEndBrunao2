import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img_servico from '../../../assets/images/img_servico.png';
import './AlterarServico.scss';
import { AlterarPorId } from '../../../services/APIService';

const AlterarServico = () => {
  const [servicoId, setServicoId] = useState(''); 
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAlterarClick = async () => {
    if (servicoId) {
        try {       
            const service = await AlterarPorId(servicoId); 
            if (service) {        
                navigate(`/alterar-servico2/${servicoId}`); 
            } else {
                setError('Serviço não encontrado.');
            }
        } catch (err) {
            setError('Erro ao consultar o serviço.'); 
        }
    } else {
        alert('Por favor, insira o ID do serviço.');
    }
};


  return (
    <div className="page_container">
      <div className="div_fots">
        <img className='img' src={img_servico} style={{ width: 276, height: 211, flexShrink: 0 }} alt="" />
        <h1>Serviços</h1>
      </div>
      <h1>Alterar Serviço</h1>
        
      <div className='borda_alterar1'>
        <h4>Deseja alterar por qual ID</h4>
        <input
          type="text"
          placeholder="ID do serviço a consultar"
          value={servicoId}
          onChange={(e) => setServicoId(e.target.value)}
        />
        <button className="btn_alterar1" onClick={handleAlterarClick}>Alterar</button>
      </div>
    </div>
  );
};

export default AlterarServico;