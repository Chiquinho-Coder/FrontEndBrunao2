import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ConsultarServico2.scss';
import img_servico from '../../../assets/images/img_servico.png';
import { ConsultarPorId } from '../../../services/APIService'; 

const ConsultarServico2 = () => {
  const { id } = useParams(); 
  const [servico, setServico] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchService = async () => {
      try {
        const data = await ConsultarPorId(id);
        console.log(data); 
        if (data.length > 0) { 
          setServico(data[0]); 
        } else {
          setError('Serviço não encontrado.');
        }
      } catch (err) {
        alert('Erro ao buscar o serviço ID Invalido.');
        console.error(err);
      }
    };

    fetchService();
  }, [id]); 

  return (
    <div className="page_container">
      <div className="div_fots">
        <img className='img' src={img_servico} style={{ width: 276, height: 211, flexShrink: 0 }} alt="" />
        <h1>Serviços</h1>
      </div>
      <h1 className="title">Consulta de Serviço - ID: {id}</h1>

      {error && <p className="error-message">{error}</p>}
      {servico ? (
        <div className="borda_cadastrar">
          <label>Cliente ID:</label>
          <input type="text" value={servico.fk_id_cli} readOnly />

          <label>Endereço:</label>
          <input type="text" value={servico.ds_endereco} readOnly />

          <label>Valor:</label>
          <input type="number" value={servico.vlr_servico} readOnly />

          <label>Data Estimada:</label>
          <input type="date" value={servico.dt_estimada.slice(0, 10)} readOnly />

          <label>Descrição:</label>
          <textarea value={servico.ds_servico} readOnly />
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default ConsultarServico2;
