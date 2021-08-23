import React from "react";
import ReactDOM from "react-dom";
import Game from './components/GameComponent'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');

    ReactDOM.render(
        <Game/>, root
    )
});