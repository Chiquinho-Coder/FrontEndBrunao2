import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ConsultarCliente2.scss';
import img_cliente from '../../../assets/images/img_cliente.png';
import { ConsultarClientePorId } from '../../../services/APIService';

const ConsultarCliente2 = () => {
  const { id } = useParams(); 
  const [cliente, setCliente] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        const data = await ConsultarClientePorId(id);
        console.log(data); 
        if (data.length > 0) { 
            setCliente(data[0]); 
        } else {
          setError('Serviço não encontrado.');
        }
      } catch (err) {
        alert('Erro ao buscar o serviço ID Invalido.');
        console.error(err);
      }
    };


    fetchCliente();
  }, [id]); 

  return (
    <div className="page_container">
      <div className="div_fots">
        <img className='img' src={img_cliente} style={{ width: 276, height: 211, flexShrink: 0 }} alt="" />
        <h1>Clientes</h1>
      </div>
      <h1 className="title">Consulta de Cliente - ID: {id}</h1>

      {error && <p className="error-message">{error}</p>}
      {cliente ? (
        <div className="borda_cadastrar">
          <label>Nome:</label>
          <input type="text" value={cliente.ds_nome} readOnly />

          <label>Número:</label>
          <input type="text" value={cliente.ds_num_cli} readOnly />

          <label>Email:</label>
          <input type="email" value={cliente.ds_email_cli} readOnly />

          <label>Comentário:</label>
          <textarea value={cliente.ds_comentario} readOnly />
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default ConsultarCliente2;
