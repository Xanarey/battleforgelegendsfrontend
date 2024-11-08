import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    const navigate = useNavigate();

    const handlePlayerSearch = () => {
        navigate('/search');
    };

    return (
        <div className="menu-box">
            <h1>Battleforge Legends</h1>
            <button className="menu-button" onClick={handlePlayerSearch}>
                Поиск игроков
            </button>
            <button className="menu-button" disabled>
                Выход
            </button>
        </div>

    );
};

export default Menu;
