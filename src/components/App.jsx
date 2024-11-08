// eslint-disable-next-line no-unused-vars
import React from 'react';
import Menu from './Menu/Menu.jsx';
import '../App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PlayerSearch from "./Menu/PlayerSearch/PlayerSearch.jsx";
import Login from "./Login/Login.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/menu" element={<Menu />}/>
                <Route path="/search" element={<PlayerSearch />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
