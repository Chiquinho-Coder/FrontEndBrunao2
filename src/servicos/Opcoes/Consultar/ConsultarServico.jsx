import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConsultarServico.scss';
import img_servico from '../../../assets/images/img_servico.png';
import { ConsultarPorId } from '../../../services/APIService'; 

const ConsultarServico = () => {
    const [servicoId, setServicoId] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleConsultarClick = async () => {
        if (servicoId) {
            try {
                
                const service = await ConsultarPorId(servicoId);

      
                if (service) {
                    
                    navigate(`/consultar-servico2/${servicoId}`); 
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
            <h1>Consultar Serviço</h1>
            {error && <p className="error-message">{error}</p>}
            <div className='borda_consultar'>
                <h4>Deseja consultar por qual ID</h4>
                <input
                    type="text"
                    placeholder="ID do serviço a consultar"
                    value={servicoId}
                    onChange={(e) => setServicoId(e.target.value)}
                />
                <button className="btn_consultar" onClick={handleConsultarClick}>
                    Consultar
                </button>
            </div>
        </div>
    );
};

export default ConsultarServico;
