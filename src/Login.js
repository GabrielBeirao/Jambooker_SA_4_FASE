import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = async () => {
        // Implemente sua lógica de autenticação aqui
        // Por exemplo, usando Firebase Authentication
        try {
            // Autenticação do usuário
            // Se o login for bem-sucedido, defina loggedIn como true
            setLoggedIn(true);
        } catch (error) {
            console.error('Erro de login:', error);
        }
    };

    if (loggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
