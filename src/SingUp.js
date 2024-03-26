import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signedUp, setSignedUp] = useState(false);

    const handleSignUp = async () => {
        // Implemente sua lógica de registro aqui
        // Por exemplo, usando Firebase Authentication
        try {
            // Registro de usuário
            // Se o registro for bem-sucedido, defina signedUp como true
            setSignedUp(true);
        } catch (error) {
            console.error('Erro de registro:', error);
        }
    };

    if (signedUp) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
}

export default SignUp;
