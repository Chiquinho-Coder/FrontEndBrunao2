import React, { useState } from 'react';
import './ExcluirCliente.scss'; 
import img_cliente from '../../../assets/images/img_cliente.png'; 
import { deletarCliente } from '../../../services/APIService';

const ExcluirCliente = () => {
  const [clienteId, setClienteId] = useState('');
  
  const handleDelete = async () => {
    if (clienteId.trim() === '') {
        alert("Por favor, insira o ID do serviço que deseja excluir.");
        return;
    }

    try {
        const response = await deletarCliente(clienteId); 
        alert(`Cliente com ID ${clienteId} foi excluído com sucesso!`);
        setClienteId(''); 
    } catch (error) {
        if (error.response && error.response.status === 404) {
            alert(`Erro: Cliente com ID ${clienteId} não encontrado.`); 
        } else {
            alert(`Erro ao excluir o Cliente com ID ${clienteId}.`); 
        }
    }
  };

  return (
    <div className="page_container">
      <div className="div_fots">
        <img className='img' src={img_cliente} style={{ width: 276, height: 211, flexShrink: 0 }} alt="" />
        <h1>Clientes</h1>
      </div>

      <h2>Deseja excluir qual cliente?</h2>

      <div className='borda_excluir'>
        <h4>ID do Cliente a excluir:</h4>
        <input 
          type="text" 
          placeholder="Insira o ID do cliente" 
          value={clienteId} 
          onChange={(e) => setClienteId(e.target.value)} 
        />
        <button className="btn_delete" onClick={handleDelete}>Excluir</button>
      </div>
    </div>
  );
};

export default ExcluirCliente;
