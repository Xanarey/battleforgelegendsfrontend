import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const username = localStorage.getItem('username');
        if (!username) {
            navigate('/');
        }
    }, [navigate]);

    const handlePlayerSearch = () => {
        navigate('/search');
    };

    const handleLogout = () => {
        localStorage.removeItem('username');
        navigate('/');
    };


    return (
        <div className="menu-box">
            <h1>Battleforge Legends</h1>
            <button className="menu-button" onClick={handlePlayerSearch}>
                Поиск игроков
            </button>
            <button className="menu-button" onClick={handleLogout}>
                Выход
            </button>
        </div>

    );
};

export default Menu;
