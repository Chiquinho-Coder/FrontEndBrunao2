import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConsultarCliente.scss';
import img_cliente from '../../../assets/images/img_cliente.png';
import { ConsultarClientePorId } from '../../../services/APIService';
const ConsultarCliente = () => {
    const [clienteId, setClienteId] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleConsultarClick = async () => {
        if (clienteId) {
            try {
                
                const service = await ConsultarClientePorId(clienteId);
                if (service) {
                    
                    navigate(`/consultar-cliente2/${clienteId}`); 
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
                <img className='img' src={img_cliente} style={{ width: 276, height: 211, flexShrink: 0 }} alt="" />
                <h1>Clientes</h1>
            </div>
            <h1>Consultar Cliente</h1>
            {error && <p className="error-message">{error}</p>}
            <div className='borda_consultar'>
                <h4>Deseja consultar por qual ID</h4>
                <input
                    type="text"
                    placeholder="ID do cliente a consultar"
                    value={clienteId}
                    onChange={(e) => setClienteId(e.target.value)}
                />
                <button className="btn_consultar" onClick={handleConsultarClick}>
                    Consultar
                </button>
            </div>
        </div>
    );
};

export default ConsultarCliente;
