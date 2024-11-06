import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img_cliente from '../../../assets/images/img_cliente.png'; 
import './AlterarCliente.scss'; 
import { AlterarClientePorId } from '../../../services/APIService';


const AlterarCliente = () => {
  const [clienteId, setClienteId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAlterarClick = async () => {
    if (clienteId) {
        try {       
            const service = await AlterarClientePorId(clienteId); 
            if (service) {        
                navigate(`/alterar-cliente2/${clienteId}`); 
            } else {
                setError('Cliente não encontrado.');
            }
        } catch (err) {
            setError('Erro ao consultar o cliente.'); 
        }
    } else {
        alert('Por favor, insira o ID do Cliente.');
    }
  };

  return (
    <div className="page_container">
      <div className="div_fots">
        <img className='img' src={img_cliente} style={{ width: 276, height: 211, flexShrink: 0 }} alt="" />
        <h1>Clientes</h1>
      </div>
      <h1>Alterar Cliente</h1>

      <div className='borda_alterar1'>
        <h4>Deseja alterar por qual ID</h4>
        <input
          type="text"
          placeholder="ID do cliente a consultar"
          value={clienteId}
          onChange={(e) => setClienteId(e.target.value)}
        />
        <button className="btn_alterar1" onClick={handleAlterarClick}>Alterar</button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default AlterarCliente;