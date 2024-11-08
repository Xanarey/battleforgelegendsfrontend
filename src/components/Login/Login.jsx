// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch(`http://localhost:8080/users/check-user?username=${username}`);
            if (response.ok) {
                console.log('Переход выполняется');
                localStorage.setItem('username', username);
                navigate('/menu');
            } else {
                setError('Пользователь не найден');
            }
        } catch (err) {
            console.error('Ошибка при проверке пользователя:', err);
            setError('Произошла ошибка, попробуйте снова');
        }
    };

    return (
        <div className="login-container">
            <h1>Battleforge Legends</h1>
            <input
                type="text"
                placeholder="Введите ник"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="login-input"
            />
            <button onClick={handleLogin} className="login-button">Войти</button>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default Login;
