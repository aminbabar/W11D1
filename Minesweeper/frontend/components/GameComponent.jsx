
import React from "react";
import * as Minesweeper from "../../minesweeper";
import Board from './BoardComponent'

class Game extends React.Component {
    constructor() {
        super();
        // debugger
        this.state = {
            board: new Minesweeper.Board()
        }

        this.updateGame = this.updateGame.bind(this);
    }

    updateGame() {

    }

    render() {

        return (
            <Board updateGame={this.updateGame} board={this.state.board}> </Board>
        )
    }
}

export default Game;