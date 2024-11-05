import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../services/APIService.js'; 
import './Login.scss';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const credenciais = { usuario: username, senha: password }; 
            const { token } = await loginUser(credenciais); 
            
            // Salva o token no localStorage
            localStorage.setItem('token', token);


            navigate('/pre-tabela');
        } catch (err) {
            setError('Erro ao fazer login. Verifique suas credenciais.');
            console.error('Erro de login:', err);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                {error && <div className="error">{error}</div>} {/* Mostra a mensagem de erro */}
                <div className="input-group">
                    <label htmlFor="username">Usuário:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        required 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Senha:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button type="submit" className='botao'>Entrar</button>
            </form>
            <Link to="/" className="back-button">Voltar para a Página Inicial</Link>
        </div>
    );
};

export default Login;
