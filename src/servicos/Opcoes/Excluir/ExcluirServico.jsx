import React, { useState } from 'react';
import './ExcluirServico.scss';
import img_servico from '../../../assets/images/img_servico.png';
import { deletarUser } from '../../../services/APIService.js';

const ExcluirServico = () => {
  const [servicoId, setServicoId] = useState(''); 
  
  const handleDelete = async () => {
      if (servicoId.trim() === '') {
          alert("Por favor, insira o ID do serviço que deseja excluir.");
          return;
      }

      try {
          const response = await deletarUser(servicoId); 
          alert(`Serviço com ID ${servicoId} foi excluído com sucesso!`);
          setServicoId(''); 
      } catch (error) {
          if (error.response && error.response.status === 404) {
              alert(`Erro: Serviço com ID ${servicoId} não encontrado.`); 
          } else {
              alert(`Erro ao excluir o serviço com ID ${servicoId}.`); 
          }
      }
  };
  return (
    <div className="page_container">
      <div className="div_fots">
      <img className='img' src={img_servico} style={{ width: 276, height: 211, flexShrink: 0 }}alt="" />
      <h1>Serviços</h1>
      </div>

      <h2>Deseja excluir qual serviço?</h2>

      <div className='borda_excluir'>
        <h4>Id do Serviço a excluir:</h4>
      { }
      <input 
                type="text" 
                placeholder="Insira o ID do serviço" 
                value={servicoId} 
                onChange={(e) => setServicoId(e.target.value)} 
            />
      <button className="btn_delete" onClick={handleDelete}>Excluir</button>
      </div>
    </div>
  );
};

export default ExcluirServico;
