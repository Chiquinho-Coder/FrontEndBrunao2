import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;


export async function loginUser(credenciais) {
    try {
        const response = await axios.post(`${API_URL}/login`, credenciais);
        return response.data; 
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        throw error; 
    }
}

export async function deletarUser(id) {
    try {
        const response = await axios.delete(`${API_URL}/excluir-servico/${id}`, id);
        return response.data; 
    } catch (error) {
        console.error('Erro ao excluir o serviço:', error);
        throw error; 
    }
}

export async function cadastrarServico(pessoa) {
    const token = localStorage.getItem('token'); 

    try {
        const response = await axios.post(`${API_URL}/cadastrar-servico`, pessoa, {
            headers: {
                Authorization: `Bearer ${token}`, 
            },
        });
        return response.data; 
    } catch (error) {
        console.error('Erro ao fazer cadastro:', error.response ? error.response.data : error);
        throw error; 
    }
}

export async function Consultar() {
    try {
        const response = await axios.get(`${API_URL}/consultar-servico`);
        return response.data; 
       
    } catch (error) {
        console.error('Erro ao consultar serviço:', error); 
        throw error; 
    }
}

export async function ConsultarPorId(id) {
    try {
        const response = await axios.get(`${API_URL}/consultar-servico/${id}`);
        return response.data; 
    } catch (error) {
        console.error('Erro ao consultar serviço por ID:', error); 
        throw error; 
    }
}

export async function AlterarPorId(id, pessoa) {
    try {
        const response = await axios.put(`${API_URL}/alterar-servico/${id}`, pessoa); 
        return response.data;
    } catch (error) {
        console.error('Erro ao alterar serviço:', error);
        throw error; 
    }
}