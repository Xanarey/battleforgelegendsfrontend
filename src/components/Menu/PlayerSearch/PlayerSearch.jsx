import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PlayerSearch.css';
import {useEffect, useState} from "react";
import {Stomp} from "@stomp/stompjs";
import SockJS from 'sockjs-client';

const PlayerSearch = () => {
    const navigate = useNavigate();
    const [players, setPlayers] = useState([]);
    const [setStatus] = useState({});

    useEffect(() => {
        fetch('http://localhost:8080/users')
            .then(response => response.json())
            .then(data => setPlayers(data))
            .catch(error => console.error('Ошибка загрузки списка игроков:', error));
    }, []);

    useEffect(() => {
        const createWebSocket = () => new SockJS('http://localhost:8080/ws');
        const stompClient = Stomp.over(createWebSocket);


        stompClient.connect({}, () => {
            stompClient.subscribe('/topic/status', (message) => {
                const updatedStatus = JSON.parse(message.body);
                setStatus((prevStatuses) => ({
                    ...prevStatuses,
                    [updatedStatus.name]: updatedStatus.status,
                }));
            });
        });

        return () => {
            if (stompClient.connected) {
                stompClient.disconnect(() => {
                    console.log('Disconnected');
                });
            }
        };

    }, []);

    return (
        <div className="player-search-container">
            <h1 className="player-search-title">Список игроков</h1>
            <div className="player-table">
                {players.map((player) => (
                    <div key={player.id} className="player-row">
                        <div className="player-name">{player.username}</div>
                        <div className="player-status">{player.status || 'Неизвестно'}</div>
                    </div>
                ))}
            </div>

            <button className="back-button" onClick={() => navigate('/')}>
                Назад в меню
            </button>
        </div>
    );
};

export default PlayerSearch;